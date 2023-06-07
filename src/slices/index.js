import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    add: (state, action) => {
      state.orders.push({
        id: Date.now(),
        pizza: action.payload,
      });
    },
  },
});

export const { add } = dataSlice.actions;

export default dataSlice.reducer;
