import React from "react";
import { useState } from "react";
import {
  ModalWrapper,
  Front,
  NextIconLeft,
  NextIconRight,
  ExitIcon,
  SuccessIcon,
} from "./styles/FlashcardsModalStyles";
import { useSelector } from "react-redux";
import { selectFlashcardsById, selectFlashcards } from "./flashcardSlice";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ReactModal from "react-modal";

const FlashcardsModal = ({
  id,
  completed,
  isOpen,
  setIsOpen,
  handleComplete,
  index,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const allFlashcards = useSelector(selectFlashcards);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [currentFlashcard, setCurrentFlashcard] = useState(id);
  const flashcard =
    useSelector((state) => selectFlashcardsById(state, currentFlashcard)) || "";

  const nextFlashcard = () => {
    if (id && currentIdx >= 0 && currentIdx <= allFlashcards.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setCurrentFlashcard(allFlashcards[currentIdx].id);
      console.log(currentIdx);
      console.log("I performed a plus action");
    } else {
      setCurrentIdx(1);
      setCurrentFlashcard(allFlashcards[0].id);
      console.log("I performed a plus action");
    }
  };

  const prevFlashcard = () => {
    if (currentIdx >= 0 && currentIdx <= allFlashcards.length - 1) {
      setCurrentIdx(currentIdx - 1);
      setCurrentFlashcard(allFlashcards[currentIdx].id);
      console.log(currentIdx);
      console.log("I performed a minus action");
    } else {
      setCurrentIdx(1);
      setCurrentFlashcard(allFlashcards[allFlashcards.length - 1].id);
      console.log("I performed a minus action");
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.64)",
        },
        content: {
          backgroundColor: "rgba(0,0,0,0.64)",
          padding: "5rem",
          border: "none",
          inset: "0",
          height: "100%",
          width: "100%",
        },
      }}
    >
      {/* <BackgroundWrapper> */}
      <ModalWrapper>
        <NextIconLeft onClick={prevFlashcard}>
          <AiOutlineArrowLeft />
        </NextIconLeft>
        <SuccessIcon onClick={handleComplete}>
          <IoIosCheckmarkCircleOutline />
        </SuccessIcon>
        <Front onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? flashcard.back : flashcard.front}
        </Front>
        <ExitIcon onClick={() => setIsOpen(!isOpen)}>
          <GrClose />
        </ExitIcon>
        <NextIconRight onClick={nextFlashcard}>
          <AiOutlineArrowRight />
        </NextIconRight>
      </ModalWrapper>
      {/* </BackgroundWrapper> */}
    </ReactModal>
  );
};

export default FlashcardsModal;
