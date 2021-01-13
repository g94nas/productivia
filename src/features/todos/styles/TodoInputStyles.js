import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: block;
  margin: auto;
  font-weight: 400;
  font-size: 4rem;
  color: #000;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 700px;
  height: 35px;
  outline: none;
  border: 2px solid #f5d432;
  margin-top: 1rem;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 25px;
  }

  @media screen and (max-width: 460px) {
    width: 200px;
  }
`;
