import React from "react";
import { useState } from "react";
import {
  ModalWrapper,
  Front,
  NextIconLeft,
  NextIconRight,
  ExitIcon,
  SuccessIcon,
  ShowAnswerText,
} from "./styles/FlashcardsModalStyles";
import { useSelector } from "react-redux";
import {
  selectFlashcardsById,
  selectFilteredFlashcards,
} from "./flashcardSlice";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ReactModal from "react-modal";

const FlashcardsModal = ({ id, isOpen, setIsOpen, handleComplete }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const allFlashcards = useSelector(selectFilteredFlashcards);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [currentFlashcard, setCurrentFlashcard] = useState(id);
  const flashcard =
    useSelector((state) => selectFlashcardsById(state, currentFlashcard)) || "";

  const nextFlashcard = () => {
    if (id && currentIdx >= 0 && currentIdx <= allFlashcards.length - 1) {
      setCurrentIdx((currentIdx) => currentIdx + 1);
      setCurrentFlashcard(allFlashcards[currentIdx].id);
      console.log(currentIdx);
    } else {
      setCurrentIdx(1);
      setCurrentFlashcard(allFlashcards[0].id);
    }
    setShowAnswer(false);
  };

  const prevFlashcard = () => {
    if (id && currentIdx >= 0 && currentIdx <= allFlashcards.length - 1) {
      setCurrentIdx((currentIdx) => currentIdx - 1);
      setCurrentFlashcard(allFlashcards[currentIdx].id);
      console.log(currentIdx);
    } else {
      setCurrentIdx(1);
      setCurrentFlashcard(allFlashcards[allFlashcards.length - 1].id);
    }
    setShowAnswer(false);
  };

  const handleClickSuccessIcon = () => {
    handleComplete();
    nextFlashcard();
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
        <SuccessIcon onClick={handleClickSuccessIcon}>
          <IoIosCheckmarkCircleOutline />
        </SuccessIcon>
        <Front>{showAnswer ? flashcard.back : flashcard.front}</Front>
        <ShowAnswerText onClick={() => setShowAnswer(!showAnswer)}>
          Show Answer
        </ShowAnswerText>
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
