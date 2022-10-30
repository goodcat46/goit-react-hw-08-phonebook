import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../services/userApi';
import { token } from '../../services/userApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContactsAction',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const response = await userApi.get(`/contacts`);
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
      const response = await userApi.post(`/contacts`, newContact);
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
      const response = await userApi.delete(`/contacts/${contactID}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchEditContact = createAsyncThunk(
  'contacts/fetchEditContact',
  async (editedContact, thunkAPI) => {
    console.log(editedContact);
    try {
      const response = await userApi.patch(
        `/contacts/${editedContact.id}`,
        editedContact.obj
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
