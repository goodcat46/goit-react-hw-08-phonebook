import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contactThunk';
import { contacts } from 'redux/initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  extraReducers: {
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = [...action.payload];
    },
    [fetchAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [fetchAllContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchAddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = [action.payload, ...state.contacts];
    },
    [fetchAddContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [fetchAddContact.pending](state, action) {
      state.isLoading = true;
    },
    [fetchDeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        user => user.id !== action.payload.id
      );
    },
    [fetchDeleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    [fetchDeleteContact.pending](state, action) {
      state.isLoading = true;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
