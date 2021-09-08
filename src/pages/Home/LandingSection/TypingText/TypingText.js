import { useEffect, useRef, useState } from "react";
import classes from "./TypingText.module.css";

const TypingText = () => {
  let firstName = "Maid";
  let lastName = "Aščić";
  const [showFirst, setShowFirst] = useState("_");
  const [showLast, setShowLast] = useState("");
  const index = useRef(0);
  const index2 = useRef(0);
  useEffect(() => {
    const tick = () => {
      setShowFirst(
        (prev) => prev.slice(0, -1) + firstName[index.current] + "_"
      );
      index.current++;
    };

    if (index.current < firstName.length) {
      let addChar = setInterval(tick, 200);
      return () => clearInterval(addChar);
    }
    if (showFirst === firstName + "_") {
      setShowFirst((prev) => {
        return prev.substring(0, prev.length - 1);
      });
    }
      if (showFirst === firstName) {
        const tick2 = () => {
          setShowLast(
            (prev) => prev.slice(0, -1) + lastName[index2.current] + "_"
          );
          index2.current++;
        };
        if (index2.current < lastName.length) {
          let addChar2 = setInterval(tick2, 200);
          return () => clearInterval(addChar2);
        }
      }
    if (showLast === lastName + "_") {
      setShowLast((prev) => {
        return prev.substring(0, prev.length - 1);
      });
    }
  }, [showFirst, showLast, firstName, lastName]);

  return (
    <div className={classes.textContainer}>
      <div>
        <p className={classes.hi}>Hi, my name is:</p>
        <p className={classes.names}>{showFirst}</p>
        <p className={classes.names}>{showLast}</p>
      </div>
    </div>
  );
};
export default TypingText;
