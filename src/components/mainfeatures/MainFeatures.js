import React from "react";
import {
  MainWrapper,
  TodoImage,
  PomodoroImage,
  Pane,
  Image,
  ImageTitle,
  MainTitle,
  Button,
  TitleScreen,
  ButtonScreen,
} from "./MainFeaturesStyles";
import NotesImage from "./notes.svg";
import TodoListImage from "./reminder_note_.svg";
import TimeImage from "./time (1).svg";

const MainFeatures = () => {
  return (
    <MainWrapper id="features">
      <TitleScreen>Features</TitleScreen>
      <Pane>
        <TodoImage src={TodoListImage}></TodoImage>
        <ImageTitle>Todo List</ImageTitle>
      </Pane>
      <Pane>
        <MainTitle>Features</MainTitle>
        <Image src={NotesImage}></Image>
        <ImageTitle>Flashcards</ImageTitle>
        <Button to="/signup">Let's Begin</Button>
      </Pane>
      <Pane>
        <PomodoroImage src={TimeImage}></PomodoroImage>
        <ImageTitle>Pomodoro</ImageTitle>
      </Pane>
      <ButtonScreen to="/signup">Let's Begin</ButtonScreen>
    </MainWrapper>
  );
};

export default MainFeatures;
