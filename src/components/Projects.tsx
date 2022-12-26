import { Box } from "./Box";
import { DiscordDashboard } from "./projects/DiscordDashboard";
import { Frameworks } from "./projects/Frameworks";
import { Omagize } from "./projects/Omagize";

export function Projects() {
  return (
    <Box css={{ mt: "$4xl" }}>
      <Omagize />
      <DiscordDashboard />
      <Frameworks />
    </Box>
  );
}
