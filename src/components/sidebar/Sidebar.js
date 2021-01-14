import React from "react";
import { Container, LinkRouter, Icon } from "./SidebarStyles";
import { GrClose } from "react-icons/gr";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Sidebar = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsOpen(false);
    dispatch(logout());
    auth.signOut();
  };

  return (
    <Container>
      <Icon onClick={() => setIsOpen(false)}>
        <GrClose />
      </Icon>
      <LinkRouter to="/todos" exact="true" onClick={() => setIsOpen(false)}>
        Todo List
      </LinkRouter>
      <LinkRouter
        to="/flashcards"
        exact="true"
        onClick={() => setIsOpen(false)}
      >
        Flashcards
      </LinkRouter>
      <LinkRouter to="/pomodoro" exact="true" onClick={() => setIsOpen(false)}>
        Pomodoro
      </LinkRouter>
      <LinkRouter to="/" exact="true" onClick={handleLogout}>
        Log Out
      </LinkRouter>
    </Container>
  );
};

export default Sidebar;
