import classes from "./SkillsListItem.module.css";

const SkillsListItem = (props) => {
  return (
    <div className={classes.barContainer}>
      <div className={classes.progresBar} style={{ width: `${props.amount}%` }}>
        <p className={classes.name}>{props.name}</p>
      </div>
    </div>
  );
};

export default SkillsListItem;
