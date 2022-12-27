import { Navbar, Button, Text, Link } from "@nextui-org/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useColorMode } from "../utils/theme";
import { FiPhoneCall } from "react-icons/fi";
import { links } from "../links";
import { GiSharkFin } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

export function AppNavbar() {
  const { isDark, setTheme } = useColorMode();

  return (
    <Navbar isBordered variant="sticky" css={{ zIndex: "$10" }}>
      <Navbar.Brand css={{ gap: "$3" }}>
        <GiSharkFin />
        <Text b size="$lg">
          Money
        </Text>
      </Navbar.Brand>
      <Navbar.Content gap="$sm">
        <Navbar.Item hideIn="xs" as={Link} href="#contact">
          <Button auto light color="secondary" icon={<FiPhoneCall />}>
            Contact
          </Button>
        </Navbar.Item>
        <Navbar.Item hideIn="xs" as={Link} href={links.github} target="_blank">
          <Button auto light css={{ color: "$accents8" }} icon={<FaGithub />} />
        </Navbar.Item>
        <Navbar.Item>
          <Button
            auto
            light
            css={{ color: "$accents8" }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            icon={isDark ? <BsMoonFill /> : <BsSunFill />}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
