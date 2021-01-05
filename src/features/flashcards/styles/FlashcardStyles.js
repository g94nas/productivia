import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 400;
  font-size: 4rem;
  padding-top: 2rem;
`;

export const Form = styled.form``;

export const Input = styled.input`
  margin: 0.75rem 0rem;
  width: 700px;
  height: 35px;
  border: 2px solid #f5d432;
  outline: none;
  padding-left: 10px;
  font-family: "Poppins";
`;

export const Button = styled.button`
  color: #000;
  background-color: #f5d432;
  width: 200px;
  height: 30px;
  outline: none;
  border: none;
  font-weight: 400;
  font-family: "Poppins";
  margin-top: 0.75rem;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    width: 250px;
    border: 2px solid #f5d432;
    background-color: transparent;
  }
`;
