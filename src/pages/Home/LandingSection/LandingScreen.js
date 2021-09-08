import classes from "./LandingSection.module.css";

import TypingText from "./TypingText/TypingText";

const LandingSection = () => {
  return (
    <div className={classes.codeImage}>
      <div>
        <TypingText />
      </div>
    </div>
  );
};

export default LandingSection;
