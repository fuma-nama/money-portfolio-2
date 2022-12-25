import {
  Button,
  Container,
  Grid,
  Image,
  Pagination,
  Row,
  Text,
  Tooltip,
} from "@nextui-org/react";
import Me from "../assets/me.jpg";
import Gradient from "../assets/banner-gradient.svg";
import { BsGithub } from "react-icons/bs";
import { Box } from "./Box";

export function Banner() {
  return (
    <Box
      css={{
        position: "relative",
        mb: "$10",
        "@lg": {
          mb: 0,
        },
      }}
    >
      <Image
        src={Gradient}
        containerCss={{
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          maxW: "1000px",
        }}
      />
      <Grid.Container gap={3}>
        <Grid md={6} css={{ p: 0 }}>
          <Box
            css={{
              flexDirection: "column",
              p: 0,
              mt: "$xl",
              "@md": {
                mt: "$3xl",
              },
              "@lg": {
                mt: "$4xl",
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

function PhotoPanel() {
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      direction="column"
      fluid
      css={{
        position: "relative",
        w: "100%",
        mt: "$xl",
        h: "$8xl",
      }}
    >
      <Image
        src={Me}
        css={{
          borderRadius: "$md",
          w: "250px",
        }}
      />
      <Tooltip
        content="Nice to meet you!"
        rounded
        color="primary"
        triggerCss={{ position: "absolute", bottom: "$3xl", left: "$2xl" }}
      >
        <Button flat size="lg">
          Hello World
        </Button>
      </Tooltip>
    </Container>
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
