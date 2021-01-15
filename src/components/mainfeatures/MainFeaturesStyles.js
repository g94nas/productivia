import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 0 2rem;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const Pane = styled.div`
  flex: 0.33;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex: 0;
  }
`;

export const Image = styled.img`
  display: block;

  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    max-width: 200px;
    max-height: 200px;
    margin-top: 0;
  }
`;

export const TodoImage = styled.img`
  display: block;

  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 7.8rem;

  @media screen and (max-width: 768px) {
    max-width: 200px;
    max-height: 200px;
    margin-top: 2rem;
    width: 200px;
  }
`;

export const PomodoroImage = styled.img`
  display: block;

  justify-content: center;
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 5.8rem;

  @media screen and (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
    margin-top: 0;
    width: 200px;
  }
`;

export const ImageTitle = styled.h1`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const MainTitle = styled.h1`
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 4.3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: #000;
  width: 250px;
  display: block;
  margin: auto;
  background-color: #f5d432;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border-radius: 3em;
  margin-top: 2.6rem;
  cursor: pointer;
  transition: 0.3s;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    width: 250px;
    transition: 0.3s;
  }
`;

export const TitleScreen = styled.h1`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 3rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonScreen = styled(Link)`
  display: none;

  @media screen and (max-width: 768px) {
    text-decoration: none;
    text-align: center;
    color: #000;
    width: 250px;
    display: block;
    margin: auto;
    background-color: #f5d432;
    font-family: "Poppins";
    font-weight: bold;
    font-size: 1rem;
    outline: none;
    border: none;
    padding: 0.5rem 2rem 0.5rem 2rem;
    border-radius: 3em;

    cursor: pointer;
  }
`;
