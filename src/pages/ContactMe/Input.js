import { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {

  return (
    <Fragment>
      <div className={classes.inputItem}>
        <label>{props.label}</label>
        <input type={props.type} />
      </div>
    </Fragment>
  );
};

export default Input;
