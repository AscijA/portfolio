import classes from "./Footer.module.css";
import react from "../../../assets/icons/react.png";

import IconsList from "./IconsList/IconsList";
import Icon from "./IconsList/Icon";
import ContactMeBanner from "./ContactMeBanner/ContactMeBanner";

const Footer = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.banner}>
        <ContactMeBanner />
      </div>

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
