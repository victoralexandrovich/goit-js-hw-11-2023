# GoIT JS Homework 11 - Image Search App (JS)
JavaScript homework assignment for the GoIT course (Module 11). Topic: working with REST API, asynchronous JavaScript (`async/await`), HTTP requests using `axios`, pagination, and external UI/lightbox libraries (`Notiflix`, `SimpleLightbox`).

**What was done:**
- Set up the project using `parcel-project-template` and configured automated deployment via GitHub Actions with environment secrets (`PIXABAY_API_KEY`)
- **Image Finder & API Integration:** Implemented asynchronous requests to the public Pixabay API using `axios`, filtering by photo orientation, safe search, and pagination (40 items per page)
- **Search Form & Gallery:** Handled form submissions to fetch and render image cards dynamically into `div.gallery`, ensuring the gallery clears completely on new search queries
- **Notifications & UX (`Notiflix`):** Added warning alerts for empty queries, success messages showing total hits (`Hooray! We found N images.`), and notifications when reaching the end of the collection
- **Advanced Features:** Integrated `SimpleLightbox` for full-size image modal previews with dynamic gallery refreshing (`refresh()`), and implemented smooth page scrolling following each new batch of loaded images

---

# Домашнє завдання 11 GoIT JS — Пошук зображень (JS)
Практичне завдання з курсу JavaScript від GoIT (Модуль 11). Тема: робота з REST API, асинхронний JavaScript (`async/await`), HTTP-запити за допомогою `axios`, пагінація та бібліотеки інтерфейсу й модальних вікон (`Notiflix`, `SimpleLightbox`).

**Що зроблено:**
- Налаштовано проєкт на основі `parcel-project-template` та налаштовано автоматичний деплой через GitHub Actions з передачею захищених змінних середовища (`PIXABAY_API_KEY`)
- **Пошук зображень та API:** Реалізовано асинхронні запити до публічного API Pixabay через бібліотеку `axios` із параметрами фільтрації за орієнтацією, безпечним пошуком та пагінацією (по 40 об'єктів на сторінку)
- **Форма пошуку та галерея:** Налаштовано обробку сабміту форми для динамічного рендерингу карток зображень у `div.gallery` із повним очищенням попередніх результатів перед новим пошуком
- **Сповіщення та UX (`Notiflix`):** Інтегровано сповіщення про порожній запит, успішне знаходження кількості зображень (`Hooray! We found N images.`), а також сповіщення про досягнення кінця колекції результатів
- **Додатковий функціонал:** Підключено бібліотеку `SimpleLightbox` для перегляду збільшених версій фото з обов'язковим оновленням (`refresh()`), а також реалізовано плавне прокручування сторінки після завантаження кожної нової групи карток
