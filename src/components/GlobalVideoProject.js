import React from "react";
import GL_1 from "../media/GL_1.mp4";
import GL_2 from "../media/GL_2.mp4";
import wire_globe from "../media/wire_globe2.svg";
import comSat from "../media/com_sat.svg";
import InfoPanel from "./InfoPanel";
import classes from "./GlobalVideoProject.module.css";
import ViewProject from "./ViewProject";

function GlobalVideoProject(props) {
  const content = (
    <p>
      Lorem Lorem ipsum dolor,
      <img
        alt="wireframe globe"
        className={classes.floatR}
        src={wire_globe}
        width="60"
      />{" "}
      consectetur adipiscing elit, sed. Lorem Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed. Blah blah blah. Lorem Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed. Lorem Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed. Blah blah blah. Lorem Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed. Lorem Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed. Blah blah blah. Lorem Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, sed. Blah blah blah.
    </p>
  );

  return (
    <section className={classes.container}>
      <div className={classes.item1}>
        <h2>GLOBAL VIDEO PLAYER</h2>
      </div>
      <div className={classes.item2}>
        <video autoPlay loop muted width={props.width - 40}>
          <source src={GL_2} type="video/mp4"></source>
        </video>
      </div>
      <div className={classes.item3}>
        <p>
          This project was designed <br /> as a novel way of <br />
          interacting with the{" "}
          <span className={classes.youtubeAPI}>YouTube API</span>
        </p>
      </div>
      <div className={classes.item4}>
        <InfoPanel content={content} />
      </div>
      <ViewProject
        demoLink={"demo"}
        codeLink={"code"}
        src={comSat}
        width={props.width}
      />
    </section>
  );
}

export default GlobalVideoProject;
