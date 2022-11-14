'use strict';

const numberOfNumbers = prompt('how many movies do u watched', '');

const personaMoviesDB = {
      count: numberOfNumbers,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

const lastMovieNameA = prompt('what`s your last movie?', ''),
      lastMovieRatingA = +prompt('how would you rate your last movie', ''),
      lastMovieNameB = prompt('what`s your last movie?', ''),
      lastMovieRatingB = +prompt('how would you rate your last movie', '');

personaMoviesDB.movies[lastMovieNameA] = lastMovieRatingA;
personaMoviesDB.movies[lastMovieNameB] = lastMovieRatingB;

console.log(personaMoviesDB);