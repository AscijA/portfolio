import classes from "./Footer.module.css";

import { useHistory } from "react-router";

import IconsList from "./IconsList/IconsList";
import Icon from "./IconsList/Icon";
import ContactMeBanner from "./ContactMeBanner/ContactMeBanner";

import react from "../../../assets/icons/react.png";

const Footer = () => {
  const history = useHistory();
  let banner = (
    <div className={classes.outerContainer}>
      <div className={classes.banner}>
        <ContactMeBanner />
      </div>
    </div>
  );
  let outerClasses = classes.outerContainer;
  if (history.location.pathname.startsWith("/contact")) {
    banner = null;
    outerClasses = `${classes.outerContainer} ${classes.narrow}`;
  }

  return (
    <div className={outerClasses}>
      {banner}
      <div className={classes.container}>
        <div>
          <IconsList />
        </div>
        <div>
          <p>Created with</p>
          <Icon iconPath={react} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
