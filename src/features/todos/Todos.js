import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, selectTodoById } from "./todoSlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  MainWrapper,
  SecondWrapper,
  CheckedIcon,
  Task,
  RemoveIcon,
} from "./styles/TodosStyles";

const Todos = ({ id, backgroundColor }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectTodoById(state, id));

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <MainWrapper>
      <SecondWrapper
        backgroundColor={
          todo.completed ? (backgroundColor = true) : (backgroundColor = false)
        }
      >
        <CheckedIcon onClick={handleToggle}>
          <IoIosCheckmarkCircleOutline />
        </CheckedIcon>
        <Task>{todo.content}</Task>
        <RemoveIcon onClick={handleDelete}>
          <MdRemoveCircleOutline />
        </RemoveIcon>
      </SecondWrapper>
    </MainWrapper>
  );
};

export default Todos;
