import React from "react";
import Phone from "./Phone";
import classes from "./Hero.module.css";

function Hero(props) {
  return (
    <section className={classes.section} id={props.id}>
      <Phone />
      <section className="panel light-gray">
        <header>
          <h2 className={classes.heroSubHeading}>Web Design Stuff</h2>
        </header>
        <main className={classes.main}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <p>Other text explaining things here</p>
        </main>
        <footer>footer</footer>
      </section>
    </section>
  );
}

export default Hero;
