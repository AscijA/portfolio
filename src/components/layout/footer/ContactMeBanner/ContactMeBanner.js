import Button from "../../../UI/Button/Button";
import classes from "./ContactMeBanner.module.css";

const ContactMeBanner = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.equalContainer}>
          <p className={classes.title}>Let's cooperate!</p>
        </div>
        <div className={classes.equalContainer}>
          <p className={classes.ideaText}>
            You have an idea? I can help you.
          </p>
        </div>
        <div className={classes.equalContainer}>
          <div className={classes.buttonContainer}>
            <Button label="Contact Me" buttonType="1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeBanner;
