import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 30px;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 140px;
  height: 1.5px;
  background-color: black;
  margin: 0px 4vw 1.4rem;
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  margin-left: 4vw;
`;

export const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ActivityName = styled.span`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const ActivityDate = styled.span`
  font-size: 20px;
  color: #555;
`;
