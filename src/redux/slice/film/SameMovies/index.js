import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesSameMovies } from '../../../action/film/SameMovies';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const SameMoviesSlice = createSlice({
  name: 'SameMoviesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchMoviesSameMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesSameMovies.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchMoviesSameMovies.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
