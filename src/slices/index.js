import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    orders: [],
    orderid: [],
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, action) => {
            state.orders.push({

                pizza: action.payload

            })

        },
        addOrderid: (state, action) => {
            state.orderid.push({
                id: action.payload
            }
            )
        }
    }

})

export const { add, addOrderid } = dataSlice.actions;

export default dataSlice.reducer;