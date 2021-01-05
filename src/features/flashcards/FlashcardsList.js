import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Flashcards from "./Flashcards";
import { selectFlashcards } from "./flashcardSlice";
import { FlashcardWrapper, Title, Break } from "./styles/FlashcardsListStyles";
import FlashcardsModal from "./FlashcardsModal";

const FlashcardsList = () => {
  const [showModal, setShowModal] = useState(false);
  const allFlashcards = useSelector(selectFlashcards);
  const renderedFlashcards = allFlashcards.map((flashcard) => {
    return <Flashcards key={flashcard.id} id={flashcard.id} />;
  });

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? <FlashcardsModal /> : "Eat my ass"}
      </button>
      <Title>Created Flashcards</Title>
      <Break></Break>
      <FlashcardWrapper>{renderedFlashcards}</FlashcardWrapper>;
    </>
  );
};

export default FlashcardsList;
