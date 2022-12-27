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
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextSeo
        title="Money's Portfolio"
        description="The Portfolio of a Full-Stack Engineer"
        themeColor="#FF30b0"
        twitter={{
          cardType: "app",
        }}
        openGraph={{
          type: "website",
          url: "https://money-portfolio.vercel.app",
          title: "Hi! I am Money",
          description: "A Modern Web Developer & Full Stack Engineer",
          siteName: "Money's Portfolio",
          images: [
            {
              url: "https://money-portfolio.vercel.app/me.jpg",
              width: 800,
              height: 600,
              alt: "My Photo",
            },
          ],
          profile: {
            username: "Money Shark",
            firstName: "Money",
            lastName: "SonMooSans",
            gender: "Boy",
          },
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
