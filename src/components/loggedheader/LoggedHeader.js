import React from "react";
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

const LoggedHeader = () => {
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
            <ButtonLink to="/">Log out</ButtonLink>
          </Button>
        </ButtonContainer>
      </NavWrapper>
    </MainNavWrapper>
  );
};

export default LoggedHeader;
