import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <h3>Page Not Found</h3>
    <Link to={'/'}>Go to Homepage</Link>
  </>
  )
}

export default NotFound;