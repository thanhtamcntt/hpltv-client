import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoviesMostView = createAsyncThunk(
  'fetchMoviesMostView',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_MOVIES_MOST_VIEW);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
