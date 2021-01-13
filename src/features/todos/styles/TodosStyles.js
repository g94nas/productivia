import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 25px;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 460px) {
    width: 200px;
    padding-bottom: 3rem;
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f5d432;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "rgba(130, 253, 99, 0.24)" : "none"};

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 460px) {
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 35px;
  border: 2px solid #f5d432;
  font-family: "Poppins";
  padding: 5px;
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export const CheckedIcon = styled.div`
  display: flex;
  flex: 0;
  justify-self: flex-start;
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: green;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Task = styled.p`
  display: flex;
  flex: 1;
  font-size: 0.8rem;
  font-weight: 300;
  padding-left: 1rem;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100%;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 460px) {
    width: 200px;
    padding-bottom: 3rem;
  }
`;

export const RemoveIcon = styled.div`
  display: flex;
  flex: 0;
  justify-self: flex-end;
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #d93d3d;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const EditIcon = styled.div`
  display: flex;
  flex: 0;
  padding-right: 0.5rem;
  justify-self: flex-end;
  align-self: center;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #f5d432;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
