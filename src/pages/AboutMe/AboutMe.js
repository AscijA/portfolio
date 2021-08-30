import classes from "./AboutMe.module.css";
import ImageContainer from "./ImageContainer/ImageContainer";
import Skills from "./Skills/Skills";

const AboutMe = () => {
  return (
    <section className={classes.section}>
      <div className={classes.innerContainer}>
        <h1 className={classes.title}>About Me</h1>

        <div className={classes.content}>
          <ImageContainer />
          <p className={classes.aboutMeText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quia necessitatibus iure et est soluta dicta fugiat qui sed magnam
            doloremque esse, quisquam culpa exercitationem a error velit fugit
            ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis quia necessitatibus iure et est soluta dicta fugiat qui sed
            magnam doloremque esse, quisquam culpa exercitationem a error velit
            fugit ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis quia necessitatibus iure et est soluta dicta fugiat qui sed
            magnam doloremque esse, quisquam culpa exercitationem a error velit
            fugit ex? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis quia necessitatibus iure et est soluta dicta fugiat qui sed
            magnam doloremque esse, quisquam culpa exercitationem a error velit
            fugit ex?
          </p>
        </div>
        <Skills/>
      </div>
    </section>
  );
};

export default AboutMe;
