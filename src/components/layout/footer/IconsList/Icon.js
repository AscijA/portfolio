import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <div className={classes.iconCont}>
      <img src={props.iconPath} alt="icon" className={classes.iconItem} />
    </div>
  );
};

export default Icon;
