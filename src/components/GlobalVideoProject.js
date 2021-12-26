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
            <h2 className={classes.title}>GLOBAL VIDEO PLAYER</h2>
          </header>
          <main className={classes.video}>
            <video autoPlay playsInline loop muted width={videoWidth}>
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
            <p className={`left`}>
              720,000 hours of video are uploaded to YouTube every day. So why
              am I getting the same recommendations all the time? I wanted to
              make YouTube less predictable, so I eliminated all the usual ways
              of searching for content and went with simply location, sorting
              the results so that the most recent videos apprear first.
            </p>
            <p className={`${classes.blue} left`}>
              <img
                alt="wireframe globe"
                className={classes.floatL}
                src={wire_globe}
                width="60"
              />
              A different result needs a different UI. I imagined choosing a
              video by spinning a globe and putting a finger down. So I built a
              3D model of the earth in THREE.JS. I implemented texture mapping
              with topographic sattelite images to create differences in
              elevation, and after some time I had a beautiful interactive
              planet.
            </p>
            <p className="right">
              The tricky part turned out to be converting a point on a globe
              into coordinates you could use to with the API. Apparently folks
              in the 3D rendering world use a process called raycasting which
              casts virtual light rays from the virtual camera to its focal
              point in the 3D scene. The point of ray-sphere intersection is
              then converted from shperical coordinates into cartesian, and next
              thing you know you are watching a YouTube video uploaded ten
              minutes ago in Burundi.
            </p>
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
