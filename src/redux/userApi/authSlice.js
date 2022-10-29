import { createSlice } from '@reduxjs/toolkit';
import authThunks from './authThunks';

const initialState = {
  user: { name: '', email: '' },
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
    [authThunks.register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authThunks.register.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [authThunks.register.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ВХІД
    [authThunks.logIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authThunks.logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = false;
      console.log(payload);
    },
    [authThunks.logIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [authThunks.logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user.name = '';
      state.user.email = '';
      state.token = null;
      console.log(action);
    },
    [authThunks.logOut.rejected]: (state, action) => {
      state.isLoading = true;
    },
    [authThunks.logOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [authThunks.current.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = true;
      state.user = payload;
    },
    [authThunks.current.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(state, action);
    },
    [authThunks.current.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
