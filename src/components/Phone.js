import React from "react";
import classes from "./Phone.module.css";

function Phone() {
  return (
    <div className={classes.screen}>
      <div className={classes.top}>
        <div className={classes.details}></div>
      </div>
      <h1 className={classes.msg}>Hi, it's me, Richard.</h1>
      <div className={classes.bottom}>
        <div className={classes.home}></div>
      </div>
    </div>
  );
}

export default Phone;
