import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import css from './MoviesPage.module.css';
import { getSearchResults } from '../../tdbApi';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const handleSubmit = values => {
    setsearchRequest(values.search);
  };

  const [searchRequest, setsearchRequest] = useState('');
  const [searchResults, setsearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchSearchResults() {
      const result = await getSearchResults(searchRequest);
      setsearchResults(result.results);
    }
    fetchSearchResults(searchRequest);
    setSearchParams({ search: searchRequest });
  }, [searchRequest]);
  const initialValues = { search: searchParams.get('search') || '' };
  return (
    <main>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field className={css.search} name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {searchResults.length > 0 && (
        <MovieList data={searchResults} linkMovie={true} />
      )}
    </main>
  );
}
