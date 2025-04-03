import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 160px;
  height: 2px;
  background-color: black; /* 밑줄 색상 */
  margin: 0px 4vw 30px; /* 중앙 정렬 및 하단 여백 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  margin-left: 4vw;
`;

export const Accordion = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: #f8f9fa;
  border-radius: 8px 8px 0 0;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 10px;
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  border-top: 1px solid #ddd;
`;

export const ProjectImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 4px;
`;

export const Link = styled.a`
  color: #007bff;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
