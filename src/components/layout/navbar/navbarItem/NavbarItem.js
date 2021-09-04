import classes from "./NavbarItem.module.css";
import { NavLink } from "react-router-dom";
const navItems = ["HOME", "ABOUT", "MY PROJECTS", "MY SERVICES", "CONTACT"];

const NavbarItems = () => {
  
  const navItemsList = navItems.map((item) => {
    // const link = `/home/#${item}`;
    return (
      <div className={classes.navItem} key={item}>
        <NavLink to={item.toLowerCase()} activeClassName={classes.active}>
          {item}
        </NavLink>
      </div>
    );
  });

  return navItemsList;
};

export default NavbarItems;
