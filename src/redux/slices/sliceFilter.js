import { createSlice } from '@reduxjs/toolkit';

import { filter } from 'redux/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    applyFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { applyFilterAction } = filterSlice.actions;
