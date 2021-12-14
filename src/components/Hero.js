import React from "react";
import Phone from "./Phone";
import WindowDisplay from "./WindowDisplay";
import classes from "./Hero.module.css";

function Hero({ id, width }) {
  return (
    <section className="section-container hero" id={id}>
      {width < 700 ? <Phone /> : <WindowDisplay />}

      <section className="panel light-gray">
        <div className="panel-content">
          <header>
            <h2 className={classes.heroSubHeading}>Welcome to my portfolio.</h2>
          </header>
          <main className={classes.main}>
            <p>
              I’m a software developer with a background in music. Previously I
              built audio software in the Max/MSP programming environment, these
              days I like to make interactive experiences and creative
              interfaces in JavaScript and React.
            </p>
          </main>
        </div>
      </section>
    </section>
  );
}

export default Hero;
