import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from 'redux/thunks/contactsThunks';
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
      state.error = action.payload;
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
      state.error = action.payload;
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
      state.error = action.payload;
    },
    [fetchDeleteContact.pending](state, action) {
      state.isLoading = true;
    },

    [fetchEditContact.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [fetchEditContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchEditContact.pending](state, action) {
      state.isLoading = true;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
