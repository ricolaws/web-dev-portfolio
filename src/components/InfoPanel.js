import React from "react";
import classes from "./InfoPanel.module.css";

function InfoPanel({ width, height, heading, content }) {
  return (
    <section className={classes.panel}>
      <header>
        <h2>{heading}</h2>
      </header>
      <main className={classes.main}>
        {content}
        <p>Other text explaining things here</p>
      </main>
      <footer>footer</footer>
    </section>
  );
}

export default InfoPanel;
