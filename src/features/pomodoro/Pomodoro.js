import React from "react";
import Duration from "luxon/src/duration.js";
import { useState, useEffect } from "react";
import {
  MainWrapper,
  Title,
  TimeWrapper,
  Time,
  ButtonWrapper,
  Button,
  Span,
  Subtitle,
  SmallWrapper,
} from "./styles/PomodoroStyles.js";

const Pomodoro = ({ isActive }) => {
  const [sessionActive, setSessionActive] = useState(false);
  const [breakActive, setBreakActive] = useState(false);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(1500);
  const [hasStarted, setHasStarted] = useState(null);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    if (hasStarted && sessionTimeLeft >= 0) {
      const intervalStarted = setInterval(() => {
        setSessionTimeLeft((sessionTimeLeft) => sessionTimeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalStarted);
    } else if (sessionTimeLeft < 0) {
      setSessionTimeLeft(0);
    }
  }, [hasStarted, sessionTimeLeft]);

  const formattedSessionTimeLeft = Duration.fromObject({
    seconds: sessionTimeLeft,
  }).toFormat("mm:ss");

  const handleSessionStart = () => {
    setIsSession(true);
    setSessionTimeLeft(1500);
    setBreakActive(false);
    setSessionActive(true);
  };

  const handleBreakStart = () => {
    setIsSession(false);
    setSessionTimeLeft(300);
    setBreakActive(true);
    setSessionActive(false);
  };

  const handleSessionOrBreak = () => {
    if (isSession) {
      setSessionTimeLeft(1500);
    } else {
      setSessionTimeLeft(300);
    }
  };

  return (
    <MainWrapper>
      <Title>POMODORO</Title>
      <TimeWrapper>
        <Time>{formattedSessionTimeLeft}</Time>
      </TimeWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleSessionStart}
          isActive={sessionActive ? (isActive = true) : (isActive = false)}
        >
          <Span>Session</Span>
        </Button>
        <Button
          onClick={handleBreakStart}
          isActive={breakActive ? (isActive = true) : (isActive = false)}
        >
          <Span>Break</Span>
        </Button>
      </ButtonWrapper>
      {hasStarted ? (
        <SmallWrapper>
          <Button type="button" onClick={() => setHasStarted(false)}>
            <Span style={{ fontWeight: "bold" }}>Stop</Span>
          </Button>
        </SmallWrapper>
      ) : (
        <SmallWrapper>
          <Button type="button" onClick={() => setHasStarted(true)}>
            <Span style={{ fontWeight: "bold" }}>Start</Span>
          </Button>
        </SmallWrapper>
      )}
      <Subtitle>Change Duration</Subtitle>
      <SmallWrapper>
        <Button onClick={() => setSessionTimeLeft(sessionTimeLeft + 60)}>
          <Span>+1 Minute</Span>
        </Button>
        <Button onClick={() => setSessionTimeLeft(sessionTimeLeft - 60)}>
          <Span>-1 Minute</Span>
        </Button>
      </SmallWrapper>
      <SmallWrapper>
        <Button onClick={handleSessionOrBreak}>
          <Span style={{ fontWeight: "bold" }}>Reset</Span>
        </Button>
      </SmallWrapper>
    </MainWrapper>
  );
};

export default Pomodoro;
