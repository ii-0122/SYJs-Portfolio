import {
  BoldText,
  InfoContainer,
  InfoItem,
  ProfileContainer,
  ProfileDiv,
  ProfileImage,
  Title,
  Underline,
} from "./Profile.styled";

function Profile() {
  return (
    <>
      <Title>CONTACT</Title>
      <Underline />
      <ProfileContainer>
        <ProfileDiv>
          <ProfileImage src="https://via.placeholder.com/300" alt="Profile" />
          <InfoContainer>
            <InfoItem>
              <BoldText>Birth: </BoldText>1997.01.22
            </InfoItem>
            <InfoItem>
              <BoldText>Github: </BoldText>
              <a
                href="https://github.com/ii-0122"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ii-0122
              </a>
            </InfoItem>
            <InfoItem>
              <BoldText>Velog: </BoldText>
              <a
                href="https://velog.io/@ii-0122"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://velog.io/@ii-0122
              </a>
            </InfoItem>
            <InfoItem>
              <BoldText>E-mail: </BoldText>laikarise@gmail.com
            </InfoItem>
          </InfoContainer>
        </ProfileDiv>
      </ProfileContainer>
    </>
  );
}

export default Profile;
