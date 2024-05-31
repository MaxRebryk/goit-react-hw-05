import css from './MovieList.module.css';
import { Link } from 'react-router-dom';
export default function MovieList({ data, title, overview, image, link }) {
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
            {title && <h3>{movie.original_title}</h3>}
            {link && (
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            )}
            {overview && <p>{movie.overview}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
