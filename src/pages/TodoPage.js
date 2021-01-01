import React from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import TodoInput from "../features/todos/TodoInput";
import TodoList from "../features/todos/TodoList";

const TodoPage = () => {
  return (
    <>
      <LoggedHeader />
      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoPage;
