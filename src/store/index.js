import todoSlice from "./todoSlice";
import {configureStore} from '@reduxjs/toolkit'
let todoStore = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }
})
export const todoActions = todoSlice.actions
export default todoStore