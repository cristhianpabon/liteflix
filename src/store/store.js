import { configureStore } from "@reduxjs/toolkit";
import animationsReducer from "./animations/animationsSlice";
import moviesReducer from "./movies/moviesSlice";
import myMoviesReducer from "./mymovies/mymoviesSlice";

export const store = configureStore({
  reducer: {
    animations: animationsReducer,
    movies: moviesReducer,
    mymovies: myMoviesReducer,
  },
});
