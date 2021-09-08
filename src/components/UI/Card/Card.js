import classes from "./Card.module.css";

const Card = (props) => {

  const styling = props.type === "column" ? `${classes.outerContainer} ${classes.column}` : `${classes.outerContainer}`

  return (
    <div className={styling}>
      {props.children}
    </div>
  );
};
export default Card;
