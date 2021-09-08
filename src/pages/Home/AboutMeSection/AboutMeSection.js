import classes from "./AboutMeSection.module.css";

import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button/Button";
import AboutMeContent from "../../AboutMe/AboutMeContent/AboutMeContent";
import AboutMeWrapper from "../../AboutMe/AboutMeWrapper";


const AboutMeSection = (props) => {
  return (
    <AboutMeWrapper>
      <AboutMeContent type="home" />
      <Link to="/about" className={classes.buttonContainer}>
        <Button buttonType="1" label="More" />
      </Link>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
