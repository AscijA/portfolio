import classes from "./ContactForm.module.css";

import Button from "../../components/UI/Button/Button"
import Input from "./Input";

const ContactForm = () => {
  const onSendHandler = (event)=>{
    event.preventDefault()
  }
  return (
    <form className={classes.formContainer} onSubmit={onSendHandler}>
      <h1>Contact Me</h1>
      <div className={classes.inputContainer}>
        <Input label="Name" type="text" />
        <Input label="E-mail" type="email" />
      </div>
      <div className={classes.message}>
        <label>Your message</label>
        <input type="text" />
      </div>
      <div className={classes.buttonCont}>
        <Button label="SEND" buttonType="1" bigButton={true} />
      </div>
    </form>
  );
};

export default ContactForm;
