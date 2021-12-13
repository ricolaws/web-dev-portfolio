import React, { useState } from "react";
import classes from "./NavMenu.module.css";
import { Link } from "react-scroll";

function NavMenu({ onFormSwitch }) {
  const [isActive, setIsActive] = useState(false);

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
          <nav className={`${classes.content} ${classes.open}`}>
            <ul>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Projects
                </Link>
              </li>
              <li onClick={onFormSwitch} className="nav-item">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className={classes.nav}>
          <div className={classes.icon} onClick={() => setIsActive(!isActive)}>
            <div>+</div>
          </div>
          <nav className={classes.content}></nav>
        </div>
      )}
    </React.Fragment>
  );
}

export default NavMenu;
