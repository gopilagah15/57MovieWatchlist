import React from 'react';

const MovieReports = ({ movies }) => {
  const watchedMovies = movies.filter((movie) => movie.watched);
  const favoriteGenres = watchedMovies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const sortedGenres = Object.entries(favoriteGenres).sort((a, b) => b[1] - a[1]);
  const mostWatchedGenre = sortedGenres.length ? sortedGenres[0][0] : 'N/A';

  return (
    <div>
      <h2>Movie Reports</h2>
      <p>Total Movies Watched: {watchedMovies.length}</p>
      <p>Most Watched Genre: {mostWatchedGenre}</p>
    </div>
  );
};

export default MovieReports;
