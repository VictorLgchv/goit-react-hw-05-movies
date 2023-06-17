
import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/fetchData';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchTrending();
      try {
        const movies = await response.json();
        setTrending(movies.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading ? <div>Loading...</div> : <MoviesList movies={trending}/>}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}
    </>
  );
};
