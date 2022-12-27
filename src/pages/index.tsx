import React from "react";
import App from "./_app";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <>
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
      <App />
    </>
  );
}
