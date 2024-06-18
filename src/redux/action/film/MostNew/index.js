import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_MOVIES_MOST_NEW } from '../../../../configs/apis';

export const fetchMoviesMostNew = createAsyncThunk(
  'fetchMoviesMostNew',
  async (args, { rejectWithValue }) => {
    const response = await fetch(API_MOVIES_MOST_NEW);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
