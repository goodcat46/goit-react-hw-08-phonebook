import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './slices/sliceFilter';
import { userReducer } from './slices/authSlice';
import { contactsReducer } from './slices/sliceContacts';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: persistedUserReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
