import React from "react";
import { useState } from "react";
import { addFlashcard } from "./flashcardSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  MainWrapper,
  Title,
  Form,
  Input,
  Button,
} from "./styles/FlashcardInputStyles";

const FlashcardsInput = () => {
  const [idx, setIdx] = useState(0);
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
    if (front && back && group) {
      dispatch(
        addFlashcard({
          id: nanoid(),
          front: front,
          back: back,
          group: group,
          completed: false,
        })
      );
      setFront("");
      setBack("");
      setGroup("");
    } else {
      alert("Please fill all three input fields");
    }
  };

  return (
    <MainWrapper>
      <Title>FLASHCARDS</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          placeholder="Add front of the flashcard"
          type="text"
          value={front}
          onChange={handleFront}
        ></Input>
      </Form>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          type="text"
          value={back}
          placeholder="Add back of the flashcard"
          onChange={handleBack}
        ></Input>
      </Form>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          placeholder="Add a group"
          type="text"
          value={group}
          onChange={handleGroup}
        ></Input>
      </Form>
      <Button onClick={handleSubmit}>Submit Flashcard</Button>
    </MainWrapper>
  );
};

export default FlashcardsInput;
