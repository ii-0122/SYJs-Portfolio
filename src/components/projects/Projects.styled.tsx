import styled from "styled-components";

export const Title = styled.div`
  font-family: "Title";
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin: 0px 4vw 2px;
`;

export const Underline = styled.div`
  width: 150px;
  height: 1.5px;
  background-color: black;
  margin: 0px 4vw 1.4rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px 16px 0;
  background-color: #f9f9f9;
  margin-left: 4vw;
`;

export const Accordion = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
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
  margin-left: 1rem;
  margin-right: 1rem;
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
  font-size: 16px;
  color: #666;
  margin-top: 7px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 4px;
`;

export const AccordionTextDiv = styled.div`
  color: #333;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 17px;
`;

export const AccordionDescriptionText = styled.a`
  color: #444;
  font-weight: normal;
  font-size: 16px;
`;

export const Link = styled.a`
  color: #007bff;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
