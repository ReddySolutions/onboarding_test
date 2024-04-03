import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ActivityScoreContainer = ({ score }: Props) => {
  const color = score === 100 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize={"20px"}
      padding={2}
      borderRadius={"6px"}
    >
      {score}
    </Badge>
  );
};

export default ActivityScoreContainer;
