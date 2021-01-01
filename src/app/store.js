import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../src/features/userSlice";
import filterReducer from "../../src/features/filterSlice";
import todoReducer from "../features/todos/todoSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
    filters: filterReducer,
  },
});
