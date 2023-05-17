import React, { useEffect, lazy, Suspense } from "react";
import "../../assets/css/About.css";

import OurCompany from "./OurCompany";

const LazyKnowMore = lazy(() => import("./KnowMore"));
const LazyCoFounder = lazy(() => import("./CoFounder"));
const LazyOurStory = lazy(() => import("./OurStory"));
const LazyTeam = lazy(() => import("./Team"));

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OurCompany />
      <Suspense fallback={null}>
        <LazyKnowMore />
        <LazyCoFounder />
        <LazyOurStory />
        <LazyTeam />
      </Suspense>
    </>
  );
};

export default About;
