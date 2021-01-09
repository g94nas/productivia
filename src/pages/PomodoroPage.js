import React from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import Pomodoro from "../features/pomodoro/Pomodoro";

const PomodoroPage = () => {
  return (
    <>
      <LoggedHeader />
      <Pomodoro />
    </>
  );
};

export default PomodoroPage;
