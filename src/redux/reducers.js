import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/sliceContacts';
import { filterReducer } from './slices/sliceFilter';
import { userReducer } from './userApi/authSlice';
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: userReducer,
});
