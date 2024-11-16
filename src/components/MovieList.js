import React from 'react';

const MovieList = ({ movies, onMarkWatched, onRateMovie }) => {
  return (
    <div>
      <h2>My Watchlist</h2>
      {movies.length === 0 && <p>No movies in the watchlist yet.</p>}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - {movie.genre}
            {movie.watched ? (
              <span>
                {' '}Watched | Rating: {movie.rating}
              </span>
            ) : (
              <button onClick={() => onMarkWatched(index)}>Mark as Watched</button>
            )}
            {movie.watched && (
              <div>
                <input
                  type="number"
                  placeholder="Rate (1-5)"
                  min="1"
                  max="5"
                  onChange={(e) => onRateMovie(index, e.target.value)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
