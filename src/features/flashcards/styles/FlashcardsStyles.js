import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 1.2rem;
  padding-bottom: 3rem;
`;

export const Card = styled.div`
  display: flex;
  width: 250px;
  height: 150px;
  border: 2px solid #f5d432;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  cursor: pointer;
  &:hover {
    color: gray;
    transition: 0.5s;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 180px;
`;

export const Front = styled.h1`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  margin: auto;
  padding: 0 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  border: 2px solid #f5d432;
  border-top: none;
`;

export const CompletedIcon = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  flex: 0.45;
  height: 30px;
  cursor: pointer;
  border-right: 2px solid #f5d432;
  line-height: 2.2;
  transition: 0.5s;

  &:hover {
    background-color: #99ff99;
    transition: 0.5s;
  }
`;

export const EraseIcon = styled.p`
  display: inline-block;
  width: 100%;
  text-align: center;
  flex: 0.3;
  height: 30px;
  cursor: pointer;
  border-right: 2px solid #f5d432;
  line-height: 2.2;
  transition: 0.5s;

  &:hover {
    background-color: #ffc2b3;
    transition: 0.5s;
  }
`;

export const EditIcon = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  flex: 0.3;
  height: 30px;
  cursor: pointer;
  line-height: 2.2;
  transition: 0.5s;

  &:hover {
    background-color: #99bbff;
    transition: 0.5s;
  }
`;
