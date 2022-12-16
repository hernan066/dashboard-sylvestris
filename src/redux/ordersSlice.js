/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrders: (state, { payload }) => {
      state.orders = payload;
    },
    updateOrders: (state, { payload }) => {
      state.orders = state.orders.map((order) => {
        if (order.id === payload.id) {
          return {
            ...order,
            status: payload.status,
          };
        } else {
          return order;
        }
      });
    },
    deleteOrders: (state, { payload }) => {
      state.orders = state.orders.filter((order) => order.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrders, updateOrders, deleteOrders } = orderSlice.actions;
export default orderSlice.reducer;
