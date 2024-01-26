import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllMovies = createAsyncThunk(
  'fetchAllMovies',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_MOVIES);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);

export const fetchMoviesFeature = createAsyncThunk(
  'fetchMoviesFeature',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_MOVIES_FEATURE);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
