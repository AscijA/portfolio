import classes from "./AboutMeWrapper.module.css";

const AboutMeWrapper = (props) => {
  return (
    <section className={classes.section}>
      <div className={classes.innerContainer}>
        {props.children}
      </div>
    </section>
  );
};

export default AboutMeWrapper;
