import classes from "./ContactMe.module.css";

import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <section className={classes.section}>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;
