import React, { useState } from "react";
import {
  ProjectContainer,
  ProjectImage,
  Title,
  Underline,
  DescriptionText,
  Link,
  SectionTitle,
  AccordionContent,
  AccordionHeader,
  Accordion,
} from "./Projects.styled.tsx";
import { projects } from "./projects.ts";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export type Project = {
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

const Projects: React.FC = () => {
  const [openProjects, setOpenProjects] = useState<number[]>([]);

  const toggleProject = (id: number) => {
    setOpenProjects((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Title>PROJECTS</Title>
      <Underline />
      <ProjectContainer>
        {projects.map((project) => (
          <Accordion key={project.id}>
            <AccordionHeader onClick={() => toggleProject(project.id)}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <div style={{ marginLeft: "10px" }}>
                  <strong>{project.title}</strong>
                  <DescriptionText>{project.description}</DescriptionText>
                </div>
              </div>
              {openProjects.includes(project.id) ? (
                <AiOutlineUp />
              ) : (
                <AiOutlineDown />
              )}
            </AccordionHeader>
            <AccordionContent isOpen={openProjects.includes(project.id)}>
              <SectionTitle>개요</SectionTitle>
              <p>- 타겟 사용자: {project.targetUser}</p>
              <p>- 제공 가치: {project.valueProposition}</p>
              <p>- 핵심 기능: {project.coreFeatures}</p>
              <SectionTitle>담당 직무</SectionTitle>
              <p>{project.role}</p>
              <SectionTitle>활용 기술</SectionTitle>
              <p>- Frontend: {project.technologies.frontend}</p>
              <p>- Backend: {project.technologies.backend}</p>
              <p>- DB/Infra: {project.technologies.dbInfra}</p>
              <SectionTitle>구현 사항</SectionTitle>
              <p>{project.implementationDetails}</p>
              <SectionTitle>문제 해결</SectionTitle>
              <p>{project.problemSolving}</p>
              <SectionTitle>링크</SectionTitle>
              {project.deploymentUrl && (
                <p>
                  <Link
                    href={project.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    배포 페이지
                  </Link>
                </p>
              )}
              <p>
                {project.githubUrl.map((url, index) => (
                  <span key={index}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      GitHub 링크 {index + 1}
                    </Link>
                    {index < project.githubUrl.length - 1 && <span> | </span>}
                  </span>
                ))}
              </p>
            </AccordionContent>
          </Accordion>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
