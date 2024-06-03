import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import css from './MoviesPage.module.css';
import { getSearchResults } from '../../tdbApi';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRequest = searchParams.get('search') || '';
  const [searchResults, setSearchResults] = useState([]);

  async function fetchSearchResults(request) {
    const result = await getSearchResults(request);
    setSearchResults(result.results);
  }

  const handleSubmit = values => {
    setSearchParams({ search: values.search });
  };

  useEffect(() => {
    if (searchRequest) {
      fetchSearchResults(searchRequest);
    }
  }, [searchRequest]);

  const initialValues = { search: searchRequest };

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
