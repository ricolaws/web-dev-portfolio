import React from "react";
import Phone from "./Phone";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.section}>
      <Phone />
    </section>
  );
}

export default Hero;
