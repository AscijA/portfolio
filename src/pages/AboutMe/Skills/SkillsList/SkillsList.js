import classes from "./SkillsList.module.css";
import SkillsListItem from "./SkillsListItem";
const skills = [
  "HTML/CSS",
  "JavaScript", 
  "React", 
  "Node", 
];
const SkillsList = () => {
  const listItems = skills.map((skill) => {
    return <SkillsListItem name={skill}  key={Math.random()}/>;
  });
  return <div className={classes.list}>{listItems}</div>;
};
export default SkillsList;
