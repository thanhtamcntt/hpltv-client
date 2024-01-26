import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesMostRating } from '../../../action/film/MostRating';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const MoviesMostRatingSlice = createSlice({
  name: 'MoviesMostRatingSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchMoviesMostRating.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesMostRating.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchMoviesMostRating.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
