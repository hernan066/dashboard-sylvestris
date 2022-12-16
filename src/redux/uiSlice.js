/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menu: false,
  },
  reducers: {
    openMenu: (state) => {
      state.menu = !state.menu;
    },
    closeMenu: (state) => {
      state.menu = "active";
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = uiSlice.actions;
export default uiSlice.reducer;
