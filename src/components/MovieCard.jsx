import React from 'react';
import { MovieControls } from './MovieControls';

export const MovieCard = ({movie, type}) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
        ) : (
          <img src="https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt={movie.title} />
        )}

        <MovieControls type={type} movie={movie} />
    </div>
  )
}
