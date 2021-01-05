import styled from "styled-components/macro";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  //position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 20;
  align-items: center;
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
`;

export const ExitIcon = styled.h1`
  display: flex;
  font-size: 2rem;
  justify-self: flex-end;
  align-self: flex-start;
`;

export const NextIconRight = styled.h1`
  display: flex;
  justify-self: flex-end;
  align-self: center;
  color: #f00;
  font-size: 3rem;
`;

export const NextIconLeft = styled.h1`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: #f00;
  font-size: 3rem;
`;
