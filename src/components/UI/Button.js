import classes from "./Button.module.css"

const Button = (props) =>{
  const buttonType =
    props.buttonType === "1" ? classes.blueButton : classes.whiteButton;
  
  const joinedClass = props.bigButton ? [buttonType, classes.bigButton].join(" ") : buttonType

  return (
    <div className={classes.buttonContainer}> 
      <button className={joinedClass}>{props.label}</button>
    </div>
  )
}

export default Button