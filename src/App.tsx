import { AppNavbar } from "./components/AppNavbar";
import { Container } from "@nextui-org/react";
import { Banner } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <AppNavbar />
      <Container lg>
        <Banner />
        <Skills />
        <Projects />
      </Container>
    </>
  );
}

export default App;
