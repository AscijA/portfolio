import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import classes from "./Navbar.module.css";
import NavbarItems from "./navbarItem/NavbarItem";
import SideDrawer from "./SideDrawer/SideDrawer";

const Navbar = () => {
  /** Handles the navbar on homepage and navbar styling based on the current page*/
  const history = useHistory();
  const [current, setCurrent] = useState(history.location.pathname);
  useEffect(() => {
    return history.listen((location) => {
      setCurrent(location.pathname);
      setShowBurger(false);
    });
  }, [history]);

  const [isOnTop, setisOnTop] = useState(window.scrollY <= 80);
  const navbarClasses = !(isOnTop && current.startsWith("/home"))
    ? {
        navbar: classes.navbar,
        navbarInnerContainer: classes.navbarInnerContainer,
        myNameContainer: classes.myNameContainer,
      }
    : {
        navbar: `${classes.navbar} ${classes.navbarHome}`,
        navbarInnerContainer: `${classes.navbarInnerContainer} ${classes.navbarInnerContainerHome}`,
        myNameContainer: `${classes.myNameContainer} ${classes.hide}`,
      };

  const navbarBehaviourHandler = () => {
    const navbar = document.getElementsByClassName(classes.navbar)[0];
    const navbarRect = navbar.getBoundingClientRect();
    setisOnTop(window.scrollY <= navbarRect.height);
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarBehaviourHandler);
  }, [isOnTop]);

  const [showBurger, setShowBurger] = useState(false);
  const onHamburgerMenuClick = () => {
    setShowBurger((prevState) => {
      return !prevState;
    });
  };

  return (
    <Fragment>
      <div className={navbarClasses.navbar}>
        <div className={navbarClasses.navbarInnerContainer}>
          <div className={navbarClasses.myNameContainer}>
            <NavLink to="/home" activeClassName={classes.myName}>
              <p className={classes.myName}>Maid_</p>
            </NavLink>
          </div>
          <div className={classes.navbarItems}>
            <NavbarItems />
          </div>

          <HamburgerMenu onMenuClick={onHamburgerMenuClick} />
        </div>
      </div>
      <SideDrawer showMenu={showBurger} />
    </Fragment>
  );
};

export default Navbar;
