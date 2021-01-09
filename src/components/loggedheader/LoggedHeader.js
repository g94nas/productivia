import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import {
  MainNavWrapper,
  NavWrapper,
  NavLogo,
  SidebarIcon,
  MenuContainer,
  MenuItem,
  NavLink,
  Button,
  ButtonLink,
  ButtonContainer,
} from "./LoggedHeaderStyles";
import { FaBars } from "react-icons/fa";
import { auth } from "../../firebase";

const LoggedHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <MainNavWrapper>
      <NavWrapper>
        <NavLogo to="/todos">Productivia</NavLogo>
        <SidebarIcon>
          <FaBars />
        </SidebarIcon>
        <MenuContainer>
          <MenuItem>
            <NavLink to="/todos">TodoList</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/flashcards">Flashcards</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/pomodoro">Pomodoro</NavLink>
          </MenuItem>
        </MenuContainer>
        <ButtonContainer>
          <Button>
            <ButtonLink to="/" onClick={handleLogout}>
              Log out
            </ButtonLink>
          </Button>
        </ButtonContainer>
      </NavWrapper>
    </MainNavWrapper>
  );
};

export default LoggedHeader;
