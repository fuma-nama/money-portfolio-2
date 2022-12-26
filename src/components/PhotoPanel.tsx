import {
  Container,
  Card,
  Avatar,
  Tooltip,
  Button,
  Image,
  Text,
  keyframes,
} from "@nextui-org/react";
import { useColorMode } from "../utils/theme";
import Me from "../assets/me.jpg";
import { updown } from "./transitions";

export function PhotoPanel() {
  const { isDark } = useColorMode();

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
      <Card
        variant="bordered"
        css={{
          animation: `${updown} 4s infinite`,
          position: "absolute",
          right: "$3xl",
          bottom: "$2xl",
          w: "$5xl",
          shadow: "$lg",
          backdropFilter: "blur(16px)",
          background: "$backgroundAlpha",
        }}
      >
        <Card.Header
          css={{
            gap: "$3",
          }}
        >
          <Avatar src={Me} />
          <Text b size="$lg">
            Money
          </Text>
        </Card.Header>
        <Card.Body css={{ pt: 0 }}>
          <Text color="$accents9">Welcome to talk to me in Discord!</Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
