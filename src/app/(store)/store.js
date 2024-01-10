import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import sideBarReducer from './sideBarSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      sidebar: sideBarReducer,
    },
  })
}