import React from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import FlashcardsInput from "../features/flashcards/FlashcardsInput";
import FlashcardsList from "../features/flashcards/FlashcardsList";

const FlashcardPage = () => {
  return (
    <>
      <LoggedHeader />
      <FlashcardsInput />
      <FlashcardsList />
    </>
  );
};

export default FlashcardPage;
