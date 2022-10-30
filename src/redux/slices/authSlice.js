import { createSlice } from '@reduxjs/toolkit';
import {
  userCurrent,
  userLogIn,
  userLogOut,
  userRegister,
} from '../thunks/authThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoged: false,
  error: null,
  isLoading: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: {
    //* РЕЄСТРАЦІЯ
    [userRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [userRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userRegister.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ВХІД
    [userLogIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [userLogIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.error = action.payload.error;
    },
    [userLogIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [userLogOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user = initialState.user;
      state.token = null;
    },
    [userLogOut.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
    },
    [userLogOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [userCurrent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = true;
      state.user = payload;
    },
    [userCurrent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userCurrent.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
