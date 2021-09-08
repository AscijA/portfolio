import classes from "./SkillsList.module.css";

import SkillsListItem from "./SkillsListItem";

const skills = [
  { name: "HTML/CSS", amount: 90 },
  { name: "JavaScript", amount: 80 },
  { name: "React", amount: 75 },
  { name: "Node", amount: 75 },
];
const SkillsList = () => {
  const listItems = skills.map((skill) => {
    return (
      <SkillsListItem
        name={skill.name}
        amount={skill.amount}
        key={Math.random()}
      />
    );
  });
  return <div className={classes.list}>{listItems}</div>;
};
export default SkillsList;
