import HamburgerMenu from "./HamburgerMenu";
import classes from "./Navbar.module.css";
import NavbarItems from "./navbarItem/NavbarItem";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarInnerContainer}>
        <div className={classes.myNameContainer}>
          <p className={classes.myName}>Maid_</p>
        </div>
        <div className={classes.navbarItems}>
          <NavbarItems />
        </div>

        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
