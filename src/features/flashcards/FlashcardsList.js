import React from "react";
import { useSelector } from "react-redux";
import { Flashcards } from "./Flashcards";
import { selectFlashcards } from "./flashcardSlice";

const FlashcardsList = () => {
  const allFlashcards = useSelector(selectFlashcards);
  const renderedFlashcards = allFlashcards.map((flashcard) => {
    return <Flashcards key={flashcard.id} id={flashcard.id} />;
  });

  return <div>{renderedFlashcards}</div>;
};

export default FlashcardsList;
