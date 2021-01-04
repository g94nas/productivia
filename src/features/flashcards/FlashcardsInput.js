import React from "react";
import { useState } from "react";
import { addOne } from "./flashcardSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { MainWrapper, Title, Form, Input, Button } from "./FlashcardsStyles";

const FlashcardsInput = () => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [group, setGroup] = useState("");
  const dispatch = useDispatch();

  const handleFront = (e) => {
    setFront(e.target.value);
  };

  const handleBack = (e) => {
    setBack(e.target.value);
  };

  const handleGroup = (e) => {
    setGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addOne({
        id: nanoid(),
        front: front,
        back: back,
        group: group,
        completed: false,
      })
    );
  };

  return (
    <MainWrapper>
      <Title>Flashcards</Title>
      <Form>
        <Input
          required
          type="text"
          value={front}
          onChange={handleFront}
        ></Input>
      </Form>
      <Form>
        <Input required type="text" value={back} onChange={handleBack}></Input>
      </Form>
      <Form>
        <Input
          required
          type="text"
          value={group}
          onChange={handleGroup}
        ></Input>
      </Form>
      <Button onSubmit={handleSubmit}>Submit Flashcard</Button>
    </MainWrapper>
  );
};

export default FlashcardsInput;
