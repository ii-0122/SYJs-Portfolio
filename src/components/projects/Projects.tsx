import React, { useState } from "react";
import {
  ProjectCard,
  ProjectContainer,
  ModalContent,
  ProjectTitle,
  ProjectImage,
  ProjectDescription,
  Title,
  Underline,
  DescriptionTitle,
  DescriptionText,
  CloseButton,
  ModalOverlay,
  Link,
  SectionTitle,
} from "./Projects.styled.tsx";
import { projects } from "./projects.ts";
import { AiOutlineClose } from "react-icons/ai";

const Projects: React.FC = () => {
  type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    targetUser: string;
    valueProposition: string;
    coreFeatures: string;
    role: string;
    technologies: string;
    implementationDetails: string;
    problemSolving: string;
    deploymentUrl: string;
    githubUrl: string[];
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
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
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>
                <AiOutlineClose />
              </CloseButton>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <p>{selectedProject.description}</p>
              <SectionTitle>개요</SectionTitle>
              <p>- 타겟 사용자: {selectedProject.targetUser}</p>
              <p>- 제공 가치: {selectedProject.valueProposition}</p>
              <p>- 핵심 기능: {selectedProject.coreFeatures}</p>
              <SectionTitle>담당 직무</SectionTitle>
              <p>{selectedProject.role}</p>
              <SectionTitle>활용 기술</SectionTitle>
              <p>{selectedProject.technologies}</p>
              <SectionTitle>구현 사항</SectionTitle>
              <p>{selectedProject.implementationDetails}</p>
              <SectionTitle>문제 해결</SectionTitle>
              <p>{selectedProject.problemSolving}</p>
              <SectionTitle>링크</SectionTitle>
              <p>
                {selectedProject.deploymentUrl ? (
                  <Link
                    href={selectedProject.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    배포 페이지
                  </Link>
                ) : null}
              </p>
              <p>
                {selectedProject.githubUrl.map((url, index) => (
                  <span key={index}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      GitHub 링크 {index + 1}
                    </Link>
                    {index < selectedProject.githubUrl.length - 1 && (
                      <span> | </span>
                    )}{" "}
                  </span>
                ))}
              </p>
            </ModalContent>
          </ModalOverlay>
        )}
      </ProjectContainer>
    </>
  );
};

export default Projects;
