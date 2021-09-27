const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: 1966,
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    score: 8.9
  },]

/// A DECOMMENTER APRES

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(x => x.director);
  return directors;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const moviesOfSteven = movies.filter(movie => (movie.director === 'Steven Spielberg'));
  const dramaMoviesOfSteven = moviesOfSteven.filter(movie => (movie.genre.includes('Drama')));
  return dramaMoviesOfSteven.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) { return 0 };
  let scoreArr = movies.map((movie) => movie.score);
  let sumOfScores = scoreArr.reduce((accumulator, score) => {
    if (typeof score === 'number') {
      return accumulator + score;
    } else {
      return accumulator;
    }
  }, 0);
  return Math.round((sumOfScores / (scoreArr.length)) * 100) / 100
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) { return 0 };
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) { return 0 };
  let scoreArr = dramaMovies.map((movie) => movie.score);
  let sumOfScores = scoreArr.reduce((accumulator, score) => {
    if (typeof score === 'number') {
      return accumulator + score;
    } else {
      return accumulator;
    }
  }, 0);
  return Math.round((sumOfScores / (scoreArr.length)) * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedMovies = [...movies];
  orderedMovies.sort(function (a, b) {
    return a.year - b.year || (b.title > a.title ? -1 : 1);
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderedMovies = [...movies];
  orderedMovies.sort(function (a, b) {
    return b.title > a.title ? -1 : 1;
  });

  return orderedMovies.slice(0, 20).map(item => item.title);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
