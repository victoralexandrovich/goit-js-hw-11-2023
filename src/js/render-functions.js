export function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <a class="gallery-link" href="${largeImageURL}">
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>${likes}</b>
            Likes
          </p>
          <p class="info-item">
            <b>${views}</b>
            Views
          </p>
          <p class="info-item">
            <b>${comments}</b>
            Comments
          </p>
          <p class="info-item">
            <b>${downloads}</b>
            Downloads
          </p>
        </div>
      </div>
    </a>
  `
    )
    .join('');
}
