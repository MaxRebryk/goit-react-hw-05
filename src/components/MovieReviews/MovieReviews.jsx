import { getReviews } from '../../tdbApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function MoviesReviews() {
  const { movieId } = useParams();
  const IntMovieId = parseInt(movieId);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function fetchReviews() {
      const result = await getReviews(IntMovieId);
      setReviews(result.results);
    }
    fetchReviews();
  }, [movieId]);
  console.log(reviews);
  return (
    <main>
      <h1>Movie Reviews</h1>
      {reviews && reviews.length === 0 && <h2>No reviews yet..</h2>}
      <ul>
        {reviews &&
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>{review.author} :</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
