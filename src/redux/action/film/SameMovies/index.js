import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoviesSameMovies = createAsyncThunk(
  'fetchMoviesSameMovies',
  async (filmId, { rejectWithValue }) => {
    const response = await fetch(
      process.env.REACT_APP_API_MOVIES_CAN_TO_MATCH + '/' + filmId,
    );
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
