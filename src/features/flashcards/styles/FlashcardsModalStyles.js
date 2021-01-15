import styled from "styled-components/macro";

export const ModalWrapper = styled.div`
  position: relative;
  width: 1100px;
  min-height: 600px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  margin: auto;
  word-break: break-all;
  overflow: auto;

  @media screen and (max-width: 1000px) {
    width: 700px;
    min-height: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 440px;
    min-height: 200px;
  }

  @media screen and (max-width: 460px) {
    position: absolute;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

export const Front = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin: auto;
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ShowAnswerText = styled.h1`
  position: absolute;
  font-size: 1rem;
  bottom: 1rem;
  border: 3px #000 solid;
  padding: 0.7rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`;

export const SuccessIcon = styled.h1`
  display: flex;
  font-size: 2.5rem;
  justify-self: center;
  text-align: center;
  align-self: flex-start;
  margin: 3rem 0;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ExitIcon = styled.h1`
  display: flex;
  margin: 3rem 0;
  font-size: 2rem;
  justify-self: flex-end;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    font-size: 2.5rem;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NextIconRight = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: center;
  color: #000;
  font-size: 3rem;
  padding-right: 2rem;
  cursor: pointer;
  position: sticky;

  &:hover {
    color: green;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding-right: 1rem;
  }
`;

export const NextIconLeft = styled.div`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: #000;
  padding-left: 2rem;
  font-size: 3rem;
  cursor: pointer;
  position: sticky;

  &:hover {
    color: green;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding-left: 1rem;
  }
`;
