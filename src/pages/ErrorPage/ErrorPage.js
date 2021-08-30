import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <section className={classes.section}>
      <div className={classes.e404Cont}>
        <h1 className={classes.e404Text}>404</h1>
        <h1 className={classes.helperText}>Whoops... Page not found!</h1>
        <p className={classes.message}>
          It seems that you got kinda lost. Let me help you.
          <br />
          I bet you were looking for a way to contact me. <br />
          Or wanted to admire my projects. <br />
          Or you simply want to find a way home.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
