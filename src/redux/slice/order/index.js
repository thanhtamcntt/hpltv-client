import { createSlice } from '@reduxjs/toolkit';
import { fetchAllOrder } from '../../action/order/index';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all comment
    builder.addCase(fetchAllOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllOrder.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchAllOrder.rejected, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
