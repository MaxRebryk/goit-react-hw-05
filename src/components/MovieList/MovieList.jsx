import css from './MovieList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function MovieList({
  data,
  title,
  overview,
  image,
  link,
  linkMovie,
}) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul className={css.list}>
        {data.map(movie => (
          <li key={movie.id} className={css.listItem}>
            {image && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            )}
            {title && <h3>{movie.title}</h3>}
            {link && <Link to={`movies/${movie.id}`}>{movie.title}</Link>}
            {linkMovie && (
              <Link to={`${movie.id}`} state={location}>
                {movie.title}
              </Link>
            )}
            {overview && <p>{movie.overview}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
