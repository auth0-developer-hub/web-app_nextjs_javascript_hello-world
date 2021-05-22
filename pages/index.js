import React, { Fragment } from "react";
import { HeroBanner } from "../components/hero-banner";
import { NextSteps } from "../components/next-steps";
import PageLayout from "../components/page-layout";

const Home = () => (
  <PageLayout>
    <Fragment>
      <HeroBanner />
      <NextSteps />
    </Fragment>
  </PageLayout>
);

export default Home;
