import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 128px;
  height: 2px;
  background-color: black;
  margin: 0px 4vw 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
