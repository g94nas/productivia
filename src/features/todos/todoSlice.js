import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

import { FilterStatus } from "../filters/filterSlice";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
  status: "idle",
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    addManyTodos: todosAdapter.addMany,
    removeTodo: todosAdapter.removeOne,
    toggleTodo(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    editTodo: todosAdapter.upsertOne,
  },
});

export default todosSlice.reducer;

export const {
  addTodo,
  addManyTodos,
  removeTodo,
  toggleTodo,
  editTodo,
} = todosSlice.actions;

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
} = todosAdapter.getSelectors((state) => state.todos);

export const selectFilteredTodos = createSelector(
  selectAllTodos,
  (state) => state.filters,
  (todos, filters) => {
    const { status } = filters;
    const showAll = status === FilterStatus.All;
    if (showAll) {
      return todos;
    }

    const showCompleted = status === FilterStatus.Completed;
    return todos.filter((todo) => {
      const statusMatch = showAll || todo.completed === showCompleted;
      return statusMatch;
    });
  }
);

export const selectFilteredTodoById = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
