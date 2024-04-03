import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LeaderboardCardContainer = ({ children }: Props) => {
  return (
    <Box width={"250px"} boxShadow="x1" borderRadius="lg" overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default LeaderboardCardContainer;
