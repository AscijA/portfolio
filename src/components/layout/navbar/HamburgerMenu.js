import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  return (
    <div className={classes.hamburgerMenu} onClick={props.onMenuClick}>
      <span ></span>
      <span ></span>
      <span ></span>
    </div>
  );
};

export default HamburgerMenu;
