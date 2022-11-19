'use strict';

const numberOfNumbers = +prompt('how many movies do u watched', '');

const personaMoviesDB = {
      count: numberOfNumbers,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

for (let i = 0; i < 2; i++){
    let x = prompt('what is one of your last films?' , '');
    let y = +prompt('how would you rate it?' , '');
    if (x == null || y == '' || x.length == 0 || y == null || x.length > 50) {
        i--;
    } else{
    personaMoviesDB.movies[x] = y;
    }
}



// /* let i = 0;
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
// } */
//
// /* let i = 0;
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
// while(i < 2); */




if (personaMoviesDB.count <= 10) {
    console.log('you wachted few movies');
} else if(personaMoviesDB.count > 10 && personaMoviesDB.count <= 20) {
    console.log('you are normal wachter');
} else if(personaMoviesDB.count > 20) {
    console.log("touch grass");
} else {
    console.log('error');
}

console.log(personaMoviesDB);