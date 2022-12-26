import { Navbar, Button, Text, Switch } from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import { useColorMode } from "../utils/theme";
import { FiPhoneCall } from "react-icons/fi";

export function AppNavbar() {
  const { isDark, setTheme } = useColorMode();
  return (
    <Navbar isBordered variant="sticky" css={{ zIndex: "$10" }}>
      <Navbar.Brand>
        <Text b size="$lg">
          Money
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item hideIn="xs">
          <Button auto flat icon={<BsGithub />} color="secondary">
            Github
          </Button>
        </Navbar.Item>
        <Navbar.Item hideIn="xs">
          <Button auto flat color="secondary" icon={<FiPhoneCall />}>
            Contact
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
