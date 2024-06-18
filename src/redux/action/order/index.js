import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_GET_ALL_ORDER } from '../../../configs/apis';

export const fetchAllOrder = createAsyncThunk(
  'fetchAllOrder',
  async (args, { rejectWithValue }) => {
    const response = await fetch(API_GET_ALL_ORDER, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('tokenUser'),
      },
    });
    const data = await response.json();
    if (!data.success) {
      rejectWithValue(data);
    }
    return data;
  },
);
