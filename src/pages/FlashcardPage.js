import React, { useState } from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import Sidebar from "../components/sidebar/Sidebar";
import FlashcardsInput from "../features/flashcards/FlashcardsInput";
import FlashcardsList from "../features/flashcards/FlashcardsList";
import FlashcardsModal from "../features/flashcards/FlashcardsModal";

const FlashcardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <Sidebar setIsOpen={setIsOpen} />
      ) : (
        <>
          <LoggedHeader setIsOpen={setIsOpen} />
          <FlashcardsInput />
          <FlashcardsList />
          <FlashcardsModal />
        </>
      )}
    </div>
  );
};

export default FlashcardPage;
