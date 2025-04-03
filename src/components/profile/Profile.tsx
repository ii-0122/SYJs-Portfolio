import { GiPartyHat } from "react-icons/gi";
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
import { VscGithubInverted } from "react-icons/vsc";
import { SiVelog } from "react-icons/si";
import { ImMail4 } from "react-icons/im";

function Profile() {
  return (
    <>
      <Title>CONTACT</Title>
      <Underline />
      <ProfileContainer>
        <ProfileDiv>
          <ProfileImage src="/SYJs-Portfolio/profile1.png" alt="Profile" />
          <InfoContainer>
            <InfoItem>
              <GiPartyHat />
              <BoldText> Birth: </BoldText>
              1997.01.22
            </InfoItem>
            <InfoItem>
              <VscGithubInverted />
              <BoldText> GitHub: </BoldText>
              <a
                href="https://github.com/ii-0122"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ii-0122
              </a>
            </InfoItem>
            <InfoItem>
              <SiVelog />
              <BoldText> Velog: </BoldText>
              <a
                href="https://velog.io/@ii-0122"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://velog.io/@ii-0122
              </a>
            </InfoItem>
            <InfoItem>
              <ImMail4 />
              <BoldText> Email: </BoldText>laikarise@gmail.com
            </InfoItem>
          </InfoContainer>
        </ProfileDiv>
      </ProfileContainer>
    </>
  );
}

export default Profile;
