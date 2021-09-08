import classes from "./ContactMeBanner.module.css";
import { Link } from "react-router-dom";

import Button from "../../../UI/Button/Button";


const ContactMeBanner = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.titleContainer}>
          <p >Let's cooperate!</p>
        </div>
        <div className={classes.ideaContainer}>
          <p >You have an idea? I can help you.</p>
        </div>

          <Link to="/contact" className={classes.buttonContainer}>
            <Button label="Contact Me" buttonType="1" />
          </Link>
      </div>
    </div>
  );
};

export default ContactMeBanner;
