import React from "react";
import classes from "./InfoPanel.module.css";

function InfoPanel({ width, height }) {
  return (
    <section className={classes.panel}>
      <header>
        <h2>Info Panel</h2>
      </header>
      <main className={classes.main}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Other text explaining things here</p>
      </main>
      <footer>footer</footer>
    </section>
  );
}

export default InfoPanel;
