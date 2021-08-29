import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <div className={classes.hamburgerMenu}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </div>
  );
};

export default HamburgerMenu;
