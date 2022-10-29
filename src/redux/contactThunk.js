import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://635937a7ff3d7bddb99c4308.mockapi.io/';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContactsAction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async (newContact, thunkAPI) => {

    try {
      const response = await axios.post(`/contacts`, newContact);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
