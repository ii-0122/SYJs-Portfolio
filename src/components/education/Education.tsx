import {
  CollegeName,
  Degree,
  Duration,
  EducationContainer,
  EducationItems,
  Major,
  Title,
  Underline,
} from "./Education.styed";

const Education = () => {
  return (
    <>
      <Title>EDUCATION</Title>
      <Underline />
      <EducationContainer>
        <EducationItems>
          <Degree>[ 학사 ] </Degree>
          <CollegeName>홍익대학교</CollegeName>
          <Major>컴퓨터공학과</Major>
          <Duration>2016.03 ~ 2023.02</Duration>
        </EducationItems>
      </EducationContainer>
    </>
  );
};

export default Education;
