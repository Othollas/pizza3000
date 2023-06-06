import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   arrayPiz:[]
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, action) => {
            state.orders.push({
                id: Date.now(),
                
            })
        }
    }

})

export default dataSlice.reducer;