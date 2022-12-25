import { Grid, Card, Text, Container } from "@nextui-org/react";
import { ReactElement } from "react";
import { BsMenuApp, BsPenFill, BsServer } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Box } from "./Box";

type Skill = {
  name?: string;
  description?: string;
  icon?: ReactElement;
};

const skills: Skill[] = [
  {
    name: "Web Developer",
    description: "Modern Web Dev who wrote many dashboards",
    icon: (
      <Box
        as={FaReact}
        css={{
          w: "$10",
          h: "$10",
        }}
      />
    ),
  },
  {
    name: "Software Engineer",
    description: "Love to write nice Chat apps and Dashboards",
    icon: (
      <Box
        as={BsMenuApp}
        css={{
          w: "$10",
          h: "$10",
        }}
      />
    ),
  },
  {
    name: "UI Designer",
    description: "Designed many nice Websites & UI",
    icon: <BsPenFill />,
  },
  {
    name: "Backend Engineer",
    description: "Built Dashboard Backend APIs with SQL and NoSQL",
    icon: (
      <Box
        as={BsServer}
        css={{
          w: "$10",
          h: "$10",
        }}
      />
    ),
  },
];

export function Skills() {
  return (
    <Grid.Container gap={3} css={{ p: 0 }}>
      {skills.map((skill, i) => (
        <Grid key={i} xs={12} sm={4} md={3}>
          <SkillItem skill={skill} />
        </Grid>
      ))}
    </Grid.Container>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <Card
      variant="bordered"
      css={{
        h: "100%",
        shadow: "$lg",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Card.Header
        css={{
          gap: "$5",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {skill.icon}
        <Text b css={{ mb: 0 }}>
          {skill.name}
        </Text>
      </Card.Header>
      <Card.Body
        css={{
          pt: 0,
        }}
      >
        <Text color="$textBrand">{skill.description}</Text>
      </Card.Body>
    </Card>
  );
}
