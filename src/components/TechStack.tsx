import { Grid, Text } from "@nextui-org/react";
import { FaAngular } from "react-icons/fa";
import { Box } from "./Box";

export function TechStack() {
  return (
    <Box>
      <Text h1>Favourite Techs Used in Production</Text>
      <Grid.Container gap={3}>
        <Grid>
          <FaAngular />
        </Grid>
      </Grid.Container>
    </Box>
  );
}
