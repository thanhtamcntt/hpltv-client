import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllSeries = createAsyncThunk(
  'fetchAllSeries',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_SERIES);
    const data = await response.json();

    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);

export const fetchSeriesFeature = createAsyncThunk(
  'fetchSeriesFeature',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_SERIES_FEATURE);
    const data = await response.json();

    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
