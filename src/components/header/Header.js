import React from "react";
import {
  MainNavWrapper,
  NavWrapper,
  NavLogo,
  MenuContainer,
  MenuItem,
  NavLink,
  Button,
  ButtonLink,
  ButtonContainer,
} from "./HeaderStyle";

const Header = () => {
  return (
    <MainNavWrapper>
      <NavWrapper>
        <NavLogo to="home" exact="true" offset={-80}>
          Productivia
        </NavLogo>
        <MenuContainer>
          <MenuItem>
            <NavLink to="home" exact="true" offset={-80}>
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="features" exact="true">
              Features
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="discovery" exact="true" offset={-80}>
              Discovery
            </NavLink>
          </MenuItem>
        </MenuContainer>
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
