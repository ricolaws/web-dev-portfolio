import React from "react";
import GL_1 from "../media/new_globe4.mp4";
import wire_globe from "../media/wire_globe2.svg";
import comSat from "../media/new_com_sat.svg";
import classes from "./GlobalVideoProject.module.css";
import ViewProject from "./ViewProject";

function GlobalVideoProject(props) {
  const videoWidth = props.width * 0.8;
  return (
    <section className="section-container" id={props.id}>
      <section className="panel med-gray">
        <div className="panel-content">
          <header>
            <h2>GLOBAL VIDEO PLAYER</h2>
          </header>
          <main className={classes.video}>
            <video autoPlay loop muted width={videoWidth}>
              <source src={GL_1} type="video/mp4"></source>
            </video>
          </main>
          <footer>
            <p>
              This project was designed <br /> as a novel way of <br />
              interacting with the{" "}
              <span className={classes.youtubeAPI}>YouTube API</span>
            </p>
          </footer>
        </div>
      </section>

      <section className="panel light-gray">
        <div className="panel-content">
          <main>
            <p className={classes.blue}>
              Lorem Lorem ipsum dolor,
              <img
                alt="wireframe globe"
                className={classes.floatR}
                src={wire_globe}
                width="60"
              />{" "}
              consectetur adipiscing elit, sed. Lorem Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed. Blah blah blah. Lorem
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed. Blah blah blah. Lorem Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed. Lorem Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed. Blah blah blah. Lorem Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Blah
              blah blah.
            </p>
            <p>Other text explaining things here</p>
          </main>
        </div>
      </section>
      <ViewProject
        demoLink={"https://obscure-global.web.app/"}
        codeLink={"https://github.com/ricolaws/global-video-player"}
        src={comSat}
        width={props.width}
      />
    </section>
  );
}

export default GlobalVideoProject;
