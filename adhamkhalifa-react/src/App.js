import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import EmailLink from "./components/EmailLink";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
    });

    // Smooth scroll for navigation links
    const handleSmoothScroll = (e) => {
      if (e.target.classList.contains("scroll-to-anchor")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.addEventListener("click", handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="App">
      <SocialLinks />
      <EmailLink />
      <div id="main">
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
