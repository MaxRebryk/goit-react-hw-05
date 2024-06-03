import css from './MovieList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieList({ data }) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul className={css.list}>
        {data.map(movie => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
