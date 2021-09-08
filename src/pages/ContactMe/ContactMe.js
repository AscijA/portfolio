import ContactForm from "./ContactForm";
import classes from "./ContactMe.module.css";

const ContactMe = () => {
  return(
    <section className={classes.section}>
      <div >
        <ContactForm/>
      </div>
    </section>
  )

};

export default ContactMe
