import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    initializeCount:  (state, action) => {
      state.value = (action.payload || initialState.value);
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
});

export const { initializeCount, increment, decrement } = counterSlice.actions;
export const selectCount = () => useAppSelector((state) => state.counter.value);

export default counterSlice.reducer;