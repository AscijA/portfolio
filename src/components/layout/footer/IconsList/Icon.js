import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <div className={classes.iconCont}>
      <img src={props.iconPath} alt="icon" />
    </div>
  );
};

export default Icon;
