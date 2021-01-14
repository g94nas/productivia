import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d432;
`;

export const LinkRouter = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 1rem;
  transition: 0.5s;

  &:hover {
    color: #fff;
    transform: translateY(-5px);
    transition: 0.5s;
  }
`;

export const Icon = styled.div`
  position: absolute;
  font-size: 1.75rem;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  right: 1rem;
  top: 1rem;
  transition: 0.5s;

  &:hover {
    transform: translateX(-5px);
    transition: 0.5s;
  }
`;
