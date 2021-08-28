import classes from "./NavbarItem.module.css";

  const navItems = [
    "HOME",
    "ABOUT",
    "MY PROJECTS",
    "MY SERVICES",
    "CONTACT ME",
  ];

const NavbarItems = () => {


  const navItemsList = navItems.map((item) => {
    return(<div className={classes.navItem} key={Math.random()}>
      <p>{item}</p>
    </div>);
  });

  return (
    <div className={classes.navigation}>
      {navItemsList}
    </div>
  );
};

export default NavbarItems;
