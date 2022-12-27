import { Button, Card, Code, Container, Link, Text } from "@nextui-org/react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { links } from "../links";
import { darkTheme } from "../themes";
import { Box, Center, GlassCard, Grid } from "./Box";

export function Contact() {
  return (
    <section id="contact">
      <Box
        className={darkTheme.className}
        css={{
          mt: "$3xl",
          position: "relative",
          borderTopLeftRadius: "$md",
          borderTopRightRadius: "$md",
          gridTemplateColumns: "1fr",
          background: "$background",
          pt: "$xl",
          pb: "$xl",
          "@sm": {
            pb: "$3xl",
          },
        }}
      >
        <BottomLight />
        <Container lg css={{ position: "relative" }}>
          <Grid
            css={{
              gap: "$xl",
              "@xs": {
                p: "$md",
              },
              "@sm": {
                p: "$xl",
                gap: "0px",
                gridTemplateColumns: "1fr 1fr",
              },
            }}
          >
            <Content />
            <Github />
          </Grid>
        </Container>
      </Box>
    </section>
  );
}

function Content() {
  return (
    <Box>
      <Text h2 css={{ fontWeight: "700" }}>
        Contact with Me
        <br />
        <Text
          span
          css={{
            textGradient: "0deg, $pink600, $purple600",
          }}
        >
          Anytime
        </Text>
      </Text>

      <Text h4 color="$accents7">
        Feel free to talk to me on Discord!
      </Text>
      <Button
        icon={<FaDiscord />}
        bordered
        color="secondary"
        size="lg"
        css={{ mt: "$xl" }}
        onClick={() => window.open(links.discord, "_blank")}
      >
        Join Server
      </Button>
    </Box>
  );
}

function Github() {
  return (
    <GlassCard isHoverable variant="bordered">
      <Card.Body as={Center}>
        <Text as={FaGithub} size="$7xl" />
        <Text h2>Github</Text>
        <Link href={links.github} target="_blank">
          <Code>{links.github}</Code>
        </Link>
      </Card.Body>
    </GlassCard>
  );
}

function BottomLight() {
  return (
    <Box
      className={darkTheme.className}
      css={{
        position: "absolute",
        left: 0,
        bottom: 0,
        w: "100%",
        h: "$5xl",
        opacity: 0.2,
        background: "linear-gradient(to bottom, transparent, $pink600)",
        maskImage: "linear-gradient(to left, transparent, white, transparent)",
      }}
    />
  );
}
