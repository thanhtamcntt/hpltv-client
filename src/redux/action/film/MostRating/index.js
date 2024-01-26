import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoviesMostRating = createAsyncThunk(
  'fetchMoviesMostRating',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_MOVIES_MOST_RATING);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
