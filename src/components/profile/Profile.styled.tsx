import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 140px;
  height: 1.5px;
  background-color: black;
  margin: 0px 4vw 1.4rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  margin-left: 4vw;
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-right: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
`;

export const InfoItem = styled.div`
  margin: 4px 0;
  font-size: 20px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
