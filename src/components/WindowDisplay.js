import React from "react";
import classes from "./WindowDisplay.module.css";
import TypeWriterEffect from "react-typewriter-effect";

function WindowDisplay() {
  return (
    <div className={classes.window}>
      <div className={classes.top}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
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
    </div>
  );
}

export default WindowDisplay;
