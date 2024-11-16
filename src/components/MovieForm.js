import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    rating: '',
    watched: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title && movie.genre) {
      onAddMovie(movie);
      setMovie({ title: '', genre: '', rating: '', watched: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={movie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={movie.genre}
        onChange={handleChange}
        required
      />
      <button type="submit">Add to Watchlist</button>
    </form>
  );
};

export default MovieForm;
