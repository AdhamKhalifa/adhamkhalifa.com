import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="about-heading">About Me</h2>
            <p className="lead">
              Hello! My name is Adham and I am a senior Computer Science student
              at Connecticut College. I enjoy coding anything that can solve
              problems or make life easier. My top interest is{" "}
              <b>vision-based</b> application development. In high school, I
              founded the Egyptian chapter of{" "}
              <a
                target="_blank"
                href="https://hackclub.com/"
                rel="noopener noreferrer"
              >
                Hack Club
              </a>{" "}
              to spread the culture of high school coding clubs all over Egypt.
              <br />
              <br />
              During my time at Connecticut College, I have been involved in a
              number of projects, ranging from <b>web development</b> to{" "}
              <b>computer vision</b>. This summer, I am working at{" "}
              <a
                target="_blank"
                href="https://about.sourcegraph.com/"
                rel="noopener noreferrer"
              >
                Sourcegraph
              </a>{" "}
              as a Software Engineer intern. Here are a few technologies I have
              worked with:
            </p>
            <div className="row">
              <div className="col">
                <ul className="skills code-text">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="col">
                <ul className="skills code-text">
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                  <li>OpenCV</li>
                  <li>Unity</li>
                  <li>Matlab</li>
                  <li>PyTorch</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <img src="/img/pic.jpg" className="img-thumb" alt="Adham Khalifa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
