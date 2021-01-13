import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 4rem;
  padding-top: 2rem;
  text-align: center;
  padding-bottom: 2rem;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  height: 200px;
  width: 24rem;
  border: 3px solid #f5d432;
  outline: none;
`;

export const Time = styled.p`
  margin: auto;
  text-align: center;
  vertical-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  width: 25rem;
  height: 3rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  flex: 0.5;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 2rem;
  border: 3px solid #f5d432;
  background: ${({ isActive }) => (isActive ? "#f5d432" : "transparent")};
  cursor: pointer;
  outline: none;
  font-family: "Poppins";
  transition: 0.4s;

  &:hover {
    background-color: #f5d432;
    transition: 0.4s;
  }
`;

export const Span = styled.span`
  text-align: center;
  margin: auto;
  cursor: pointer;
  font-family: "Poppins";
  line-height: 1.2;
`;
export const Subtitle = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  width: 20rem;
  height: 3rem;
`;
