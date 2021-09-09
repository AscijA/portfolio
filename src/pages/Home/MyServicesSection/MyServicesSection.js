import classes from "./MyServicesSection.module.css";

import { useState } from "react";

import arrow from "../../../assets/icons/right-arrow.png";
import ServiceItemsContainer from "./ServiceItemsContainer/ServiceItemsContainer";

const MyServicesSection = (props) => {
  const [clickHandler, setClickHandler] = useState({ left: null, right: null });
  const onAddClickers = (pointers) => {
    setClickHandler({ left: pointers.left, right: pointers.right });
  };
  return (
    <div className={classes.innerContainer}>
      <div className={classes.blueContainer} id="myservices">
        <h1 className={classes.title}>My Services</h1>
        <p className={classes.description}>
          With the knowledge and 3 years of experience I provide clean and
          minimalistic design and implementaion.
        </p>
      </div>
      <div className={classes.outerCardContainer}>
        <div className={classes.arrowCont} onClick={clickHandler.left}>
          <img src={arrow} alt="Previous" className={classes.arrowLeft} />
        </div>
        <div className={classes.innerCardContainer}>
          <ServiceItemsContainer setClickHandler={onAddClickers} />
        </div>
        <div className={classes.arrowCont} onClick={clickHandler.right}>
          <img src={arrow} alt="Next" className={classes.arrowRight} />
        </div>
      </div>
    </div>
  );
};

export default MyServicesSection;
