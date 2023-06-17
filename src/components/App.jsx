import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "components/Home";
import { Movies } from "components/Movies";
import { MovieDetails } from "components/MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
