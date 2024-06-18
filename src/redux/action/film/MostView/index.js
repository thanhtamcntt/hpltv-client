import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_MOVIES_MOST_VIEW } from '../../../../configs/apis';

export const fetchMoviesMostView = createAsyncThunk(
  'fetchMoviesMostView',
  async (args, { rejectWithValue }) => {
    const response = await fetch(API_MOVIES_MOST_VIEW);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
