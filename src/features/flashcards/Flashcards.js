import React from "react";
import {
  removeFlashcard,
  editFlashcard,
  completeFlashcard,
  selectFlashcardsById,
} from "./flashcardSlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlashcardsModal from "./FlashcardsModal";
import {
  MainWrapper,
  Card,
  Front,
  IconWrapper,
  CompletedIcon,
  EraseIcon,
  EditIcon,
  ContentWrapper,
} from "./styles/FlashcardsStyles";
import { db } from "../../firebase";

const Flashcards = ({ id, index }) => {
  const flashcard = useSelector((state) => selectFlashcardsById(state, id));
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFlashcard(flashcard.id));
    db.collection("flashcards").doc(flashcard.id).delete();
  };

  const handleComplete = () => {
    dispatch(completeFlashcard(flashcard.id));
    db.collection("flashcards")
      .doc(flashcard.id)
      .set({ ...flashcard, completed: !flashcard.completed });
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <FlashcardsModal
          front={flashcard.front}
          back={flashcard.back}
          id={flashcard.id}
          completed={flashcard.completed}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleOpenModal={handleOpenModal}
          handleComplete={handleComplete}
          index={index}
        />
      ) : (
        <MainWrapper>
          <ContentWrapper>
            <Card
              style={{
                backgroundColor: flashcard.completed
                  ? "#99ff99"
                  : "transparent",
                transition: "0.5s",
              }}
            >
              <Front onClick={handleOpenModal}>{flashcard.front}</Front>
            </Card>
            <IconWrapper>
              <EraseIcon onClick={handleDelete}>
                <MdRemoveCircleOutline />
              </EraseIcon>
              <CompletedIcon onClick={handleComplete}>
                <IoIosCheckmarkCircleOutline />
              </CompletedIcon>
              <EditIcon>
                <BsPencilSquare />
              </EditIcon>
            </IconWrapper>
          </ContentWrapper>
        </MainWrapper>
      )}
    </>
  );
};

export default Flashcards;
