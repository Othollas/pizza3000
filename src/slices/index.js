import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addId: (state, action) => {
            state.orders.push({
                id: Date.now(),

            })

        },

    }

})

export const { add } = dataSlice.actions;

export default dataSlice.reducer;