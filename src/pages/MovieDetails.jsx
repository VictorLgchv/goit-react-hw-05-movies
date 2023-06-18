import Loader from 'components/Loader/Loader';
import { defaultImg } from 'components/defaultImg';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchData';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const response = await fetchMovieDetails(movieId);
      try {
        console.log(response)
        const data = await response.json();
        console.log(data)
        setMovieData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const { poster_path, title, vote_average, overview } = movieData;
  const genres =
    movieData.genres?.length > 0
      ? movieData.genres.map(genre => genre.name).join(', ')
      : [];

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go Back</Link>
      <br />
      {loading && <Loader />}

      {!loading && movieData && (
        <>
          <div>
            <img
              width={300}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultImg
              }
              alt={title}
            />
            <div>
              <h2>{title}</h2>
              <p>User score: {parseInt(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </div>
          </div>
        </>
      )}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
      
    </>
  );
};
