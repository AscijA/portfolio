import { useEffect, useState } from "react";

import classes from "./ContactMeBanner.module.css";
import Button from "../../../UI/Button/Button";

const ContactMeBanner = () => {
  /* handles weird media query bug. On window resize, when hiding certain element, a weird
  margine appears*/
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setShouldRender(false);
      } else {
        setShouldRender(true);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const shittyshit = !shouldRender ? null : (
    <div className={classes.ideaContainer}>
      <p className={classes.ideaText}>You have an idea? I can help you.</p>
    </div>
  );

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>Let's cooperate!</p>
        </div>
        {shittyshit}
        <div className={classes.buttonContainer}>
          <Button label="Contact Me" buttonType="1" />
        </div>
      </div>
    </div>
  );
};

export default ContactMeBanner;
