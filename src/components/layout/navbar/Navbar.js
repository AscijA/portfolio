import classes from "./Navbar.module.css";

import { Fragment, useEffect, useState } from "react";

import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";
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
  useEffect(() => {
    const navbarBehaviourHandler = () => {
      const navbar = document.getElementsByClassName(classes.navbar)[0];
      const navbarRect = navbar.getBoundingClientRect();
      setisOnTop(window.scrollY <= navbarRect.height);
    };
    if (!current.startsWith("/home")) {
      setNavbarClasses({
        navbar: `${classes.navbar} ${classes.navbarAnimation}`,
        navbarInnerContainer: `${classes.navbarInnerContainer} ${classes.navbarInnerContainerAnimation}`,
        myNameContainer: `${classes.myNameContainer} `,
      });
    } else {
      if (isOnTop) {
        setNavbarClasses({
          navbar: ` ${classes.navbarHomeAnimation} ${classes.navbarHome} ${classes.navbar}`,
          navbarInnerContainer: ` ${classes.navbarInnerContainerAnimation} ${classes.navbarInnerContainerHome} ${classes.navbarInnerContainer}`,
          myNameContainer: `${classes.myNameContainer} ${classes.hide}`,
        });
      } else {
        setNavbarClasses({
          navbar: `${classes.navbar} ${classes.navbarAnimation}`,
          navbarInnerContainer: `${classes.navbarInnerContainer} ${classes.navbarInnerContainerAnimation}`,
          myNameContainer: `${classes.myNameContainer} `,
        });
      }
    }
    window.addEventListener("scroll", navbarBehaviourHandler);
  }, [current, isOnTop]);
  useEffect(() => {
    if (!current.startsWith("/home")) {
      setNavbarClasses({
        navbar: classes.navbar,
        navbarInnerContainer: classes.navbarInnerContainer,
        myNameContainer: classes.myNameContainer,
      });
    } else {
      if (isOnTop) {
        setNavbarClasses({
          navbar: `${classes.navbarHome} ${classes.navbar}`,
          navbarInnerContainer: `${classes.navbarInnerContainerHome} ${classes.navbarInnerContainer}`,
          myNameContainer: `${classes.myNameContainer} ${classes.hide}`,
        });
      } else {
        setNavbarClasses({
          navbar: `${classes.navbar} `,
          navbarInnerContainer: `${classes.navbarInnerContainer}`,
          myNameContainer: `${classes.myNameContainer} `,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [navbarClasses, setNavbarClasses] = useState(() => {
    if (!current.startsWith("/home")) {
      return {
        navbar: classes.navbar,
        navbarInnerContainer: classes.navbarInnerContainer,
        myNameContainer: classes.myNameContainer,
      };
    } else {
      if (isOnTop) {
        return {
          navbar: `${classes.navbarHome} ${classes.navbar}`,
          navbarInnerContainer: `${classes.navbarInnerContainerHome} ${classes.navbarInnerContainer}`,
          myNameContainer: `${classes.myNameContainer} ${classes.hide}`,
        };
      } else {
        return {
          navbar: `${classes.navbar} `,
          navbarInnerContainer: `${classes.navbarInnerContainer}`,
          myNameContainer: `${classes.myNameContainer} `,
        };
      }
    }
  });

  /** Burger menu */
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
              <p>Maid_</p>
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
