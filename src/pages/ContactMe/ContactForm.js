import classes from "./ContactForm.module.css";
import Button from "../../components/UI/Button/Button"
import Input from "./Input";
const ContactForm = () => {
  return (
    <form className={classes.formContainer}>
        <h1 className={classes.title}>Contact Me</h1>
      <div className={classes.inputContainer}>
        <Input label="Name" type="text"/>
        <Input label="E-mail" type="email"/>
      </div>
      <div className={classes.message}>
        <label>Your message</label>
        <input type="text" className={classes.messageInput} />
      </div>
      <div className={classes.buttonCont}>
        <Button label="SEND" buttonType="1" bigButton={true} />
      </div>
    </form>
  );
};

export default ContactForm;
