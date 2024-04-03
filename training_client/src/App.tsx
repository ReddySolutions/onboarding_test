import { Grid, GridItem } from "@chakra-ui/react";

import NavBar from "./components/Navbar";
import LeaderboardGrid from "./components/LeaderboardGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          <NavBar />
        </GridItem>

        <GridItem
          area="main"
          bg="dodgerblue"
          justifySelf="center"
          alignSelf="center"
        >
          <LeaderboardGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
