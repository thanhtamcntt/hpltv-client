import { createSlice } from '@reduxjs/toolkit';
import { fetchAllMovies, fetchMoviesFeature } from '../../action/home/movies';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const MoviesSlice = createSlice({
  name: 'MoviesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchAllMovies.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.message;
    });

    // fetch movies feature
    builder.addCase(fetchMoviesFeature.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesFeature.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchMoviesFeature.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
