import React, { useState } from "react";
import {
  ProjectCard,
  ProjectContainer,
  Modal,
  ModalContent,
  ProjectTitle,
  ProjectImage,
  ProjectDescription,
  Title,
  Underline,
  DescriptionTitle,
  DescriptionText,
} from "./Projects.styled.tsx";
import { projects } from "./projects.ts";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  const handleCardClick = (project: {
    title: string;
    description: string;
    imageUrl: string;
  }) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Title>PROJECTS</Title>
      <Underline />
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleCardClick(project)}
          >
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectDescription>
              <DescriptionTitle>{project.title}</DescriptionTitle>
              <DescriptionText>{project.description}</DescriptionText>
            </ProjectDescription>
          </ProjectCard>
        ))}
        {selectedProject && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <p>{selectedProject.description}</p>
              <button onClick={closeModal}>닫기</button>
            </ModalContent>
          </Modal>
        )}
      </ProjectContainer>
    </>
  );
};

export default Projects;
