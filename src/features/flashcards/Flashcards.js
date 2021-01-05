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

const Flashcards = ({ id }) => {
  const flashcard = useSelector((state) => selectFlashcardsById(state, id));
  const [editToggle, setEditToggle] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFlashcard(flashcard.id));
  };

  const handleComplete = () => {
    dispatch(completeFlashcard(flashcard.id));
    setIsCompleted(!isCompleted);
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <Card
          style={{
            backgroundColor: isCompleted ? "#99ff99" : "transparent",
            transition: "0.5s",
          }}
        >
          <Front>{flashcard.front}</Front>
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
  );
};

export default Flashcards;
