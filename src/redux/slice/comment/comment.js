import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllComment,
  createComment,
  createCommentReply,
  deleteComment,
  updateComment,
} from '../../action/comment/comment';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const CommentSlice = createSlice({
  name: 'CommentSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all comment
    builder.addCase(fetchAllComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllComment.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      state.loading = false;
      state.data = [...action.payload.data];
    });
    builder.addCase(fetchAllComment.rejected, (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.error = action.payload.message;
    });

    // create a new comment
    builder.addCase(createComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      console.log('action: ', action.payload.data);
      const user = JSON.parse(localStorage.getItem('userInfo'));
      state.loading = false;
      const newComment = {
        ...action.payload.data,
        userId: user,
      };
      state.data.unshift(newComment);
    });
    builder.addCase(createComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    // create a new comment reply
    builder.addCase(createCommentReply.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCommentReply.fulfilled, (state, action) => {
      console.log('action: ', action.payload.data);
      const user = JSON.parse(localStorage.getItem('userInfo'));
      state.loading = false;
      const newComment = {
        ...action.payload.data,
        userId: user,
      };
      state.data.unshift(newComment);
    });
    builder.addCase(createCommentReply.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    // delete comment
    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      console.log('action: ', action.payload);
      state.loading = false;
      state.data = state.data.filter((data) => data._id !== action.payload);
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    // update a comment
    builder.addCase(updateComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      console.log('action: ', action.payload);
      state.loading = false;
      state.data.map((data) => {
        if (data._id === action.payload.data._id) {
          data.content = action.payload.data.content;
        }
      });
    });
    builder.addCase(updateComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});
