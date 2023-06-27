export const getRandomMovie = (movies) => {
  return movies[Math.floor(Math.random() * movies.length)];
};

export const validateIfMovieExists = (movies, movieName) => {
  const validationResult = movies.some((movie) => movie.title === movieName);
  return validationResult;
};

export const getFourPopularMovies = (movies) => {
  const randomPopularMovies = [];
  movies.forEach(() => {
    var randomMovie = getRandomMovie(movies);
    if (!validateIfMovieExists(randomPopularMovies, randomMovie.title)) {
      if (randomPopularMovies.length < 4) {
        randomPopularMovies.push(randomMovie);
      }
    }
  });
  return randomPopularMovies;
};
