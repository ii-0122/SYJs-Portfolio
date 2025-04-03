import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 204px;
  height: 1.5px;
  background-color: black;
  margin: 0px 4vw 1.4rem;
`;

export const CertificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-left: 4vw;
  background-color: #f9f9f9;
`;

export const CertificationItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const CertificationName = styled.span`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const CertificationDetails = styled.span`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;
