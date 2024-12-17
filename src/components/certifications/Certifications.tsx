import {
  CertificationDetails,
  CertificationItem,
  CertificationName,
  CertificationsContainer,
  Title,
  Underline,
} from "./Certifications.styled";

const Certifications = () => {
  const certificationsData = [
    {
      name: "정보처리기사",
      date: "2022.11.25",
      institution: "한국산업인력공단",
    },
    {
      name: "SQLD",
      date: "2023.10.06",
      institution: "한국데이터산업진흥원",
    },
  ];

  return (
    <>
      <Title>CERTIFICATIONS</Title>
      <Underline />
      <CertificationsContainer>
        {certificationsData.map((certification, index) => (
          <CertificationItem key={index}>
            <CertificationName>{certification.name}</CertificationName>
            <CertificationDetails>
              <span>발급 날짜 : {certification.date}</span>
              <span>|</span>
              <span>발급 기관 : {certification.institution}</span>
            </CertificationDetails>
          </CertificationItem>
        ))}
      </CertificationsContainer>
    </>
  );
};

export default Certifications;
