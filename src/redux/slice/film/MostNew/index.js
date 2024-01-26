import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesMostNew } from '../../../action/film/MostNew/index';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const MoviesMostNewSlice = createSlice({
  name: 'MoviesMostNewSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchMoviesMostNew.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesMostNew.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchMoviesMostNew.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
