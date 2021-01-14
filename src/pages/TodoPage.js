import React, { useState } from "react";
import LoggedHeader from "../components/loggedheader/LoggedHeader";
import Sidebar from "../components/sidebar/Sidebar";
import TodoInput from "../features/todos/TodoInput";
import TodoList from "../features/todos/TodoList";

const TodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <Sidebar setIsOpen={setIsOpen} />
      ) : (
        <>
          <LoggedHeader setIsOpen={setIsOpen} />
          <TodoInput />
          <TodoList />
        </>
      )}
    </div>
  );
};

export default TodoPage;
