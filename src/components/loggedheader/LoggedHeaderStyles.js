import styled from "styled-components/macro";
import { Link } from "react-router-dom";

//#F5D432
//#4A4A4A

export const MainNavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  height: 3em;
  align-items: center;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #f5d432;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3em;
  padding: 0rem 7.5rem 0 7.5rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1rem;
  padding-left: 0.6rem;
  padding-right: 5.5rem;
  text-decoration: none;
  align-self: center;
  color: #000;
  transition: 1s;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    justify-self: flex-start;
    padding: 0;
  }

  &:hover {
    font-size: 1.5rem;
    transition: 1s;
  }
`;

export const SidebarIcon = styled.div`
  display: none;
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    none;
  }
`;

export const MenuItem = styled.li`
  height: 3em;
`;

export const NavLink = styled(Link)`
  color: #606161;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  padding-top: 2.5px;
  &.active {
    border-bottom: 3px solid #000;
  }

  &:hover {
    border-bottom: 3px solid #000;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding-left: 7.5rem;

  @media screen and (max-width: 960px) {
    padding-left: 0;
  }
`;

export const Button = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;

  &:hover {
    border-bottom: 3px solid #000;
  }

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const ButtonLink = styled(Link)`
  white-space: nowrap;
  color: #4a4a4a;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  padding-top: 2.5px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
