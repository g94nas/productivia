import styled from "styled-components/macro";

// export const BackgroundWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 5rem;
//   overflow: auto;
// `;

export const ModalWrapper = styled.div`
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
`;

export const Front = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin: auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
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
`;
