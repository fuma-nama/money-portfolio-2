import { AppNavbar } from "./components/AppNavbar";
import { Card, Container } from "@nextui-org/react";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <AppNavbar />
      <Container lg>
        <Banner />
        <Skills />
      </Container>
    </>
  );
}

export default App;
