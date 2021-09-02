import classes from "./AboutMeContent.module.css";
import React, { Fragment } from "react";
import ImageContainer from "../ImageContainer/ImageContainer";

const AboutMeContent = (props) => {
  let content;
  const type = props.type;
  if (type === "page") {
    content = (
      <p className={`${classes.aboutMeText} ${classes.page}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia
        necessitatibus iure et est soluta dicta fugiat qui sed magnam doloremque
        esse, quisquam culpa exercitationem a error velit fugit ex? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officiis quia
        necessitatibus iure et est soluta dicta fugiat qui sed magnam doloremque
        esse, quisquam culpa exercitationem a error velit fugit ex? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officiis quia
        necessitatibus iure et est soluta dicta fugiat qui sed magnam doloremque
        esse, quisquam culpa exercitationem a error velit fugit ex? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officiis quia
        necessitatibus iure et est soluta dicta fugiat qui sed magnam doloremque
        esse, quisquam culpa exercitationem a error velit fugit ex?
      </p>
    );
  } else {
    content = (
      <p className={`${classes.aboutMeText} ${classes.home}`}>
        dolor sit amet consectetur adipisicing elit. Officiis quia
        necessitatibus iure et est soluta dicta fugiat qui sed magnam doloremque
        esse, quisquam culpa exercitationem a error velit fugit ex?
      </p>
    );
  }
  return (
    <Fragment>
      <h1 className={classes.title}>About Me</h1>

      <div className={classes.content}>
        <ImageContainer />
        {content}
      </div>
    </Fragment>
  );
};
export default AboutMeContent;
