import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  width: 350px;
  height: 450px;

  @media screen and (max-width: 768px) {
    margin-top: -10rem;
    width: 200px;
    height: 200px;
  }
`;

export const MainText = styled.h1`
  text-align: start;
  font-size: 1rem;
  color: #000;
  font-weight: 300;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 350px;
  display: block;
  margin: auto;
  padding: 0.3rem;
  border: 2px solid #f5d432;
  outline: none;
  font-family: "Poppins";

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  margin: auto;
  width: 250px;
  background-color: #f5d432;
  color: #000;
  height: 30px;
  border: none;
  outline: none;
  font-weight: 300;
  margin-top: 2.5rem;
  text-align: center;
  line-height: 1.9;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    width: 275px;
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    width: 200px;

    &:hover {
      width: 200px;
    }
  }
`;
