import React, { useState } from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import Sidebar from "../components/sidebar/Sidebar";
import Pomodoro from "../features/pomodoro/Pomodoro";

const PomodoroPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <Sidebar setIsOpen={setIsOpen} />
      ) : (
        <>
          <LoggedHeader setIsOpen={setIsOpen} />
          <Pomodoro />
        </>
      )}
    </div>
  );
};

export default PomodoroPage;
