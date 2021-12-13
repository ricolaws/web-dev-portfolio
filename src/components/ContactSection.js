import React from "react";
import classes from "./ContactSection.module.css";
import orb from "../media/warped_shape.svg";

function ContactSection({ onFormSwitch }) {
  const contactHandler = () => {
    onFormSwitch();
  };

  return (
    <section className="panel light-gray">
      <main>
        <p>
          Thanks for the visit! If you would like to know more about me you can
          look over my{" "}
          <a className={classes.link} href="https://github.com/ricolaws">
            {" "}
            Resume.
          </a>{" "}
        </p>
        <p>
          More of my work can be seen on my
          <a className={classes.link} href="https://github.com/ricolaws">
            {" "}
            Github.
          </a>
          and if you have questions please feel free to reach out.
        </p>
      </main>
      <div>
        <img alt="" className={classes.orb} src={orb} width="180" />
        <button className={classes.contact} onClick={contactHandler}>
          Contact
        </button>
      </div>
    </section>
  );
}

export default ContactSection;
