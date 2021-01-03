import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

//#F5D432
//#4A4A4A

export const MainNavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  height: 4em;
  align-items: center;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4em;
  padding: 0rem 7.5rem 0 7.5rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const NavLogo = styled(Link)`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
  align-self: center;
  color: #f5d432;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    justify-self: flex-start;
    padding-right: 1rem;
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
`;

export const MenuItem = styled.li`
  height: 4em;
`;

export const NavLink = styled(LinkS)`
  color: #606161;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #f5d432;
  }

  &:hover {
    border-bottom: 3px solid #f5d432;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Button = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    border-bottom: 3px solid #f5d432;
  }
`;

export const ButtonLink = styled(Link)`
  white-space: nowrap;
  color: #4a4a4a;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
