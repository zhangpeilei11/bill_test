import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import listerReducer from "./modules/channeStore";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        lister: listerReducer
    }
})
export default store