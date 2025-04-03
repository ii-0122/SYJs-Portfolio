import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 154px;
  height: 2px;
  background-color: black;
  margin: 0px 4vw 1.4rem;
`;

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  margin-left: 4vw;
  border-radius: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  gap: 10px;
`;

export const EducationItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const CollegeName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

export const Major = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 0.5rem;
  color: #222;
`;

export const Degree = styled.div`
  font-size: 18px;
  margin-left: 0.8rem;
  color: #333;
`;

export const Duration = styled.div`
  font-size: 20px;
  color: #555;
  text-align: right;
  margin-left: auto;
`;
