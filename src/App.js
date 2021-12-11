import React from "react";
import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Hero from "./components/Hero";
import GlobalVideoProject from "./components/GlobalVideoProject";
import CryptoDashProject from "./components/CryptoDashProject";
import ContactSection from "./components/ContactSection";
import useWindowDimensions from "./hooks/getWindowDimensions";
import NavMenu from "./components/NavMenu";

function App() {
  const { height, width } = useWindowDimensions();
  const introText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  const introHeading = "Creative Web Design";

  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <InfoPanel
        height={height}
        width={width}
        heading={introHeading}
        content={introText}
      />
      <GlobalVideoProject width={width} />
      <CryptoDashProject width={width} />
      <ContactSection />
    </div>
  );
}

export default App;
