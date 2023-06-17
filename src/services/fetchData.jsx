const API_KEY = '9efd78fa8242429fba828d6622123fa4';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrending = () => {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
}

export const fetchMovies = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
}

export const FetchMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
}

export const fetchCast = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
}

export const fetchReviews = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
}