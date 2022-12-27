import { AppNavbar } from "../components/AppNavbar";
import { Container, NextUIProvider } from "@nextui-org/react";
import { Banner } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Box } from "../components/Box";
import "./index.css";
import { darkTheme, lightTheme } from "../themes";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <AppNavbar />
        <Box css={{ position: "relative", overflowX: "hidden" }}>
          <Container lg css={{ position: "relative" }}>
            <Banner />
            <Projects />
          </Container>
          <Contact />
        </Box>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
