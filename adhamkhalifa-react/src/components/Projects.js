import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="projects-heading">Some Things I've Built</h2>
        <div className="row">
          <div className="col">
            <h4>
              <a
                href="https://github.com/AdhamKhalifa/BrailleDetector"
                className="hover-underline-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Braille Detector
              </a>
            </h4>
            <p className="project-description">
              In this project, I tried to detect Braille characters on a piece
              of paper and convert it back to original text.
            </p>
          </div>
          <div className="col">
            <a
              href="https://github.com/AdhamKhalifa/BrailleDetector"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/braille/screenshot_b.png"
                className="project-thumb"
                alt="Braille Detector"
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h4>
              <a
                href="https://covid19plasma.live/"
                className="hover-underline-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                COVID-19 Plasma Live
              </a>
            </h4>
            <p className="project-description">
              I built a website with an interactive map for people who recovered
              from covid-19 and were willing to donate their plasma. It wasn't
              put into action in the US because of the health privacy rules, but
              was used internally in a hospital abroad.
            </p>
          </div>
          <div className="col">
            <a
              href="https://covid19plasma.live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/covid19/covid19plasma.png"
                className="project-thumb"
                alt="COVID-19 plasma live"
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h4>
              <a
                href="https://github.com/AdhamKhalifa/CashifyApp"
                className="hover-underline-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cashify
              </a>
            </h4>
            <p className="project-description">
              I built a machine learning-based iOS application to help the
              visually-impaired know the value of a cash bill by taking a
              picture of it. It currently supports US Dollars and Colombian
              Pesos.
            </p>
          </div>
          <div className="col">
            <a
              href="https://adhamkhalifa.com/cashify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/cashify/media/logo.png"
                className="project-thumb"
                alt="Cashify"
                style={{ backgroundColor: "#FFF" }}
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default Projects;
