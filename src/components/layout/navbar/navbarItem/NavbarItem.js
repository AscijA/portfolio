import classes from "./NavbarItem.module.css";

import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const navItems = ["HOME", "ABOUT", "MY PROJECTS", "MY SERVICES", "CONTACT"];

const NavbarItems = () => {
  const navItemsList = navItems.map((item) => {
    const scrollToTargetAdjusted = () => {
      const element = document.getElementById(
        item.toLowerCase().replace(/\s+/g, "")
      );
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };
    if (item.startsWith("MY")) {
      const pathname = `/#${item.toLowerCase().replace(/\s+/g, "")}`;
      
      return (
        <div className={classes.navItem} key={item}>
          <NavHashLink
            smooth
            to={pathname}
            activeClassName={classes.active}
            scroll={() => {
              scrollToTargetAdjusted();
            }}
          >
            {item}
          </NavHashLink>
        </div>
      );
    } else {
      return (
        <div className={classes.navItem} key={item}>
          <NavLink to={item.toLowerCase()} activeClassName={classes.active}>
            {item}
          </NavLink>
        </div>
      );
    }
  });

  return navItemsList;
};

export default NavbarItems;
