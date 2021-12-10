import React from "react";
import classes from "./ContactSection.module.css";

function ContactSection() {
  return (
    <section className={classes.container}>
      <div>tools</div>
      <div>
        More of my work can be seen on my{" "}
        <a href="https://github.com/ricolaws">Github.</a>
        Thanks for the visit and if you have questions please feel free to reach
        out.
      </div>
      <div>
        <button>CONTACT</button>
      </div>
    </section>
  );
}

export default ContactSection;
