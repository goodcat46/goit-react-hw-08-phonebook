import { createSlice } from '@reduxjs/toolkit';
import authOparations from './authOperations';
console.log(authOparations);

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
    [authOparations.register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOparations.register.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [authOparations.register.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ВХІД
    [authOparations.logIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOparations.logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = false;
      console.log(payload);
    },
    [authOparations.logIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [authOparations.logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user.name = '';
      state.user.email = '';
      state.token = null;
      console.log(action)
    },
    [authOparations.logOut.rejected]: (state, action) => {
      state.isLoading = true;
    },
    [authOparations.logOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [authOparations.current.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state, action);
    },
    [authOparations.current.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(state, action);
    },
    [authOparations.current.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
