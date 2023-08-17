import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchMovieSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    fetchMovieFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchMovieSuccess, fetchMovieFailure } = movieSlice.actions;

export default movieSlice.reducer;
