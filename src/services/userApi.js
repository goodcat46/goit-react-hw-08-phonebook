import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: { Authenticate: `Bearer ` },
});

export const token = {
  set(token) {
    userApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    userApi.defaults.headers.Authorization = ``;
  },
};

export default userApi;
