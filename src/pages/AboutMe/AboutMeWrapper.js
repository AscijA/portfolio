import classes from "./AboutMeWrapper.module.css";

const AboutMeWrapper = (props) => {
  return (
    <section className={classes.section}>
      <div >
        {props.children}
      </div>
    </section>
  );
};

export default AboutMeWrapper;
