import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  return (
    <div className={classes.hamburgerMenu} onClick={props.onMenuClick}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </div>
  );
};

export default HamburgerMenu;
