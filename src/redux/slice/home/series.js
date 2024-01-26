import { createSlice } from '@reduxjs/toolkit';
import { fetchAllSeries, fetchSeriesFeature } from '../../action/home/series';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const SeriesSlice = createSlice({
  name: 'SeriesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSeries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllSeries.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchAllSeries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //fetch series feature
    builder.addCase(fetchSeriesFeature.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSeriesFeature.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchSeriesFeature.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
