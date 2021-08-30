import classes from "./Skills.module.css"
import SkillsList from "./SkillsList/SkillsList"

const Skills = () => {
  return (
    <div className={classes.skillsContainer}>
      <h1 className={classes.mySkills}>My Skills</h1>
      <SkillsList/>
    </div>
  )
}

export default Skills