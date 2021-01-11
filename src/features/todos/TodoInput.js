import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addManyTodos } from "./todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Input, Title, Form, MainWrapper } from "./styles/TodoInputStyles";
import { db } from "../../firebase";
import { selectUser } from "../userSlice";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const [idTracker, setIdTracker] = useState(nanoid());
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      dispatch(addManyTodos(snapshot.docs.map((doc) => doc.data())));
    });
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: idTracker, content: task, completed: false }));
    db.collection("todos").add({
      id: idTracker,
      content: task,
      completed: false,
      userId: user.uid,
    });
    setIdTracker(nanoid());
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
