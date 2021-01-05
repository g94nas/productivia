import styled from "styled-components/macro";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.64);
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 900px;
  height: 600px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Front = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: auto;
`;

export const SuccessIcon = styled.h1`
  display: flex;
  font-size: 2rem;
  justify-self: flex-start;
  align-self: flex-start;
  margin: 2rem 3rem 0 3rem;
`;

export const ExitIcon = styled.h1`
  display: flex;
  margin: 2rem 3rem 0 3rem;
  font-size: 2rem;
  justify-self: flex-end;
  align-self: flex-start;
`;

export const NextIconRight = styled.h1`
  display: flex;
  justify-self: flex-end;
  align-self: center;
  color: #fff;
  font-size: 3rem;
  margin-right: 3rem;
`;

export const NextIconLeft = styled.h1`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: #fff;
  font-size: 3rem;
  margin-left: 3rem;
`;
