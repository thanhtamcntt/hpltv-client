import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesMostView } from '../../../action/film/MostView/index';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const MoviesMostViewSlice = createSlice({
  name: 'MoviesMostNewSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all movies
    builder.addCase(fetchMoviesMostView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoviesMostView.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchMoviesMostView.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
