import classes from "./AboutMeSection.module.css";

import Button from "../../../components/UI/Button/Button";
import AboutMeContent from "../../AboutMe/AboutMeContent/AboutMeContent";
import AboutMeWrapper from "../../AboutMe/AboutMeWrapper";
import { Link } from "react-router-dom";

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
