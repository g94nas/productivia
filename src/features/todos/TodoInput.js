import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Input, Title, Form, MainWrapper } from "./styles/TodoInputStyles";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), content: task, completed: false }));
    setTask("");
  };

  return (
    <MainWrapper>
      <Title>TODO LIST</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add new task"
        ></Input>
      </Form>
    </MainWrapper>
  );
};

export default TodoInput;
