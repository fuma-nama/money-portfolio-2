import { Button, Grid, Text } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import { Box } from "./Box";
import { PhotoPanel } from "./PhotoPanel";
import { Img } from "./Img";
import { links } from "../links";
import { Skills } from "./Skills";

export function Banner() {
  return (
    <Box
      css={{
        position: "relative",
        my: "$20",
        "@md": {
          my: 0,
        },
      }}
    >
      <Background />
      <Grid.Container gap={3} css={{ position: "relative" }}>
        <Grid md={6} css={{ p: 0 }}>
          <Box
            css={{
              flexDirection: "column",
              p: 0,
              mt: "$xl",
              "@md": {
                my: "auto",
              },
            }}
          >
            <Main />
          </Box>
        </Grid>
        <Grid xs={0} md={6}>
          <PhotoPanel />
        </Grid>
      </Grid.Container>
      <Skills />
    </Box>
  );
}

function Background() {
  return (
    <>
      <Img
        src="/banner-gradient.svg"
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "800px",
          maxHeight: "1000px",
          "@xs": {
            top: "-20%",
          },
          "@md": {
            top: 0,
            right: 0,
            left: "initial",
          },
        }}
      />
      <Img
        src="/banner-wave.svg"
        css={{
          position: "absolute",
          bottom: "0",
          left: 0,
          w: "100%",
          maskImage:
            "radial-gradient(circle at center, white, transparent 50%)",
        }}
      />
    </>
  );
}

function Main() {
  return (
    <>
      <Header />
      <Text
        h4
        css={{
          color: "$textSecondary",
        }}
      >
        Hi! I am Money, a Full-Stack Engineer with Many years of experience
      </Text>
      <Button
        size="lg"
        auto
        shadow
        icon={<BsGithub width={30} height={30} />}
        onClick={() => window.open(links.github, "_blank")}
        color="gradient"
        css={{
          mt: "$10",
        }}
      >
        Github
      </Button>
    </>
  );
}

function Header() {
  return (
    <Text h1>
      The{" "}
      <Text
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        span
      >
        Full-Stack
      </Text>{" "}
      Engineer from the Edge
    </Text>
  );
}
