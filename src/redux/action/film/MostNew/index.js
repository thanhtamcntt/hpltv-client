import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMoviesMostNew = createAsyncThunk(
  'fetchMoviesMostNew',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_MOVIES_MOST_NEW);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
