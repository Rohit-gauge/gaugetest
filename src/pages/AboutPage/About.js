import React, { useEffect, lazy, Suspense } from "react";
import "../../assets/css/About.css";

import OurCompany from "./OurCompany";

const KnowMore = lazy(() => import("./KnowMore"));
const CoFounder = lazy(() => import("./CoFounder"));
const OurStory = lazy(() => import("./OurStory"));
const Team = lazy(() => import("./Team"));

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OurCompany />
      <Suspense fallback={null}>
        <KnowMore />
        <CoFounder />
        <OurStory />
        <Team />
      </Suspense>
    </>
  );
};

export default About;
