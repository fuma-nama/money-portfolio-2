import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { Box, Flex, HStack } from "../Box";
import BotDashboardEn from "@assets/bot-dashboard-en.png";
import BotDashboardCn from "@assets/bot-dashboard-cn.png";
import { SiGoland, SiKotlin, SiPostgresql } from "react-icons/si";
import { Img } from "../Img";
import { FaGithub } from "react-icons/fa";
import { Grid as FGrid } from "../Box";
import { LightDarkTheme } from "./LightDarkTheme";

export function DiscordDashboard() {
  return (
    <Box>
      <Text h1>
        A{" "}
        <Text span css={{ textGradient: "0deg, rgb(246, 159, 39) , $pink600" }}>
          Light & Powerful
        </Text>{" "}
        Dashboard & Templates
      </Text>
      <Text h4 color="$textSecondary">
        Flexible, Modern Style UI with Fast performance and Perfect UX
      </Text>
      <Button flat icon={<FaGithub />} size="lg">
        Github
      </Button>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          mt: "$lg",
          "@md": {
            flexDirection: "row",
          },
        }}
      >
        <Flex css={{ display: "none", mt: "$md", "@md": { display: "flex" } }}>
          <Button color="secondary">English</Button>
          <Button>Chinese</Button>
        </Flex>
        <Preview />
      </Box>
      <LightDarkTheme />
    </Box>
  );
}

function Preview() {
  return (
    <Box css={{ mt: "$lg" }}>
      <Flex>
        <Img
          src={BotDashboardEn}
          css={{ borderRadius: "$md", shadow: "$md", ml: "5%" }}
        />
        <Img
          src={BotDashboardCn}
          css={{
            borderRadius: "$md",
            mt: "-50%",
            w: "80%",
            shadow: "0 12px 20px 6px rgb(0 0 0 / 60%)",
          }}
        />
      </Flex>
      <Card
        variant="bordered"
        css={{
          background: "$glass",
          backdropFilter: "blur(8px)",
          my: "$md",
          "@sm": {
            p: "$md",
          },
        }}
      >
        <Card.Body>
          <Text h3>With a Nice Backend</Text>
          <FGrid
            css={{
              w: "100%",
              gridTemplateColumns: "1fr",
              "@xs": {
                gridTemplateColumns: "1fr 1fr 1fr",
              },
            }}
          >
            <Tech icon={SiKotlin} name="Kotlin Ktor" />
            <Tech icon={SiGoland} name="GoLang" />
            <Tech icon={SiPostgresql} name="PostgreSQL" />
          </FGrid>
        </Card.Body>
      </Card>
    </Box>
  );
}

function Tech({ icon, name }: { icon: any; name: string }) {
  return (
    <HStack>
      <Text
        as={icon}
        css={{
          size: "$xl",
          "@sm": {
            size: "$2xl",
          },
        }}
      />
      <Text
        h3
        css={{
          fontSize: "$xl",
          "@sm": {
            fontSize: "$2xl",
          },
        }}
      >
        {name}
      </Text>
    </HStack>
  );
}
