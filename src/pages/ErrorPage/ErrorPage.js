import classes from "./ErrorPage.module.css";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className={classes.section}>
      <div>
        <h1 className={classes.e404Text}>404</h1>
        <h1 className={classes.helperText}>Whoops... Page not found!</h1>
        <p className={classes.message}>
          It seems that you got kinda lost. Let me help you.
          <br />I bet you were looking for a way to{" "}
          <Link to="/contact"> contact me.</Link> <br />
          Or you simply want to find a way <Link to="/home">home.</Link>
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
