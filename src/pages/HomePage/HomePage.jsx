import { useState, useEffect } from 'react';

import MovieList from '../../components/MovieList/MovieList';
import { getData } from '../../tdbApi';

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Popular Films</h1>

      <MovieList
        data={data.results}
        title={false}
        overview={false}
        image={false}
        link={true}
      />
    </main>
  );
}
