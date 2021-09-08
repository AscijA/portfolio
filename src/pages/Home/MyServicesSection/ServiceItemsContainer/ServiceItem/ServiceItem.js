import classes from "./ServiceItem.module.css";

import List from "./List/List";

const ServiceItem = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <img src={props.src} alt={props.alt} />
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
