import styled from "styled-components/macro";

export const FlashcardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 3rem 8rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-top: 2rem;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  padding-top: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const Break = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1rem;
  flex-direction: center;
  width: 500px;
  height: 2px;
  background-color: #f5d432;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 460px) {
    width: 200px;
  }
`;

export const MainFlashcardWrapper = styled.div`
  position: absolute;
  left: 10;
  top: 6.5rem;
  right: 8.5rem;
  bottom: 0;
`;
