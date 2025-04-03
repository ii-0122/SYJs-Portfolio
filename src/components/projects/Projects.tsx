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
  AccordionDescriptionText,
  AccordionTextDiv,
} from "./Projects.styled.tsx";
import { projects } from "./projects.ts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiGithub, FiLink } from "react-icons/fi";

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
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </AccordionHeader>
            <AccordionContent isOpen={openProjects.includes(project.id)}>
              <SectionTitle>개요</SectionTitle>
              <AccordionTextDiv>
                <p>
                  · 타겟 사용자 :{" "}
                  <AccordionDescriptionText>
                    {project.targetUser}
                  </AccordionDescriptionText>
                </p>
                <p>
                  · 제공 가치 :{" "}
                  <AccordionDescriptionText>
                    {project.valueProposition}
                  </AccordionDescriptionText>
                </p>
                <p>
                  · 핵심 기능 :{" "}
                  <AccordionDescriptionText>
                    {project.coreFeatures}
                  </AccordionDescriptionText>
                </p>
              </AccordionTextDiv>
              <SectionTitle>담당 직무</SectionTitle>
              <AccordionTextDiv>
                <p>
                  · FE :{" "}
                  <AccordionDescriptionText>
                    {project.role.fe}
                  </AccordionDescriptionText>
                </p>
                <p>
                  · BE :{" "}
                  <AccordionDescriptionText>
                    {project.role.be}
                  </AccordionDescriptionText>
                </p>
              </AccordionTextDiv>
              <SectionTitle>활용 기술</SectionTitle>
              <AccordionTextDiv>
                <p>
                  · Frontend :{" "}
                  <AccordionDescriptionText>
                    {project.technologies.frontend}
                  </AccordionDescriptionText>
                </p>
                <p>
                  · Backend :{" "}
                  <AccordionDescriptionText>
                    {project.technologies.backend}
                  </AccordionDescriptionText>
                </p>
                <p>
                  · DB / Infra :{" "}
                  <AccordionDescriptionText>
                    {project.technologies.dbInfra}
                  </AccordionDescriptionText>
                </p>
              </AccordionTextDiv>
              <SectionTitle>구현 사항</SectionTitle>
              <AccordionTextDiv></AccordionTextDiv>
              <p>{project.implementationDetails}</p>
              <SectionTitle>문제 해결</SectionTitle>
              <AccordionTextDiv></AccordionTextDiv>
              <p>{project.problemSolving}</p>
              <SectionTitle>링크</SectionTitle>
              <AccordionTextDiv>
                {project.deploymentUrl && (
                  <p>
                    <Link
                      href={project.deploymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      배포 페이지
                      <FiLink />
                    </Link>
                  </p>
                )}
                <p>
                  {project.githubUrl.map((url, index) => (
                    <span key={index}>
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub 링크 {index + 1} <FiGithub />
                      </Link>
                      {index < project.githubUrl.length - 1 && (
                        <AccordionDescriptionText> | </AccordionDescriptionText>
                      )}
                    </span>
                  ))}
                </p>
              </AccordionTextDiv>
            </AccordionContent>
          </Accordion>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
