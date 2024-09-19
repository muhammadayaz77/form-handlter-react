import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
    name : 'todo',
    initialState : [{
        todoName : 'buy Milk',
        todoDate : '3/5/2023',
    },
    {
        todoName : 'Go to College',
        todoDate : '3/5/2023',
    },
],
reducers : {
    addTodo : (state,action) => {
        console.log(state,action)
        return state = [...state,action.payload];
    },
    removeTodo : (state,action) => {
        return state = state.filter((item) => action.payload != item.todoName);
    }
}
})

export default todoSlice;