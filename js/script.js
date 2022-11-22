'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('how many movies do u watched', '');
   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many movies do u watched', '');
   }
}
start();

const personaMoviesDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

function rememberMyFilms(films) {
    for (let i = 0; i < 2; i++){
        let x = prompt('what is one of your last films?' , '');
        let y = +prompt('how would you rate it?' , '');
        if (x == null || y == '' || x.length == 0 || y == null || x.length > 50) {
            i--;
        } else{
        films[x] = y;
        }
    }
}
rememberMyFilms(personaMoviesDB.movies);

function personalLevel(count) {
    if (count <= 10) {
        console.log('you wachted few movies');
    } else if(count > 10 && count <= 20) {
        console.log('you are normal wachter');
    } else if(count > 20) {
        console.log("touch grass");
    } else {
        console.log('error');
    }
}
personalLevel(personaMoviesDB.count);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMoviesDB);
    }
}
showMyDB(personaMoviesDB.privat);

function writeYoursGenres(genres) {
    for (let i = 0; i < 3; i++) {
        genres[i] = prompt(`whats your top ${i + 1} genre?`, '');
    }
}
writeYoursGenres(personaMoviesDB.genres);












// let i = 0;
//
// while(i < 2) {
//     let x = prompt('what is one of your last films?' , '');
//     let y = +prompt('how would you rate it?' , '');
//     if (x.length == 0 || y == 0) {
//         i--;
//     } else{
//     personaMoviesDB.movies[x] = y;
//     }
//     i++;
// }
//
// let i = 0;
// do {
// let x = prompt('what is one of your last films?' , '');
//     let y = +prompt('how would you rate it?' , '');
//     if (x.length == 0 || y == 0) {
//         i--;
//     } else{
//     personaMoviesDB.movies[x] = y;
//     }
//     i++;
// }
// while(i < 2);
// for (let i = 0; i < 2; i++){
//     let x = prompt('what is one of your last films?' , '');
//     let y = +prompt('how would you rate it?' , '');
//     if (x == null || y == '' || x.length == 0 || y == null || x.length > 50) {
//         i--;
//     } else{
//     personaMoviesDB.movies[x] = y;
//     }
// }