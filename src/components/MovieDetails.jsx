import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies')


  return (
    <>
      <div>Movie Details : {movieId}</div>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
