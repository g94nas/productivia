import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSessionLength,
  selectBreakLength,
  setSessionTime,
  setBreakTime,
  setResetTime,
} from "./pomodoroSlice";
import {
  MainWrapper,
  Title,
  TimeWrapper,
  Time,
  ButtonWrapper,
  Button,
  Checkbox,
  Span,
  Subtitle,
  SmallWrapper,
  Input,
  Separator,
  AudioText,
  AudioWrapper,
} from "./styles/PomodoroStyles.js";

const Pomodoro = () => {
  const sessionLength = useSelector(selectSessionLength);
  const breakLength = useSelector(selectBreakLength);
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  return (
    <MainWrapper>
      <Title>Pomodoro</Title>
      <TimeWrapper>
        <Time>300</Time>
      </TimeWrapper>
      <ButtonWrapper>
        <Button>
          <Span>Session</Span>
        </Button>
        <Button>
          <Span>Break</Span>
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>
          <Span>Start</Span>
        </Button>
        <Button>
          <Span>Stop</Span>
        </Button>
      </ButtonWrapper>
      <AudioWrapper>
        <Checkbox></Checkbox>
        <AudioText>Audio Clue</AudioText>
      </AudioWrapper>
      <Subtitle>Session Length</Subtitle>
      <SmallWrapper>
        <Input></Input>
        <Separator>:</Separator>
        <Input></Input>
      </SmallWrapper>
      <Subtitle>Break Length</Subtitle>
      <SmallWrapper>
        <Input></Input>
        <Separator>:</Separator>
        <Input></Input>
      </SmallWrapper>
    </MainWrapper>
  );
};

export default Pomodoro;
