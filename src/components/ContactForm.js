import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import classes from "./ContactForm.module.css";

function ContactForm({ showForm, onFormSwitch }) {
  const [state, handleSubmit] = useForm("contactMe");
  let content;

  if (state.succeeded) {
    content = (
      <div className={`${classes.overlay} ${classes.vanish}`}>
        <p>Message sent! Thanks!</p>
      </div>
    );
    return content;
  }

  if (!showForm) {
    content = <div className={classes.overlay}></div>;
  } else {
    content = (
      <div className={`${classes.overlay} ${classes.open}`}>
        <div className={classes.container}>
          <form onSubmit={handleSubmit}>
            <div className={classes.field}>
              <label htmlFor="name">Name</label>
              <input id="name" type="name" name="name" />
            </div>
            <div className={classes.field}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={classes.message}>
              <label htmlFor="message">Leave me a Message</label>
              <textarea id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className={classes.actions}>
              <button
                className={classes.yesbtn}
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
              <button
                type="button"
                className={classes.nobtn}
                onClick={onFormSwitch}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default ContactForm;
