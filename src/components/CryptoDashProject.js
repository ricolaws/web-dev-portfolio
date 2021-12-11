import React from "react";
import lineChart from "../media/crypto_line_animation.mp4";
import donutLoop from "../media/donut_loop.mp4";
import coinList from "../media/Coin_List.png";
import spinner from "../media/Ellipse_8.svg";
import ViewProject from "./ViewProject";
import classes from "./CryptoDashProject.module.css";

function CryptoDashProject(props) {
  return (
    <section className={classes.container}>
      <div className={classes.panel1}>
        <header>
          <h2>CRYPTOCURRENCY</h2>
          <h3>PORTFOLIO</h3>
          <h3>DASHBOARD</h3>
        </header>

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
      <div className={classes.panel2}>
        <img
          alt="cryptocurrency market data"
          src={coinList}
          width={props.width - 40}
        />
      </div>
      <div className={classes.panel3}>
        <p>
          A user’s Portfolio information, including a detailed purchase history
          with dates and prices, is combined with current
          <span className={classes.accent}> MARKET DATA.</span>
        </p>
        <p>
          Useful metrics are visualized with CHART.JS in a way that is visually
          appealing and<span className={classes.accent}> ACCESSIBLE.</span>
        </p>
        <video autoPlay loop muted width={props.width - 40}>
          <source src={donutLoop} type="video/mp4"></source>
        </video>
      </div>
      <ViewProject
        demoLink={"demo"}
        codeLink={"code"}
        src={spinner}
        width={props.width}
      />
    </section>
  );
}

export default CryptoDashProject;

{
  /* <div className={classes.panel4}>
        <p className={classes.accent}>
          CLICK ➔ ➔ ➔<br />[<span>view project</span>]
        </p>

        <div>
          <img
            className={classes.spinner}
            alt=""
            src={spinner}
            width={props.width / 4}
          />
        </div>
        <footer className={classes.accent}>
          [<span>view code</span>]
        </footer>
      </div> */
}
