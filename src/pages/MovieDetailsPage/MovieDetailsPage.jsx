import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getDetails } from '../../tdbApi';
import { Link } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import GoBack from '../../components/GoBack/GoBack';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const IntMovieId = parseInt(movieId);
  const [data, setData] = useState(null);
  const location = useLocation();
  const prevLocationRef = useRef(location.state);

  useEffect(() => {
    async function fetchData(IntMovieId) {
      const result = await getDetails(IntMovieId);
      setData(result);
    }
    fetchData(IntMovieId);
  }, [IntMovieId]);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(location);

  return (
    <main>
      {data && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_title}
          />
          <h2>{data.original_title}</h2>
          <h3>User score: {data.vote_average}</h3>

          <p>{data.overview}</p>
        </div>
      )}
      <GoBack previousLocation={prevLocationRef.current} />
      <h2>Additional information:</h2>

      <Link to={'reviews'} className={css.link}>
        Reviews
      </Link>
      <Link to={'cast'} className={css.link}>
        Cast
      </Link>

      <Outlet />
    </main>
  );
}
