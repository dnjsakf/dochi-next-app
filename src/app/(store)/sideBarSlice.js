import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';

const initialState = {
  collapsed: false,
}

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = (!!action.payload);
    },
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { setCollapsed, toggleCollapsed } = sideBarSlice.actions;
export const selectCollapsed = () => useAppSelector((state) => state.sidebar.collapsed);

export default sideBarSlice.reducer;