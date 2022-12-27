import React from "react";
import App from "./_app";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
type ServerSideProps = {};

const IndexPage: NextPage<ServerSideProps> = () => (
  <>
    <NextSeo
      title="Money's Portfolio"
      description="The Portfolio of a Full-Stack Engineer"
    />
    <App />
  </>
);

export default IndexPage;
