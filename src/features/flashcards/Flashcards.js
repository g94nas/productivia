import React from "react";
import {
  removeFlashcard,
  editFlashcard,
  completeFlashcard,
  selectFlashcardsById,
} from "./flashcardSlice";
import { MdRemoveCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
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
import { TextArea } from "../todos/styles/TodosStyles";

const Flashcards = ({ id, index }) => {
  const flashcard = useSelector((state) => selectFlashcardsById(state, id));
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editedFront, setEditedFront] = useState("");
  const [editedBack, setEditedBack] = useState("");
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

  const handleCompletedEdit = () => {
    if (editedFront && editedBack) {
      dispatch(
        editFlashcard({
          id: flashcard.id,
          front: editedFront,
          back: editedBack,
          completed: false,
        })
      );
      db.collection("flashcards")
        .doc(flashcard.id)
        .set({
          ...flashcard,
          front: editedFront,
          back: editedBack,
          completed: false,
        });
    }
    setIsEdited(false);
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const renderedFlashcards = isOpen ? (
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
  ) : isEdited ? (
    <MainWrapper>
      <ContentWrapper>
        <TextArea
          style={{ width: "250px", marginBottom: "1rem" }}
          placeholder="Update front"
          value={editedFront}
          onChange={(e) => setEditedFront(e.target.value)}
        ></TextArea>
        <TextArea
          style={{ width: "250px" }}
          placeholder="Update back"
          value={editedBack}
          onChange={(e) => setEditedBack(e.target.value)}
        ></TextArea>
        <IconWrapper>
          <EraseIcon
            style={{ flex: "0.5", fontSize: "0,5rem" }}
            onClick={() => setIsEdited(false)}
          >
            <AiOutlineClose />
          </EraseIcon>
          <CompletedIcon style={{ flex: "0.5" }} onClick={handleCompletedEdit}>
            <IoIosCheckmarkCircleOutline />
          </CompletedIcon>
        </IconWrapper>
      </ContentWrapper>
    </MainWrapper>
  ) : (
    <MainWrapper>
      <ContentWrapper>
        <Card
          style={{
            backgroundColor: flashcard.completed ? "#99ff99" : "transparent",
            transition: "0.5s",
          }}
          onClick={handleOpenModal}
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
          <EditIcon onClick={() => setIsEdited(true)}>
            <BsPencilSquare />
          </EditIcon>
        </IconWrapper>
      </ContentWrapper>
    </MainWrapper>
  );

  return <>{renderedFlashcards}</>;
};

export default Flashcards;
