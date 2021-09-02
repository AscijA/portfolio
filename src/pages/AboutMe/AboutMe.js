import React from "react";
import AboutMeContent from "./AboutMeContent/AboutMeContent";
import AboutMeWrapper from "./AboutMeWrapper";
import Skills from "./Skills/Skills";

const AboutMe = (props) => {
  return (
    <AboutMeWrapper>
      <AboutMeContent type="page"/>
      <Skills />
    </AboutMeWrapper>
  );
};
export default AboutMe;
