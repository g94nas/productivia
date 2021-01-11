import React from "react";
import {
  MainNavWrapper,
  NavWrapper,
  NavLogo,
  SidebarIcon,
  Button,
  ButtonLink,
  ButtonContainer,
} from "./HeaderStyle";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <MainNavWrapper>
      <NavWrapper>
        <NavLogo to="/" exact="true">
          Productivia
        </NavLogo>
        <SidebarIcon>
          <FaBars />
        </SidebarIcon>
        <ButtonContainer>
          <Button>
            <ButtonLink to="/signin">Log In</ButtonLink>
          </Button>
          <Button>
            <ButtonLink to="/signup">Sign Up</ButtonLink>
          </Button>
        </ButtonContainer>
      </NavWrapper>
    </MainNavWrapper>
  );
};

export default Header;
