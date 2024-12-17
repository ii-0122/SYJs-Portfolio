import { useRef } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ContentPage from "./pages/ContentPage";

const App = () => {
  const profileRef = useRef<HTMLAnchorElement>(null);
  const introRef = useRef<HTMLAnchorElement>(null);
  const stackRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const activityRef = useRef<HTMLAnchorElement>(null);
  const certificationsRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        onClick={handleClick}
        profileRef={profileRef}
        introRef={introRef}
        stacksRef={stackRef}
        projectsRef={projectsRef}
        activityRef={activityRef}
        certificationsRef={certificationsRef}
      />
      <ContentPage
        profileRef={profileRef}
        introRef={introRef}
        stacksRef={stackRef}
        projectsRef={projectsRef}
        activityRef={activityRef}
        certificationsRef={certificationsRef}
      />
    </>
  );
};

export default App;
