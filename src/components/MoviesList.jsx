import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
const location = useLocation()

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
};

export default MoviesList;