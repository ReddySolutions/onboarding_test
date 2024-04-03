import { SimpleGrid, Text } from "@chakra-ui/react";
import useUserActivityLogs from "../hooks/useUserActivityLogs";
import { extractAttributes } from "../helpers/process-response-data";
import LeaderboardEntryCard from "./LeaderboardEntryCard";
import LeaderboardEntryCardSkeleton from "./LeaderboardEntryCardSkeleton";
import LeaderboardCardContainer from "./LeaderboardCardContainer";

const LeaderboardGrid = () => {
  const { userActivityLogs, error, isLoading } = useUserActivityLogs();
  console.log(userActivityLogs);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={"10px"}
        justifyContent={"center"}
      >
        {isLoading &&
          skeletons.map((sk) => (
            <LeaderboardCardContainer>
              <LeaderboardEntryCardSkeleton key={sk} />
            </LeaderboardCardContainer>
          ))}
        {userActivityLogs.map((log, index) => {
          const { avatar, username, activity, score } = extractAttributes(log);
          return (
            <LeaderboardCardContainer>
              <LeaderboardEntryCard
                avatar={avatar}
                username={username}
                activity={activity}
                score={score}
                key={index}
              />
            </LeaderboardCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default LeaderboardGrid;
