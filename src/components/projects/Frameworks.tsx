import { Button, Card, Grid, Text } from "@nextui-org/react";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Center, Flex, GlassCard, HStack } from "../Box";
import { Img } from "../Img";
import { links } from "../../links";
import { useColorMode } from "../../lib/theme";

export function Frameworks() {
  return (
    <Flex
      css={{
        position: "relative",
        mt: "$4xl",
        gap: 0,
        pb: "$3xl",
        zIndex: "$2",
        "@sm": {
          pb: "$6xl",
          alignItems: "center",
        },
      }}
    >
      <Background />
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

function Background() {
  const { isDark } = useColorMode();

  return (
    <>
      <Img
        src="/banner-gradient.svg"
        css={{
          position: "absolute",
          top: "0",
          left: 0,
          minWidth: "1000px",
          zIndex: "-$2",
          opacity: isDark ? 0.7 : 0.3,
          "@sm": {
            top: "-50%",
          },
        }}
      />
      <Img
        css={{
          position: "absolute",
          bottom: 0,
          left: 0,
          w: "100%",
          minHeight: "500px",
          opacity: 0.5,
          maskImage:
            "linear-gradient(to right, transparent 0%, white 20%, white 80%, transparent 90%)",
          objectFit: "cover",
          zIndex: "-$2",
        }}
        src="/frameworks-bg.svg"
      />
    </>
  );
}

function Projects() {
  const projects = [
    {
      name: "JDAK",
      description: "Next-gen Discord bot Framework for Kotlin",
      icon: FaDiscord,
      url: links.jdak,
    },
    {
      name: "Discord UI",
      description: "Create Reactive Messages & UX on Discord Bot",
      icon: BsMenuButtonFill,
      url: links.discordUI,
    },
  ];

  return (
    <Grid.Container gap={2} justify="center" css={{ mt: "$12" }}>
      {projects.map((project, i) => (
        <Grid key={i} sm css={{ w: "100%" }}>
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
              <Button
                size="sm"
                shadow
                onClick={() => window.open(project.url, "_blank")}
              >
                Open
              </Button>
            </Card.Footer>
          </GlassCard>
        </Grid>
      ))}
      <Grid sm css={{ w: "100%" }}>
        <GlassCard
          variant="bordered"
          css={{ h: "100%", backdropFilter: "blur(16px)" }}
        >
          <Card.Header as={Text} h3>
            More
          </Card.Header>
          <Card.Body as={Center} css={{ pt: 0 }}>
            <Text color="$accents8">Interested about Other Projects?</Text>
          </Card.Body>
          <Card.Footer>
            <Button
              size="sm"
              flat
              css={{ w: "100%" }}
              onClick={() => window.open(links.github, "_blank")}
            >
              My Github
            </Button>
          </Card.Footer>
        </GlassCard>
      </Grid>
    </Grid.Container>
  );
}
