import React from "react";
import classes from "./ContactSection.module.css";
import orb from "../media/warped_shape.svg";
import resume from "../media/Richard_Laws_Resume.pdf";

function ContactSection({ onFormSwitch }) {
  const contactHandler = () => {
    onFormSwitch();
  };

  return (
    <section className="panel light-gray">
      <div className="panel-content">
        <main>
          <p className="left">
            Thanks for the visit! <br />
            More of my work can be seen on my
            <a className={classes.link} href="https://github.com/ricolaws">
              {" "}
              Github.
            </a>
          </p>
          <p className="left">
            If you would like to know more about me you can look over my
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href={resume}
            >
              {" "}
              Resume.
            </a>
          </p>
          <p className="right">
            If you have questions, please feel free to reach out.
          </p>
        </main>
        <div>
          <img alt="" className={classes.orb} src={orb} width="180" />
          <button className={classes.contact} onClick={contactHandler}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
