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
        <NavLogo to="/" exact="true">
          Productivia
        </NavLogo>
        <SidebarIcon>
          <FaBars />
        </SidebarIcon>
        <MenuContainer>
          <MenuItem>
            <NavLink to="home" exact="true" offset={-80}>
              TodoList
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#" exact="true">
              Flashcards
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#" exact="true" offset={-80}>
              Pomodoro
            </NavLink>
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
