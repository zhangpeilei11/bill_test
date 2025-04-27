import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const listStore = createSlice({
    name:'lister',
    initialState:{
        list:[]
    },
    reducers:{
        editList(state,action){
            state.list = action.payload
        }
    }
})
const {editList} = listStore.actions
const getList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(editList(res.data.data.channels))
    }
}
export {getList}
const listerReducer = listStore.reducer
export default listerReducer