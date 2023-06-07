import { createSlice } from "@reduxjs/toolkit";
import {  } from "react-router-dom";

const initialState = {
  orders: [],
};



const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    
    addId: (state, action) => {
      state.orders.push({
        id: action.payload,
        total: "",
        items: [],
      });
    },
    editPizza: (state, action) => {
      const arrayLocation = state.orders.length - 1
      state.orders[arrayLocation].items.push(action.payload);
    },
  },
});

export const { addId, editPizza } = dataSlice.actions;

export default dataSlice.reducer;
