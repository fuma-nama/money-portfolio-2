import { Button, Card, Row, Text, Tooltip } from "@nextui-org/react";
import { Box } from "../Box";
import { Img } from "../Img";
import { useColorMode } from "../../lib/theme";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiFramer, SiKotlin, SiPostgresql } from "react-icons/si";
import { BsCheckCircleFill, BsEyeFill, BsFlower3 } from "react-icons/bs";
import { As } from "@nextui-org/react/types/utils/system";
import { updown } from "../../lib/transitions";
import { links } from "../../links";

export function Omagize() {
  const { isDark } = useColorMode();
  return (
    <Box
      css={{
        mb: "$2xl",
        "@xs": { mb: "$4xl" },
        position: "relative",
        zIndex: "$2",
      }}
    >
      <Img
        src="/chat-app-gradient.svg"
        css={{
          position: "absolute",
          top: 0,
          left: "-30%",
          "@xs": {
            top: "-30%",
          },
          minWidth: "800px",
          zIndex: "-$2",
        }}
      />
      <Intro />
      <Box
        css={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          mt: "$10",
          gap: "20px",
          maxWidth: "1300px",
        }}
      >
        <Preview />
        <FeaturesCard />
        <TechStack />
      </Box>
    </Box>
  );
}

function Intro() {
  const { isDark } = useColorMode();

  return (
    <>
      <Text h1>
        My{" "}
        <Text
          span
          css={{
            textGradient: isDark
              ? "0deg, $blue800, $purple800"
              : "0deg, $blue100, $purple600",
          }}
        >
          Full Featured
        </Text>{" "}
        chat app
      </Text>
      <Text h4 color="$textSecondary">
        Modern, Full Featured Real-time Chat App on Web
      </Text>
      <Button
        flat
        size="lg"
        color="secondary"
        icon={<BsEyeFill />}
        css={{ mt: "$lg" }}
        onClick={() => window.open(links.omagize, "_blank")}
      >
        Take a Look
      </Button>
    </>
  );
}

function FeaturesCard() {
  const features = ["Nice UI & UX", "Clean code", "Cup of Coffice"];

  return (
    <Card
      variant="bordered"
      css={{
        display: "none",
        "@xs": {
          animation: `${updown} 4s infinite`,
          background: "$background",
          display: "flex",
          position: "absolute",
          top: 0,
          right: "$xl",
          w: "fit-content",
          shadow: "$xl",
        },
        "@sm": {
          p: "$md",
        },
      }}
    >
      <Card.Body css={{ gap: "$sm" }}>
        {features.map((feature, i) => (
          <Row key={i} align="center" css={{ gap: "$xs" }}>
            <BsCheckCircleFill />
            <Text b>{feature}</Text>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}

function Preview() {
  return (
    <Box
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        "@xs": {
          pr: "$32",
        },
        "@sm": {
          pl: "$20",
          pr: "$60",
        },
      }}
    >
      <Img
        src="/omagize-desktop.png"
        css={{
          borderRadius: "$md",
          shadow: "$xl",
        }}
      />
      <Img
        src="/omagize-mobile.png"
        css={{
          position: "absolute",
          bottom: "-$xl",
          right: "10%",
          borderRadius: "$md",
          shadow: "0 12px 20px 6px rgb(0 0 0 / 50%)",
          w: "20%",
          "@sm": {
            bottom: "-$2xl",
          },
        }}
      />
    </Box>
  );
}

function TechStack() {
  const { isDark } = useColorMode();

  return (
    <Box
      css={{
        "@xs": {
          w: "fit-content",
          minWidth: "$5xl",
          position: "absolute",
          bottom: "-$3xl",
          animation: `${updown} 6s infinite`,
        },
        "@sm": {
          minWidth: "$8xl",
          bottom: "-$2xl",
        },
      }}
    >
      <Card
        variant="bordered"
        css={{
          background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Card.Header>
          <Text h3>Build With</Text>
        </Card.Header>
        <Card.Body css={{ pt: 0 }}>
          <Row css={{ gap: "$md" }}>
            <TechItem name="React" icon={FaReact} color="$blue600" />
            <TechItem
              name="Chakra UI"
              icon={SiChakraui}
              color={isDark ? "$pink600" : "$pink500"}
            />
            <TechItem
              name="Framer Motion"
              icon={SiFramer}
              color={isDark ? "$purple800" : "$purple500"}
            />
            <TechItem name="React Query" icon={BsFlower3} color="$red600" />
          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Body>
          <Row css={{ gap: "$md" }}>
            <TechItem name="PostgreSQL" icon={SiPostgresql} color="$blue600" />
            <TechItem name="Kotlin Ktor" icon={SiKotlin} color="$yellow600" />
          </Row>
        </Card.Body>
      </Card>
    </Box>
  );
}

function TechItem(tech: { name: string; color: string; icon: As }) {
  return (
    <Tooltip content={tech.name} rounded color="secondary">
      <Text
        as={tech.icon}
        css={{
          size: "30px",
          "@sm": {
            size: "50px",
          },
        }}
        color={tech.color}
      />
    </Tooltip>
  );
}
