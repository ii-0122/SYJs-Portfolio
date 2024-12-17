import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 190px;
  height: 2px;
  background-color: black;
  margin: 0px 4vw 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin-left: 4vw;
  background-color: #f9f9f9;
`;

export const IntroTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

export const IntroDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.5;
  text-align: center;
`;
