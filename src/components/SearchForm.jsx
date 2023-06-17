import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" placeholder="Movie title..." />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
