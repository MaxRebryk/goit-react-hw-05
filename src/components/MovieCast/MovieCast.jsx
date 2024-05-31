import { getCredits } from '../../tdbApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function MoviesCast() {
  const { movieId } = useParams();
  const IntMovieId = parseInt(movieId);
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    async function fetchCredits() {
      const result = await getCredits(IntMovieId);
      setCredits(result.cast);
    }
    fetchCredits();
  }, []);
  return (
    <main>
      <h1>Movie Cast</h1>
      <ul>
        {credits &&
          credits.map(credit => {
            return (
              <li key={credit.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                  alt={credit.name}
                />
                <h2>Name: {credit.name}</h2>
                <h3>Gender: {credit.gender === 2 ? 'Male' : 'Female'}</h3>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
