import React from "react";
import Todos from "./Todos";
import { selectFilteredTodoById } from "./todoSlice";
import { useSelector } from "react-redux";
import TodoStats from "./TodoStats";
import {
  MainWrapper,
  StatsWrapper,
  TodosWrapper,
} from "./styles/TodoListStyles";
import FilterList from "../filters/FilterList";

const TodoList = () => {
  const allTodos = useSelector(selectFilteredTodoById);
  const renderedTodos = allTodos.map((todoId) => {
    return <Todos id={todoId} key={todoId} />;
  });

  return (
    <>
      <MainWrapper>
        <StatsWrapper>
          <TodoStats />
        </StatsWrapper>
        <TodosWrapper>
          <ul>{renderedTodos}</ul>
        </TodosWrapper>
        <StatsWrapper>
          <FilterList />
        </StatsWrapper>
      </MainWrapper>
    </>
  );
};

export default TodoList;
