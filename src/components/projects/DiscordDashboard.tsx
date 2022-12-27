import { Button, Card, Link, Text } from "@nextui-org/react";
import { Box, Flex, HStack } from "../Box";
import { SiGoland, SiKotlin, SiPostgresql } from "react-icons/si";
import { Img } from "../Img";
import { FaBoxOpen, FaGithub } from "react-icons/fa";
import { Grid as FGrid } from "../Box";
import { links } from "../../links";
import { useColorMode } from "../../lib/theme";

export function DiscordDashboard() {
  const { isDark } = useColorMode();
  return (
    <Box
      css={{
        position: "relative",
        mt: "$3xl",
        zIndex: "$2",
        "@sm": { mt: "$5xl" },
      }}
    >
      <Img
        src="/dashboard-gradient.svg"
        css={{
          position: "absolute",
          top: "0",
          left: "-20%",
          zIndex: "-$2",
          minWidth: "700px",
          "@sm": {
            top: "-10%",
            left: isDark ? "-30%" : "-20%",
          },
        }}
      />
      <Box css={{ position: "relative" }}>
        <Content />
      </Box>
    </Box>
  );
}

function Content() {
  return (
    <>
      <Text h1>
        <Text span css={{ textGradient: "0deg, rgb(246, 159, 39) , $pink600" }}>
          Super Powerful
        </Text>{" "}
        Dashboard Templates
      </Text>
      <Text h4 color="$textSecondary">
        Flexible, Modern, Cutting Edge Dashboard with Fast performance and
        Perfect UX
      </Text>
      <HStack>
        <Link href={links.botDashboardDemo} target="_blank">
          <Button flat icon={<FaBoxOpen />} auto size="lg">
            Demo
          </Button>
        </Link>
        <Link href={links.botDashboardGithub} target="_blank">
          <Button flat color="secondary" icon={<FaGithub />} auto size="lg">
            Github
          </Button>
        </Link>
      </HStack>

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
    </>
  );
}

function Preview() {
  return (
    <Box css={{ mt: "$lg", "@sm": { p: "$xl" } }}>
      <Flex>
        <Img
          src="/bot-dashboard-en.png"
          css={{ borderRadius: "$md", shadow: "$md", ml: "5%" }}
        />
        <Img
          src="/bot-dashboard-cn.png"
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
          my: "$xl",
          "@sm": {
            my: "$2xl",
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
