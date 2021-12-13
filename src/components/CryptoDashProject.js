import React from "react";
import lineChart from "../media/crypto_line_animation.mp4";
import donutLoop from "../media/donut_loop.mp4";
import coinList from "../media/coin_list_white.png";
import spinner from "../media/Ellipse_8.svg";
import ViewProject from "./ViewProject";

import classes from "./CryptoDashProject.module.css";

function CryptoDashProject(props) {
  return (
    <section className="container-section">
      <div className="panel light-gray">
        <div className="panel-content">
          <heading>
            <h2>CRYPTOCURRENCY</h2>
            <h3>PORTFOLIO</h3>
            <h3>DASHBOARD</h3>
          </heading>

          <video autoPlay loop muted width={props.width - 40}>
            <source src={lineChart} type="video/mp4"></source>
          </video>

          <footer>
            <p>
              A useful tool that gathers realtime DATA on thousands of COINS so
              you can keep track of your
              <span className={classes.accent}> DIGITAL MONEY</span>
            </p>
          </footer>
        </div>
      </div>
      <div className="panel med-gray">
        <div className="panel-content">
          <div className={classes.coins}>
            <img
              alt="cryptocurrency market data"
              src={coinList}
              width={props.width - 80}
            />
          </div>
        </div>
      </div>
      <div className="panel light-gray">
        <div className="panel-content">
          <p className="left">
            A user’s Portfolio information, including a detailed purchase
            history with dates and prices, is combined with current
            <br />
            <span className={classes.accent2}> MARKET DATA.</span>
          </p>
          <p className="right">
            Useful metrics are visualized with CHART.JS in a way that is
            visually appealing and
            <span className={classes.accent2}> ACCESSIBLE.</span>
          </p>
          <video autoPlay loop muted width={props.width - 40}>
            <source src={donutLoop} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <ViewProject
        demoLink={"demo"}
        codeLink={"https://github.com/ricolaws/crypto-dashboard"}
        src={spinner}
        width={props.width}
      />
    </section>
  );
}

export default CryptoDashProject;
