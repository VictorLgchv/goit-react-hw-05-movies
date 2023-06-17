// import { Link } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchData';

export const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    const response = await fetchMovies(query);
    try {
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchData();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const input = evt.target.elements.query;
    const nextParams = input.value.trim() !== '' ? { query: input.value } : {};
    setsearchParams(nextParams);
    input.value = '';
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {loading && <div>Loading...</div>}

      {query && <MoviesList movies={movies} />}
    </>
  );
};
