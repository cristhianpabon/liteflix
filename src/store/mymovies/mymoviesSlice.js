import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myMovies: [],
};

export const myMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMyMovies: (state, action) => {
      state.myMovies = action.payload;
    },
  },
});

export const {
    setMyMovies,
} = myMoviesSlice.actions;

export default myMoviesSlice.reducer;
