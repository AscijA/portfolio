import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.container}>
      <h3>{props.label}</h3>
      <ul>
        <li>Some</li>
        <li>Random</li>
        <li>stuff</li>
        <li>to </li>
        <li>fill</li>
      </ul>
    </div>
  );
};
export default List;
