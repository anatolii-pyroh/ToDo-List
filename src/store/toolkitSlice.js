import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "tasks",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTask = {
        id: Date.now(),
        name: action.payload.task,
      };
      state.todos.push(newTask);
    },
    deleteTodo(state, action) {
      let { todos } = state;
      state.todos = todos.filter((element) => element.id !== action.payload.id);
    },
    editTodo(state, action) {
      let { todos } = state;
      state.todos = todos.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
      console.log(action.payload);
      console.log(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = toolkitSlice.actions;

export default toolkitSlice.reducer;
