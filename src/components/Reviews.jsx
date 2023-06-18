import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchData';
import Loader from './Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetchReviews(movieId);

      try {
        const data = await response.json();
        setReviews(data.results);
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
          reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <div>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </div>
            </li>
          ))}
      </ul>
      {!loading && reviews.length === 0 && (
        <h3>We couldn't find reviews for this film</h3>
      )}

      {error && <h3>Oops, something went wrong: {error.message}</h3>}
    </>
  );
};

export default Reviews;