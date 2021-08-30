import ContactForm from "./ContactForm";
import classes from "./ContactMe.module.css";

const ContactMe = () => {
  return(
    <section className={classes.section}>
      <div className={classes.contactFormContainer}>
        <ContactForm/>
      </div>
    </section>
  )

};

export default ContactMe
