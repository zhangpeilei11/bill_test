import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        addToNumber(state,action){
            state.count = action.payload
        }
    }
})
const {increment,decrement,addToNumber} = counterStore.actions
const counterReducer = counterStore.reducer
export {increment,decrement,addToNumber}
export default counterReducer