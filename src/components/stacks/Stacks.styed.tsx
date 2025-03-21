import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  margin: 0px 4vw 2px; /* 상하 여백 */
`;

export const Underline = styled.div`
  width: 120px;
  height: 2px;
  background-color: black;
  margin: 0px 4vw 1.5rem; /* 중앙 정렬 및 하단 여백 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
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
  padding: 10px;
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
  color: ${(props) => (props.filled ? "#FFD700" : "#e0e0e0")};
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
  border: none;
  background: ${(props) => (props.active ? "#222" : "#ddd")};
  color: ${(props) => (props.active ? "#ffcc00" : "white")};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #222;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
      0 0 10px rgba(255, 255, 255, 0.4);
    color: #ffcc00; /* 텍스트 색상 변경 */
  }
`;
