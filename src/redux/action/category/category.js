import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCategory = createAsyncThunk(
  'fetchAllCategory',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_CATEGORY);
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
