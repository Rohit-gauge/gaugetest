import React, { useEffect } from "react";
import "../../assets/css/About.css";

import OurCompany from "./OurCompany";
import KnowMore from "./KnowMore";
import CoFounder from "./CoFounder";
import OurStory from "./OurStory";
import Team from "./Team";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OurCompany />
      <KnowMore />
      <CoFounder />
      <OurStory />
      <Team />
    </>
  );
};

export default About;
