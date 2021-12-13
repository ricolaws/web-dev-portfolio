import React, { useState } from "react";
import classes from "./NavMenu.module.css";
import { Link } from "react-scroll";

function NavMenu({ onFormSwitch, width }) {
  const [isActive, setIsActive] = useState(false);

  if (width > 700) {
    return (
      <div className={`${classes.nav} ${classes.desktop}`}>
        <div
          className={`${classes.icon} ${classes.desktop}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div>+</div>
        </div>
        <nav className={`${classes.content} ${classes.desktop}`}>
          <ul>
            <li className={`${classes.item}`}>
              <Link
                activeClass={`${classes.active}`}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                Home
              </Link>
            </li>
            <li className={`${classes.item}`}>
              <Link
                activeClass={`${classes.active}`}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                Projects
              </Link>
            </li>
            <li onClick={onFormSwitch} className={`${classes.item}`}>
              Contact
            </li>
          </ul>
        </nav>
      </div>
    );
  }
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
              <li className={`${classes.item}`}>
                <Link
                  activeClass={`${classes.active}`}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Home
                </Link>
              </li>
              <li className={`${classes.item}`}>
                <Link
                  activeClass={`${classes.active}`}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Projects
                </Link>
              </li>
              <li onClick={onFormSwitch} className={`${classes.item}`}>
                Contact
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className={`${classes.nav}`}>
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
