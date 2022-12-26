import { Button, Card, Grid, Text } from "@nextui-org/react";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Box, Center, Flex, GlassCard, HStack } from "../Box";

export function Frameworks() {
  return (
    <Flex css={{ mt: "$4xl", alignItems: "center", gap: 0 }}>
      <Text h1>
        Not just{" "}
        <Text span css={{ textGradient: "0deg, $yellow600, $red500" }}>
          That
        </Text>
      </Text>
      <Text h1>
        <Text span css={{ textGradient: "0deg, $green400, $green600" }}>
          More than
        </Text>{" "}
        That
      </Text>

      <Text h3 color="$textSecondary">
        Light, Flexible, Fast Frameworks which provides high-quality code
      </Text>
      <Projects />
    </Flex>
  );
}

function Projects() {
  const projects = [
    {
      name: "JDAK",
      description: "Next-gen Discord bot Framework for Kotlin",
      icon: FaDiscord,
    },
    {
      name: "Discord UI",
      description: "Create Reactive Messages & UX on Discord Bot",
      icon: BsMenuButtonFill,
    },
  ];

  return (
    <Grid.Container gap={2} justify="center" css={{ mt: "$12" }}>
      {projects.map((project) => (
        <Grid sm css={{ w: "100%" }}>
          <GlassCard variant="bordered">
            <Card.Header as={HStack} css={{ gap: "$4" }}>
              <Center
                css={{
                  w: "$2xl",
                  h: "$2xl",
                  background: "$pink600",
                  borderRadius: "$md",
                }}
              >
                <Text as={project.icon} color="$pink200" size="$xl" />
              </Center>
              <Text h3>{project.name}</Text>
            </Card.Header>
            <Card.Body css={{ pt: 0 }}>
              <Text color="$accents8">{project.description}</Text>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" shadow>
                Open
              </Button>
            </Card.Footer>
          </GlassCard>
        </Grid>
      ))}
      <Grid sm css={{ w: "100%" }}>
        <GlassCard variant="bordered" css={{ h: "100%" }}>
          <Card.Header as={Text} h3>
            More
          </Card.Header>
          <Card.Body as={Center} css={{ pt: 0 }}>
            <Text color="$textSecondary">Interested about Other Projects?</Text>
          </Card.Body>
          <Card.Footer>
            <Button size="sm" flat css={{ w: "100%" }}>
              My Github
            </Button>
          </Card.Footer>
        </GlassCard>
      </Grid>
    </Grid.Container>
  );
}
