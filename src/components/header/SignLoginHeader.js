import React from "react";
import {
  MainNavWrapper,
  NavWrapper,
  NavLogoRouter,
  Button,
  ButtonLink,
  ButtonContainer,
} from "./HeaderStyle";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <MainNavWrapper>
      <NavWrapper>
        <NavLogoRouter to="/" exact="true">
          Productivia
        </NavLogoRouter>
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
