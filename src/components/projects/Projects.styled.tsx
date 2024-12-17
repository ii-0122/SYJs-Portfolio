import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: 36px; /* 제목 크기 */
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  margin: 0px 4vw 2px; /* 상하 여백 */
`;

export const Underline = styled.div`
  width: 180px;
  height: 2px;
  background-color: black; /* 밑줄 색상 */
  margin: 0px 4vw 30px; /* 중앙 정렬 및 하단 여백 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px; /* 카드 간의 간격 */
`;

export const ProjectCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 280px;
  padding: 16px;
  height: 360px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectImage = styled.img`
  border-radius: 8px;
  margin-top: 10%;
  max-width: 80%;
  height: auto;
`;

export const ProjectDescription = styled.div`
  margin-top: 6px;
`;

export const DescriptionTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-top: 10px;
  margin-bottom: 12px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.5;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 70%;
  max-height: 80%;
  width: 100%; /* 너비 100% */
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ProjectTitle = styled.div`
  margin: 30px;
  width: 80%;
  height: auto;
`;
