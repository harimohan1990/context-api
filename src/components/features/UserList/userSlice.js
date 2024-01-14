
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../../service/userApi';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await userApi.getUsers();
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
