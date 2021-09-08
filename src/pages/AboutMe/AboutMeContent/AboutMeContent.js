import classes from "./AboutMeContent.module.css";

import React from "react";

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
      <div className={classes.igotlost}>
        <div className={classes.contentContainer}>
          <p className={`${classes.aboutMeText} ${classes.home}`}>
            I am a:
          </p>
          <ul className={classes.home}>
            <li>_Web developer_</li>
            <li>_Discord bot creator_</li>
            <li>_IT Student (University of Technology Graz)_</li>
            <li>_Coffee adict_</li>
            <li>_Football player_</li>
          </ul>
        </div>
        <div className={`${classes.contentContainer} ${classes.special}`}>
          <p className={`${classes.aboutMeText} ${classes.home}`}>
            I like to:
          </p>
          <ul className={classes.home}>
            <li>_Read Books_</li>
            <li>_Watch movies_</li>
            <li>_Listen to music_</li>
            <li>_Play football_</li>
            <li>_The most important, solve problems_</li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.outerContainer}>
      <h1 >About Me</h1>

      <div className={classes.contentOuterContainer}>
        <ImageContainer />
        {content}
      </div>
    </div>
  );
};
export default AboutMeContent;
