import { Link } from 'react-router-dom';

export const Movies = () => {
  return (
    <ul>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5', 'movie-6'].map(
        movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`}>{movie}</Link>
            </li>
          );
        }
      )}
    </ul>
  );
};
