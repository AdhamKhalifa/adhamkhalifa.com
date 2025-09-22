import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <SocialLinks />
      <EmailLink />
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
