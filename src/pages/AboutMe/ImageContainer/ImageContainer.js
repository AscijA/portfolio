import classes from "./ImageContainer.module.css"
import profile from "../../../assets/profile.jpg"
const ImageContainer = ()=>{
  return (
    <div className={classes.innerContainer}>
      <img src={profile} alt="Profile" className={classes.img} />
    </div>
  );
}

export default ImageContainer