import {
  ActivitiesContainer,
  ActivityDate,
  ActivityItem,
  ActivityName,
  Title,
  Underline,
} from "./Activity.styled";

const Activity = () => {
  const activitiesData = [
    {
      name: "프로그래머스 데브코스 웹 풀 사이클 3기",
      date: "2024.04.08 ~ 2024.10.18",
    },
  ];
  return (
    <>
      <Title>TRAINING</Title>
      <Underline />
      <ActivitiesContainer>
        {activitiesData.map((activity, index) => (
          <ActivityItem key={index}>
            <ActivityName>{activity.name}</ActivityName>
            <ActivityDate>{activity.date}</ActivityDate>
          </ActivityItem>
        ))}
      </ActivitiesContainer>
    </>
  );
};

export default Activity;
