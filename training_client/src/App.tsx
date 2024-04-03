import { Grid, GridItem } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorCodeModeSwitch";

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
          Nav
          <ColorModeSwitch />
        </GridItem>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
