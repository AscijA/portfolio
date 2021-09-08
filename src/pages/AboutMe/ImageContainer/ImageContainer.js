import classes from "./ImageContainer.module.css"

import profile from "../../../assets/profile.jpg"

const ImageContainer = ()=>{
  return (
    <div className={classes.innerContainer}>
      <img src={profile} alt="Profile"/>
    </div>
  );
}

export default ImageContainer