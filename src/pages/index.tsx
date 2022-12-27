import React from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Container } from "@nextui-org/react";
import { AppNavbar } from "../components/AppNavbar";
import { Box } from "../components/Box";
import { Contact } from "../components/Contact";
import { Banner } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Money Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextSeo
        title="Money's Portfolio"
        description="The Portfolio of a Full-Stack Engineer"
        openGraph={{
          url: "https://money-portfolio.vercel.app",
          title: "Money's Portfolio",
          description: "Modern Web Developer & Full Stack Engineer",
          siteName: "Money Portfolio",
        }}
      />
      <AppNavbar />
      <Box css={{ position: "relative", overflowX: "hidden" }}>
        <Container lg css={{ position: "relative" }}>
          <Banner />
          <Projects />
        </Container>
        <Contact />
      </Box>
    </>
  );
}
