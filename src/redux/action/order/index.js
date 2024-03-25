import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllOrder = createAsyncThunk(
  'fetchAllOrder',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_GET_ALL_ORDER, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
