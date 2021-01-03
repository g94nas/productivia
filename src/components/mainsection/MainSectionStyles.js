import styled from "styled-components/macro";
import { Link } from "react-router-dom";

//#F5D432
//#4A4A4A

export const MainSectionContainer = styled.div`
  display: flex;

  padding: ${({ paddingTrue }) =>
    paddingTrue ? "2.5rem 0 3rem 7.5rem" : "2.5rem 0 3rem 0"};
  flex-direction: ${({ direction }) => (direction ? "row" : "row-reverse")};
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "1rem" : "3rem")};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-right: 1rem;
    padding-left: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const MainSectionPane = styled.div`
  width: 50%;
  margin-right: ${({ paddingPane }) => (paddingPane ? "0rem" : "8.5rem")};

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
export const MainSectionTitle = styled.h1`
  font-weight: bold;
  font-size: 4.3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  max-width: ${({ maxWidthTitle }) => (maxWidthTitle ? "30rem" : "37.5rem")};

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    align-self: center;
    justify-self: center;
    text-align: center;
    line-height: 0.98;
    margin: auto;
  }

  @media screen and (max-width: 460px) {
    font-size: 2.5rem;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
`;
export const MainSectionSubtitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  color: #606161;
  padding-bottom: 4rem;
  padding-left: 0.2rem;
  max-width: ${({ maxWidthSubtitle }) =>
    maxWidthSubtitle ? "30rem" : "37.5rem"};
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    max-width: 30rem;
    font-size: 1rem;
    align-self: center;
    justify-self: center;
    text-align: center;
    margin: auto;
    padding-right: 0.2rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 0.9rem;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
`;
export const MainSectionImage = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainSectionButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: #000;
  background-color: #f5d432;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border-radius: 3em;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
`;
