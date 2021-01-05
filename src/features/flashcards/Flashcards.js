import React from "react";
import {
  removeFlashcard,
  editFlashcard,
  completeFlashcard,
  selectFlashcardsById,
} from "./flashcardSlice";
import { useState } from "react";
import { usedispatch, useSelector } from "react-redux";

const Flashcards = ({ id }) => {
  const flashcard = useSelector((state) => selectFlashcardsById(state, id));
  return <div></div>;
};

export default Flashcards;
