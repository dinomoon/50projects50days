const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=380252036c0c9514576ad6b6cd12feb1&page=2';
const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=380252036c0c9514576ad6b6cd12feb1&query=';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h2>${title}</h2>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h2>Overview</h2>
        <p>
          ${overview}
        </p>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
