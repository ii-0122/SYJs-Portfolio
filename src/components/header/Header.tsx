import { HeaderContainer, LogoStyle, Nav, NavLink } from "./Header.styled";

interface HeaderProps {
  onClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLAnchorElement>
  ) => void;
  profileRef: React.RefObject<HTMLAnchorElement>;
  introRef: React.RefObject<HTMLAnchorElement>;
  stacksRef: React.RefObject<HTMLAnchorElement>;
  projectsRef: React.RefObject<HTMLAnchorElement>;
  activityRef: React.RefObject<HTMLAnchorElement>;
  educationRef: React.RefObject<HTMLAnchorElement>;
  certificationsRef: React.RefObject<HTMLAnchorElement>;
}

const Header: React.FC<HeaderProps> = ({
  onClick,
  profileRef,
  introRef,
  stacksRef,
  projectsRef,
  activityRef,
  educationRef,
  certificationsRef,
}) => {
  return (
    <HeaderContainer>
      <LogoStyle>SYJ's</LogoStyle>
      <Nav>
        <NavLink href="#" onClick={(event) => onClick(event, introRef)}>
          INTRODUCTION
        </NavLink>
        <NavLink href="#" onClick={(event) => onClick(event, educationRef)}>
          EDUCATION
        </NavLink>
        <NavLink href="#" onClick={(event) => onClick(event, activityRef)}>
          TRAINING
        </NavLink>
        <NavLink
          href="#"
          onClick={(event) => onClick(event, certificationsRef)}
        >
          CERTIFICATIONS
        </NavLink>
        <NavLink href="#" onClick={(event) => onClick(event, stacksRef)}>
          STACKS
        </NavLink>
        <NavLink href="#" onClick={(event) => onClick(event, projectsRef)}>
          PROJECTS
        </NavLink>
        <NavLink href="#" onClick={(event) => onClick(event, profileRef)}>
          CONTACT
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
