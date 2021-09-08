import classes from "./Input.module.css";

import { Fragment } from "react";

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
