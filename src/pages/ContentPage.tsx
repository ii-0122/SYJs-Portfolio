import Intro from "../components/intro/Intro";
import Profile from "../components/profile/Profile";
import Project from "../components/project/Project";
import TechStack from "../components/stacks/Stacks";

function ContentPage() {
  return (
    <>
      <Profile />
      <Intro />
      <TechStack />
      <Project />
    </>
  );
}

export default ContentPage;
