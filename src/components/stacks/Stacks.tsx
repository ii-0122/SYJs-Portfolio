import {
  Icon,
  Proficiency,
  Star,
  TechDetails,
  TechName,
  TechStackContainer,
  TechStackItem,
  Title,
  Underline,
} from "./Stacks.styed";
import techStacksData from "./techStacksData";

const Stacks = () => {
  return (
    <>
      <Title>STACKS</Title>
      <Underline />
      <TechStackContainer>
        {techStacksData.map((tech, index) => (
          <TechStackItem key={index}>
            <Icon src={tech.icon} alt={`${tech.name} 아이콘`} />
            <TechDetails>
              <TechName>{tech.name}</TechName>
              <span>{tech.usage}</span>
            </TechDetails>
            <Proficiency>
              {[...Array(5)].map((_, starIndex) => (
                <Star key={starIndex} filled={starIndex < tech.proficiency}>
                  ★
                </Star>
              ))}
            </Proficiency>
          </TechStackItem>
        ))}
      </TechStackContainer>
    </>
  );
};

export default Stacks;
