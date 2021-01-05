import React from "react";
import { useSelector } from "react-redux";
import Flashcards from "./Flashcards";
import { selectFlashcards } from "./flashcardSlice";
import { FlashcardWrapper, Title, Break } from "./styles/FlashcardsListStyles";

const FlashcardsList = () => {
  const allFlashcards = useSelector(selectFlashcards);
  const renderedFlashcards = allFlashcards.map((flashcard) => {
    return <Flashcards key={flashcard.id} id={flashcard.id} />;
  });

  return (
    <>
      <Title>Created Flashcards</Title>
      <Break></Break>
      <FlashcardWrapper>{renderedFlashcards}</FlashcardWrapper>;
    </>
  );
};

export default FlashcardsList;
