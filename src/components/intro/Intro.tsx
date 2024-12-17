import {
  IntroDescription,
  IntroductionContainer,
  IntroTitle,
  Title,
  Underline,
} from "./Intro.styled";

function Intro() {
  return (
    <>
      <Title>INTRODUCTION</Title>
      <Underline />
      <IntroductionContainer>
        <IntroTitle>안녕하세요, 고민하는 개발자 신유정입니다!</IntroTitle>
        <IntroDescription>
          저는 웹 풀스택 개발자이며, 여러 프로젝트를 통해 기술과 협업 경험을
          쌓아왔습니다.
          <br />
          React, TypeScript, Next.js, Javascript, Node.js와 같은 기술 스택을
          주로 사용합니다.
          <br />
          UX 향상을 위해 사용자의 시선에서 프로젝트를 발전시킬 수 있는 방향을
          끊임없이 고민하는 중입니다.
        </IntroDescription>
      </IntroductionContainer>
    </>
  );
}

export default Intro;
