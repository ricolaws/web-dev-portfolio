import React from "react";
import classes from "./ViewProject.module.css";

function ViewProject({ demoLink, codeLink, src, width }) {
  return (
    <section className={classes.background}>
      <div className={classes.container}>
        <p className={classes.accent}>
          <a href={demoLink}>
            CLICK ➔ ➔ ➔<br />[<span>view project</span>]
          </a>
        </p>

        <div>
          <img className={classes.spinner} alt="" src={src} width={width / 4} />
        </div>
        <footer className={classes.accent}>
          <a href={codeLink}>
            [<span>view code</span>]
          </a>
        </footer>
      </div>
    </section>
  );
}

export default ViewProject;
