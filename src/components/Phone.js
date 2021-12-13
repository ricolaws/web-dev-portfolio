import React from "react";
import classes from "./Phone.module.css";
import TypeWriterEffect from "react-typewriter-effect";

function Phone() {
  return (
    <div className={classes.screen}>
      <div className={classes.top}>
        <div className={classes.details}></div>
      </div>
      <div className={classes.message}>
        <TypeWriterEffect
          startDelay={800}
          cursorColor="black"
          text="Hi,"
          typeSpeed={80}
          hideCursorAfterText={true}
        />
        <TypeWriterEffect
          startDelay={1800}
          cursorColor="black"
          text="it's me, Richard."
          typeSpeed={55}
          hideCursorAfterText={true}
        />
      </div>
      <div className={classes.bottom}>
        <div className={classes.home}></div>
      </div>
    </div>
  );
}

export default Phone;
