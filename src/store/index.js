import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./toolkitSlice";

export const store = configureStore({
    reducer:{
        tasks: tasksSlice,
    }
});