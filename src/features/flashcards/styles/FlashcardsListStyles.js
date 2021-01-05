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
  font-size: 3rem;
  padding-top: 3rem;
  text-align: center;
`;

export const Break = styled.div`
  display: flex;
  margin: auto;
  margin-top: 2rem;
  flex-direction: center;
  width: 300px;
  height: 2px;
  background-color: #f5d432;
  align-self: center;
  justify-self: center;
`;
