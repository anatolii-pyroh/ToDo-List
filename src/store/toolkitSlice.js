import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTodo(state, action) {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTodo(state, action) {
            return state.filter((element) => element.id !== action.payload.id);
        }
    }
});

export const {addTodo, deleteTodo} = toolkitSlice.actions;

export default toolkitSlice.reducer;