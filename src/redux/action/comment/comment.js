import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllComment = createAsyncThunk(
  'fetchAllComment',
  async (args, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_FETCH_COMMENT, {
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

export const createComment = createAsyncThunk(
  'createComment',
  async (data, { rejectWithValue }) => {
    const response = await fetch(process.env.REACT_APP_API_ADD_COMMENT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-type': 'application/json',
      },
    });

    const json = await response.json();
    if (!json.success) {
      rejectWithValue(json);
    }
    return json;
  },
);

export const deleteComment = createAsyncThunk(
  'deleteComment',
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      process.env.REACT_APP_API_UPDATE_COMMENT + '/' + data,
      {
        method: 'POST',
      },
    );
    const json = await response.json();
    if (!json.success) {
      rejectWithValue(json);
    }
    return data;
  },
);

export const updateComment = createAsyncThunk(
  'updateComment',
  async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(
      process.env.REACT_APP_API_DELETE_COMMENT + '/' + data.Id,
      {
        method: 'POST',
        body: data.formData,
      },
    );
    const json = await response.json();
    if (!json.success) {
      rejectWithValue(json);
    }
    return json;
  },
);
