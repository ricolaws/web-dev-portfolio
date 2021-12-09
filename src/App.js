import React from "react";
import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Hero from "./components/Hero";
import useWindowDimensions from "./hooks/getWindowDimensions";
import NavMenu from "./components/NavMenu";

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <InfoPanel height={height} width={width} />
    </div>
  );
}

export default App;
