import { Link, Outlet, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const {movieId} = useParams();

  return (
    <>
      <div>Movie Details : {movieId}</div>
      <ul>
        <li><Link to='cast'>Cast</Link></li>
        <li><Link to='reviews'>Reviews</Link></li>
      </ul>
      <Outlet />
    </>
    
  )
}