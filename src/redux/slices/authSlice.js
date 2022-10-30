import { createSlice } from '@reduxjs/toolkit';
import authThunks from '../thunks/authThunks';

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
    [authThunks.register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authThunks.register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
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
    [authThunks.logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.error = action.payload.error;
    },
    [authThunks.logIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [authThunks.logOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoged = false;
      state.user = initialState.user;
      state.token = null;
    },
    [authThunks.logOut.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
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
      state.error = action.payload.error;
    },
    [authThunks.current.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
