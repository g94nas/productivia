import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 4rem;
  padding-top: 2rem;
  text-align: center;
  padding-bottom: 2rem;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  height: 200px;
  width: 24rem;
  border: 3px solid #f5d432;
  outline: none;
`;

export const Time = styled.p`
  margin: auto;
  text-align: center;
  vertical-align: center;
  font-size: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  width: 25rem;
  height: 3rem;
  padding-top: 2rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  flex: 0.5;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 2rem;
  border: 3px solid #f5d432;
  background: transparent;
  cursor: pointer;
`;

export const Checkbox = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  height: 25px;
  width: 25px;
  border: 3px solid #f5d432;
`;

export const Span = styled.span`
  text-align: center;
  margin: auto;
`;
export const Subtitle = styled.div`
  text-align: center;
  padding-top: 2rem;
`;
export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  width: 20rem;
  height: 3rem;
`;

export const Input = styled.input`
  display: flex;
  align-self: center;
  justify-self: center;
  outline: none;
  border: 3px solid #f5d432;
  height: 2rem;
  width: 4rem;

  //width 3rem
`;

export const AudioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  margin-top: 3rem;
  width: 20rem;
  height: 2rem;
`;

export const Separator = styled.h1`
  display: flex;
  text-align: center;
  vertical-align: center;
  margin: auto 0.5rem;
  font-size: 1rem;
`;

export const AudioText = styled.span`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.75rem;
  margin-right: 1rem;
`;
