import React from "react";
import GL_1 from "../media/new_globe4.mp4";
import wire_globe from "../media/wire_globe2.svg";
import comSat from "../media/new_com_sat.svg";
import classes from "./GlobalVideoProject.module.css";
import ViewProject from "./ViewProject";
import FadeInSection from "./FadeInSection";

function GlobalVideoProject(props) {
  return (
    <section className={classes.container} id={props.id}>
      <FadeInSection>
        <section className="panel med-gray">
          <header>
            <h2>GLOBAL VIDEO PLAYER</h2>
          </header>
          <main className={classes.video}>
            <video autoPlay loop muted width={props.width * 0.8}>
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
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="panel light-gray">
          <main>
            <p>
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
        </section>
      </FadeInSection>

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
