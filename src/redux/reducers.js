import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/sliceContacts';
import { filterReducer } from './slices/sliceFilter';
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
