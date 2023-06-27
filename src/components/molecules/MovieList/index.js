import "./style.css";
import DropdownList from "../DropdownList";
import MovieItem from "../../atoms/MovieItem";
import { useSelector } from "react-redux";

function MovieList() {
  const { selectedPopularMovies: movies } = useSelector(
    (state) => state.movies
  );
  const { myMovies } = useSelector((state) => state.mymovies);
  const getImageUrl = (movieImage) => {
    return `${process.env.REACT_APP_W500_MOVIE_POSTER}${movieImage}${process.env.REACT_APP_API_KEY}`;
  };

  console.log(myMovies);
  return (
    <div className="movieList">
      <DropdownList
        labelText={"Ver"}
        motionValues={{
          initial: { opacity: 0, y: -25 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 },
        }}
      />
      {movies &&
        movies.map((movie, index) => (
          <MovieItem
            key={index}
            movieTitle={movie && movie.title}
            movieUrl={movie.backdrop_path && getImageUrl(movie.backdrop_path)}
            motionValues={{
              initial: { opacity: 0, y: 25 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.37 * index },
            }}
          />
        ))}
    </div>
  );
}

export default MovieList;
