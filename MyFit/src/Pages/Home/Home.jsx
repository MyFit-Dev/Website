import React from "react";
import { Helmet } from "react-helmet";
import Land from "./Land";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MyFit | Home</title>
      </Helmet>

      <Land />
      <Pricing />
    </>
  );
}
