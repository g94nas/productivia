import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 12rem;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Break = styled.div`
  width: 100px;
  height: 2px;
  background-color: #f5d432;
  margin-bottom: 0.5rem;
`;

export const Text = styled.h2`
  max-width: 25rem;
  font-weight: 300;
  text-align: center;
  font-size: 1.5rem;
  font-size: medium;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
