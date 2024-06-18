import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_SERIES, API_SERIES_FEATURE } from '../../../configs/apis';

export const fetchAllSeries = createAsyncThunk(
  'fetchAllSeries',
  async (args, { rejectWithValue }) => {
    const response = await fetch(API_SERIES);
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
    const response = await fetch(API_SERIES_FEATURE);
    const data = await response.json();

    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
