import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <ul>
      {['movie-11', 'movie-12', 'movie-13', 'movie-14', 'movie-15', 'movie-16'].map(movie => {
        return (
          <li key={movie}><Link to={`movies/${movie}`}>{movie}</Link></li>
        )
      })}
    </ul>
  )
}