import React from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import FlashcardsInput from "../features/flashcards/FlashcardsInput";
import FlashcardsList from "../features/flashcards/FlashcardsList";
import FlashcardsModal from "../features/flashcards/FlashcardsModal";

const FlashcardPage = () => {
  return (
    <>
      <LoggedHeader />
      <FlashcardsInput />
      <FlashcardsList />
      <FlashcardsModal />
    </>
  );
};

export default FlashcardPage;
