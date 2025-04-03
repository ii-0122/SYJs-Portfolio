import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 120px;
  height: 1.5px;
  background-color: black;
  margin: 0px 4vw 1.2rem;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  background-color: #f9f9f9;
  margin-left: 4vw;
`;

export const TechStackTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const TechStackItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const TechDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TechName = styled.span`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Proficiency = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.span<{ filled: boolean }>`
  color: ${(props) => (props.filled ? "rgb(255, 204, 0)" : "#e0e0e0")};
  font-size: 18px;
  margin-right: 2px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-left: 4vw;
  margin-bottom: 1rem;
`;

interface TabButtonProps {
  active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  padding: 0.8rem 1.2rem;
  background: ${(props) =>
    props.active ? "rgb(35, 35, 35)" : "rgb(247, 247, 247)"};
  color: ${(props) =>
    props.active ? "rgb(255, 216, 62)" : "rgb(135, 135, 135)"};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  &:hover {
    background: rgb(35, 35, 35);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3),
      0 0 10px rgba(255, 255, 255, 0.4);
    color: rgb(255, 216, 62);
  }
`;
