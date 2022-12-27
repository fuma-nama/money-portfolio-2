import React from "react";
import App from "./_app";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Money's Portfolio"
        description="The Portfolio of a Full-Stack Engineer"
      />
      <App />
    </>
  );
}
