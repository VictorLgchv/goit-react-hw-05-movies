import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/fetchData';
import Loader from './Loader/Loader';
import { defaultImg } from './defaultImg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await fetchCast(movieId);

      try {
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <ul>
        {!loading &&
          cast.length > 0 &&
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <div>
                <img
                  width={80}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                {name}
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
      {!loading && cast.length === 0 && (
        <h3>We have no info about cast of this film</h3>
      )}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}
    </>
  );
};

export default Cast;