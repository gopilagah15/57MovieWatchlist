import React, { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import MovieReports from './components/MovieReports';

const App = () => {
  const [movies, setMovies] = useState([]);

  // Load movies from LocalStorage
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  // Save movies to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const markWatched = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].watched = true;
    setMovies(updatedMovies);
  };

  const rateMovie = (index, rating) => {
    const updatedMovies = [...movies];
    updatedMovies[index].rating = rating;
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <MovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onMarkWatched={markWatched} onRateMovie={rateMovie} />
      <MovieReports movies={movies} />
    </div>
  );
};

export default App;
