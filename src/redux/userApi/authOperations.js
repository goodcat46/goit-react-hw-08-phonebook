import userApi from './userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const userRegister = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }) => {
    try {
      const response = await userApi.post(`/users/signup`, {
        name: name,
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const userLogIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const response = await userApi.post(`/users/login`, {
        email: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const userLogOut = createAsyncThunk('auth/logout', async () => {
  try {
    const response = await userApi.post(`/users/logout`);
    return response;
  } catch (error) {
    console.log(error);
  }
});
const userCurrent = createAsyncThunk('auth/current', async () => {
  try {
    const response = await userApi.post(`/users/current`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const authOparations = {
  register: userRegister,
  logIn: userLogIn,
  logOut: userLogOut,
  current: userCurrent,
};
export default authOparations;
