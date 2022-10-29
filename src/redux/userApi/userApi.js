import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export default userApi;
