import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    userApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    userApi.defaults.headers.Authorization = ``;
  },
};

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
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const userLogOut = createAsyncThunk('auth/logout', async () => {
  try {
    await userApi.post(`/users/logout`);
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const userCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState }) => {
    token.set(getState().token);

    try {
      const { data } = await userApi.get(`/users/current`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authThunks = {
  register: userRegister,
  logIn: userLogIn,
  logOut: userLogOut,
  current: userCurrent,
};
export default authThunks;
