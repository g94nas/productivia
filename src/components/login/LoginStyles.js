import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5d432;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  background-color: #000;
  border-radius: 20px;
  width: 350px;
  height: 350px;
`;

export const MainText = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #f5d432;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 250px;
  display: block;
  margin: auto;
  padding: 0.3rem;
  border: none;
  outline: none;
  border-style: none;
  border-radius: 20px;
  font-family: "Poppins";
`;

export const SubText = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #fff;
`;

export const Span = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  color: #f5d432;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #f5d432;
  }
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  width: 250px;
  border-radius: 20px;
  background-color: #f5d432;
  color: #000;
  height: 30px;
  border: none;
  outline: none;
  font-weight: bold;
  margin-top: 2.5rem;
  cursor: pointer;
`;
