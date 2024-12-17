import { forwardRef } from "react";
import { Section } from "./ContentPage.style.tsx";
import Profile from "../components/profile/Profile";
import Intro from "../components/intro/Intro";
import Project from "../components/projects/Projects.tsx";
import Stacks from "../components/stacks/Stacks.tsx";
import Activity from "../components/activity/Activity.tsx";
import Certifications from "../components/certifications/Certifications.tsx";
import Footer from "../components/footer/Footer.tsx";

interface ContentPageProps {
  profileRef: React.RefObject<HTMLAnchorElement>;
  introRef: React.RefObject<HTMLAnchorElement>;
  stacksRef: React.RefObject<HTMLAnchorElement>;
  projectsRef: React.RefObject<HTMLAnchorElement>;
  activityRef: React.RefObject<HTMLAnchorElement>;
  certificationsRef: React.RefObject<HTMLAnchorElement>;
}

const ContentPage = forwardRef<HTMLDivElement, ContentPageProps>(
  ({
    profileRef,
    introRef,
    stacksRef,
    projectsRef,
    activityRef,
    certificationsRef,
  }) => {
    return (
      <>
        <Section ref={introRef}>
          <Intro />
        </Section>
        <Section ref={activityRef}>
          <Activity />
        </Section>
        <Section ref={certificationsRef}>
          <Certifications />
        </Section>
        <Section ref={stacksRef}>
          <Stacks />
        </Section>
        <Section ref={projectsRef}>
          <Project />
        </Section>
        <Section ref={profileRef}>
          <Profile />
        </Section>
        <Footer />
      </>
    );
  }
);

export default ContentPage;
