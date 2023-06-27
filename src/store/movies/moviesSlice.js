import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: {},
  selectedPopularMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setSelectedPopularMovies: (state, action) => {
      state.selectedPopularMovies = action.payload;
    },
  },
});

export const {
  setSelectMovie,
  setSelectedPopularMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
