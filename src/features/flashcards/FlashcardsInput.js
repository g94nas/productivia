import React from "react";
import { useState } from "react";
import { addFlashcard, addManyFlashcards } from "./flashcardSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  MainWrapper,
  Title,
  Form,
  Input,
  Button,
} from "./styles/FlashcardInputStyles";
import { db } from "../../firebase";
import { selectUser } from "../userSlice";
import useKey from "../../hooks/useKey";

const FlashcardsInput = () => {
  const [idTracker, setIdTracker] = useState(nanoid());
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [group, setGroup] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    db.collection("flashcards")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const flashcardUid = doc.data().uid;
          const authUserUid = user.uid;
          if (flashcardUid === authUserUid) {
            dispatch(addFlashcard(doc.data()));
            console.log("I'm retrieving data");
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [user.uid, dispatch]);

  const handleFront = (e) => {
    setFront(e.target.value);
  };

  const handleBack = (e) => {
    setBack(e.target.value);
  };

  const handleGroup = (e) => {
    setGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (front && back && group) {
      dispatch(
        addFlashcard({
          id: idTracker,
          front: front,
          back: back,
          group: group,
          completed: false,
          uid: user.uid,
        })
      );
      db.collection("flashcards").doc(idTracker).set({
        id: idTracker,
        front: front,
        back: back,
        group: group,
        completed: false,
        uid: user.uid,
      });
      setFront("");
      setBack("");
      setGroup("");
      setIdTracker(nanoid());
    } else {
      alert("Please fill all three input fields");
    }
  };

  useKey("Enter", handleSubmit);

  return (
    <MainWrapper>
      <Title>FLASHCARDS</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          placeholder="Add front of the flashcard"
          type="text"
          value={front}
          onChange={handleFront}
        ></Input>
      </Form>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          type="text"
          value={back}
          placeholder="Add back of the flashcard"
          onChange={handleBack}
        ></Input>
      </Form>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          required
          placeholder="Add a group"
          type="text"
          value={group}
          onChange={handleGroup}
        ></Input>
      </Form>
      <Button onClick={handleSubmit}>Submit Flashcard</Button>
    </MainWrapper>
  );
};

export default FlashcardsInput;
