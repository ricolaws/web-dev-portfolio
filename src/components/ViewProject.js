import React from "react";
import classes from "./ViewProject.module.css";

function ViewProject({ demoLink, codeLink, src, width }) {
  return (
    <section className={classes.background}>
      <div className={classes.container}>
        <p className={classes.accent}>
          CLICK ➔ ➔ ➔<br />[<span>view project</span>]
        </p>

        <div>
          <img className={classes.spinner} alt="" src={src} width={width / 4} />
        </div>
        <footer className={classes.accent}>
          [<span>view code</span>]
        </footer>
      </div>
    </section>
  );
}

export default ViewProject;
