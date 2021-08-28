import classes from "./IconsList.module.css";
import github from "../../../../assets/icons/github.png";
import facebook from "../../../../assets/icons/facebook.png";
import instagram from "../../../../assets/icons/instagram.png";
import linkedin from "../../../../assets/icons/linkedin.png";
import Icon from "./Icon";

const iconsList = [github, facebook, instagram, linkedin];

const IconsList = () => {
  const iconMap = iconsList.map((icon) => {
    return <Icon iconPath={icon} key={Math.random()}/>;
  });
  return <div className={classes.iconsContainer}>{iconMap}</div>;
};

export default IconsList;
