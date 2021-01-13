import styled from "styled-components/macro";

export const List = styled.li`
  text-decoration: none;
  list-style: none;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border: 2px solid #f5d432;
  width: 100px;
  height: 25px;
  margin-top: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#f5d432" : "transparent")};
  cursor: pointer;

  &:hover {
    background-color: #f5d432;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 2px solid #f5d432;
  padding-bottom: 1.25rem;
`;
