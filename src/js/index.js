import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './pixabay-api';
import { createGalleryMarkup } from './render-functions';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    return;
  }

  currentQuery = query;
  currentPage = 1;
  gallery.innerHTML = '';
  hideLoadMoreBtn();

  try {
    const data = await fetchImages(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    gallery.innerHTML = createGalleryMarkup(data.hits);
    lightbox.refresh();

    Notify.success(`Hooray! We found ${totalHits} images.`);

    if (data.hits.length < totalHits) {
      showLoadMoreBtn();
    }
  } catch (error) {
    Notify.failure('Something went wrong. Please try again later.');
  }

  form.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;

  try {
    const data = await fetchImages(currentQuery, currentPage);

    gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(data.hits));
    lightbox.refresh();

    smoothScroll();

    const loadedImagesCount =
      currentPage * 40 <= totalHits ? currentPage * 40 : totalHits;

    if (loadedImagesCount >= totalHits) {
      hideLoadMoreBtn();
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    Notify.failure('Something went wrong. Please try again later.');
  }
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.add('is-shown');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.remove('is-shown');
}

function smoothScroll() {
  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
