import styled from "styled-components/macro";

export const FlashcardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 3rem 8rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  padding-top: 2rem;
  text-align: center;
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
`;
