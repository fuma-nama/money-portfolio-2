import { Button, Text } from "@nextui-org/react";
import { Box } from "../Box";
import { Img } from "../Img";
import { Grid as FGrid } from "../Box";
import { useColorMode } from "../../lib/theme";

export function LightDarkTheme() {
  return (
    <Box
      css={{
        position: "relative",
        mt: "$3xl",
      }}
    >
      <Img
        src="/theme-gradient.svg"
        css={{
          position: "absolute",
          bottom: 0,
          right: 0,
          minWidth: "800px",
          "@sm": {
            bottom: "-70%",
          },
        }}
      />
      <Content />
    </Box>
  );
}

function Content() {
  const { isDark, setTheme } = useColorMode();

  return (
    <FGrid
      css={{
        position: "relative",
        gridTemplateColumns: "1fr",
        gap: "$xl",
        "@sm": {
          gridTemplateColumns: "1fr 1fr",
        },
      }}
    >
      <Img
        src="/bot-dashboard-light.png"
        css={{
          borderRadius: "$md",
          shadow: "$md",
          gridRowStart: 2,
          w: "500px",
          "@sm": {
            w: "100%",
            gridRowStart: 1,
          },
        }}
      />
      <Box>
        <Text h1>
          Beautiful{" "}
          <Text
            span
            css={{
              textGradient: "90deg, $purple600, $blue600",
            }}
          >
            Light & Dark
          </Text>{" "}
          Theme
        </Text>
        <Text h4 color="$textSecondary">
          I hope all My Projects can provide Built-in Light & Dark Theme support
          which give users a better experience
        </Text>
        <Button
          flat
          onClick={() => setTheme(isDark ? "light" : "dark")}
          size="lg"
          css={{ mt: "$xl" }}
        >
          Click Here
        </Button>
      </Box>
    </FGrid>
  );
}
