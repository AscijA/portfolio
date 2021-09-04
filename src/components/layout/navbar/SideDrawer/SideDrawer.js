import NavbarItems from "../navbarItem/NavbarItem";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const appliedStyling = props.showMenu
    ? `${classes.sideDrawer} ${classes.show}`
    : `${classes.sideDrawer} ${classes.hide}`;
  return (
    <div className={appliedStyling}>
      <div className={classes.innerContainer}>
        <NavbarItems />
      </div>
    </div>
  );
};
export default SideDrawer;
