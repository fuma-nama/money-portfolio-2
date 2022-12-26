import { AppNavbar } from "./components/AppNavbar";
import { Container } from "@nextui-org/react";
import { Banner } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Box } from "./components/Box";
import { useColorMode } from "./utils/theme";
import { darkTheme } from "./main";

function App() {
  return (
    <>
      <AppNavbar />
      <Box css={{ position: "relative" }}>
        <Container lg css={{ position: "relative", overflowX: "hidden" }}>
          <Banner />
          <Skills />
          <Projects />
        </Container>
        <Contact />
      </Box>
    </>
  );
}

export default App;
