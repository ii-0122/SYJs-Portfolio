import { useState } from "react";
import {
  Icon,
  Proficiency,
  Star,
  TabButton,
  TabContainer,
  TechDetails,
  TechName,
  TechStackContainer,
  TechStackItem,
  Title,
  Underline,
} from "./Stacks.styed";
import techStacksData from "./techStacksData";

const categories = ["Frontend", "Backend", "DB / Infra"];

const Stacks = () => {
  const [selectedTab, setSelectedTab] = useState("Backend");

  const filteredStacks = techStacksData
    .filter((tech) => tech.category === selectedTab)
    .sort((a, b) => b.proficiency - a.proficiency);

  return (
    <>
      <Title>STACKS</Title>
      <Underline />
      <TabContainer>
        {categories.map((tab) => (
          <TabButton
            key={tab}
            active={selectedTab === tab}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.toUpperCase()}
          </TabButton>
        ))}
      </TabContainer>
      <TechStackContainer>
        {filteredStacks.map((tech, index) => (
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
