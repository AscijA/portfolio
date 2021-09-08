import List from "./List/List";
import classes from "./ServiceItem.module.css";
const ServiceItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.innerContainer}>
        <img src={props.src} alt={props.alt} className={classes.icon} />
        <h1 className={classes.title}>{props.alt}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
          placeat
        </p>
        <List label="Technologies Used" />
        <List label="Tools Used" />
      </div>
    </div>
  );
};
export default ServiceItem;
