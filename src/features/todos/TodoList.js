import React from "react";
import Todos from "./Todos";
import { selectFilteredTodoById } from "./todoSlice";
import { useSelector } from "react-redux";

const TodoList = () => {
  const allTodos = useSelector(selectFilteredTodoById);
  const renderedTodos = allTodos.map((todoId) => {
    return <Todos id={todoId} key={todoId} />;
  });

  return <ul>{renderedTodos}</ul>;
};

export default TodoList;
