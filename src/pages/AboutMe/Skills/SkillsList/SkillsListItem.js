import classes from "./SkillsListItem.module.css";

const SkillsListItem = (props) => {
  return (
    <div className={classes.barContainer}>
      <div className={classes.progresBar} style={{ width: `${props.amount}%` }}>
        <p className={classes.name}>{props.name}</p>
      </div>
      <p className={classes.amount}>{props.amount}%</p>
    </div>
  );
};

export default SkillsListItem;
