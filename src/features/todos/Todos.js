import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, selectTodoById, editTodo } from "./todoSlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import {
  MainWrapper,
  SecondWrapper,
  CheckedIcon,
  Task,
  RemoveIcon,
  TextArea,
  EditIcon,
} from "./styles/TodosStyles";

const Todos = ({ id, backgroundColor }) => {
  const [editContent, setEditContent] = useState("");
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectTodoById(state, id));

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleClick = () => {
    setIsBeingEdited(true);
  };

  const handleEdit = (e) => {
    setEditContent(e.target.value);
  };

  const handleEditSubmision = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, content: editContent }));
    setIsBeingEdited(false);
  };

  const displayTodos = isBeingEdited ? (
    <MainWrapper>
      <SecondWrapper>
        <TextArea onChange={handleEdit} value={editContent}></TextArea>
        <CheckedIcon onClick={handleEditSubmision}>
          <IoIosCheckmarkCircleOutline />
        </CheckedIcon>
        <RemoveIcon onClick={handleDelete}>
          <MdRemoveCircleOutline />
        </RemoveIcon>
      </SecondWrapper>
    </MainWrapper>
  ) : (
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
        <EditIcon onClick={handleClick}>
          <BsPencilSquare />
        </EditIcon>
        <RemoveIcon onClick={handleDelete}>
          <MdRemoveCircleOutline />
        </RemoveIcon>
      </SecondWrapper>
    </MainWrapper>
  );

  return <div>{displayTodos}</div>;
};

export default Todos;
