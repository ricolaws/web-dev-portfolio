import React, { useState } from "react";
import classes from "./NavMenu.module.css";

function NavMenu() {
  const [isActive, setIsActive] = useState(false);

  //   const content = `Home Projects Contact`;

  const content = (
    <ul>
      <li>Home</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );

  return (
    <React.Fragment>
      {isActive ? (
        <div className={`${classes.nav} ${classes.open}`}>
          <div
            className={`${classes.icon} ${classes.open}`}
            onClick={() => setIsActive(!isActive)}
          >
            <div>+</div>
          </div>
          <nav className={`${classes.content} ${classes.open}`}>{content}</nav>
        </div>
      ) : (
        <div className={classes.nav}>
          <div className={classes.icon} onClick={() => setIsActive(!isActive)}>
            <div>+</div>
          </div>
          <nav className={classes.content}>{content}</nav>
        </div>
      )}
    </React.Fragment>
  );
}

export default NavMenu;
