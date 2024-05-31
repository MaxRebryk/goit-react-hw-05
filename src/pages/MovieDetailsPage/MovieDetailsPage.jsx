import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getData, getCredits } from '../../tdbApi';
import { Link } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const IntMovieId = parseInt(movieId);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result.results);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chosenMovie = data.find(movie => movie.id === IntMovieId);
  return (
    <main>
      {chosenMovie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${chosenMovie.poster_path}`}
            alt={chosenMovie.original_title}
          />
          <h2>{chosenMovie.original_title}</h2>
          <h3>User score: {chosenMovie.vote_average}</h3>

          <p>{chosenMovie.overview}</p>
        </div>
      )}
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
