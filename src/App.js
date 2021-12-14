import React, { useState } from "react";
import { FormspreeProvider } from "@formspree/react";
import "./App.css";
import Hero from "./components/Hero";
import GlobalVideoProject from "./components/GlobalVideoProject";
import CryptoDashProject from "./components/CryptoDashProject";
import ContactSection from "./components/ContactSection";
import ContactForm from "./components/ContactForm";
import useWindowDimensions from "./hooks/getWindowDimensions";
import NavMenu from "./components/NavMenu";
import FadeInSection from "./components/FadeInSection";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleShowForm = () => {
    setShowContactForm(!showContactForm);
  };

  console.log(width, height);
  return (
    <div className="App">
      <FormspreeProvider project="1830745082580434482">
        <NavMenu onFormSwitch={handleShowForm} width={width} />
        <Hero id="home" width={width} />
        <FadeInSection>
          <GlobalVideoProject id="projects" name="projects" width={width} />
        </FadeInSection>

        <FadeInSection>
          <CryptoDashProject width={width} />
        </FadeInSection>
        <ContactForm showForm={showContactForm} onFormSwitch={handleShowForm} />
        <FadeInSection>
          <ContactSection onFormSwitch={handleShowForm} />
        </FadeInSection>
      </FormspreeProvider>
    </div>
  );
}

export default App;
