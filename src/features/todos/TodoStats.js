import React from "react";
import { selectAllTodos } from "./todoSlice";
import { useSelector } from "react-redux";
import {
  MainWrapper,
  SecondWrapper,
  Title,
  Number,
  Number2,
} from "./styles/TodoStatsStyle";

const TodoStats = () => {
  const allTodos = useSelector(selectAllTodos);

  const completedTodos = allTodos.filter((todo) => todo.completed);

  const activeTodos = allTodos.filter((todo) => !todo.completed);

  return (
    <MainWrapper>
      <SecondWrapper>
        <Title>Completed</Title>
        <Number>{completedTodos.length}</Number>
        <Title>Active</Title>
        <Number2>{activeTodos.length}</Number2>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default TodoStats;
