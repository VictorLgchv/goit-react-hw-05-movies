import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
