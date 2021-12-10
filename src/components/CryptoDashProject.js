import React from "react";
import InfoPanel from "./InfoPanel";
import classes from "./CryptoDashProject.module.css";
function CryptoDashProject() {
  return (
    <section className={classes.container}>
      <div className={classes.item1}>
        <InfoPanel />
      </div>
    </section>
  );
}

export default CryptoDashProject;
