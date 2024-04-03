import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import ActivityScore from "./ActivityScoreContainer";

interface Props {
  avatar: string;
  username: string;
  activity: string;
  score: number;
}

const LeaderboardEntryCard = ({ avatar, username, activity, score }: Props) => {
  return (
    <Card colorScheme="red" border={`${score >= 90 ? "1px" : ""}`}>
      <Image src={avatar} borderRadius={`${score < 90 ? "50%" : ""}`} />
      <CardBody>
        <Heading fontSize="2xl">{username}</Heading>
        <HStack justifyContent={"space-between"}>
          <Text>{activity}</Text>
          <ActivityScore score={score} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default LeaderboardEntryCard;
