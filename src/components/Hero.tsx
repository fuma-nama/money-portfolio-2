import { Button, Grid, Row, Text } from "@nextui-org/react";
import Gradient from "../assets/banner-gradient.svg";
import { BsGithub } from "react-icons/bs";
import { Box } from "./Box";
import { PhotoPanel } from "./PhotoPanel";
import { Img } from "./Img";

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
      <Img
        src={Gradient}
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          maxW: "1000px",
        }}
      />
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
    </Box>
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
      <Row>
        <Button
          size="lg"
          auto
          shadow
          icon={<BsGithub width={30} height={30} />}
          color="gradient"
          css={{
            mt: "$10",
          }}
        >
          Github
        </Button>
      </Row>
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
