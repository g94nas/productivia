import React from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import FlashcardsInput from "../features/flashcards/FlashcardsInput";

const FlashcardPage = () => {
  return (
    <>
      <LoggedHeader />
      <FlashcardsInput />
    </>
  );
};

export default FlashcardPage;
