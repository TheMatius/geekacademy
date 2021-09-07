import { getUserLoggedIn } from './user.js';
import { MOVIES } from './movies.js';

getUserLoggedIn();

document.addEventListener('DOMContentLoaded', () => {
  const movieId = parseInt(window.location.search.split('?id=')[1]);
  if (!isNaN(movieId)) {
    const movie = MOVIES.find(movie => movie.id === movieId);
    if (movie) {
      const movieContainer = document.querySelector('.container');
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <h1>${movie.title}</h1>
        <div class="movie_info">
          <div class="movie_image">
            <img src="${movie.url}" alt="${movie.title}">
          </div>
          <p>${movie.description}</p>
        </div>
      `;
      movieContainer.appendChild(movieElement);
    }
  }
});