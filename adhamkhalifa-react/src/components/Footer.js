import React from "react";

const Footer = () => {
  return (
    <>
      <section id="social-footer">
        <ul className="social-hz">
          <li className="hover-underline-animation">
            <a
              href="https://github.com/AdhamKhalifa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="hover-underline-animation">
            <a
              href="https://www.linkedin.com/in/adhamkhalifa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="hover-underline-animation">
            <a
              href="https://twitter.com/adhamkhalefa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <a
          className="email-footer hover-underline-animation code-text"
          href="mailto:akhalifae@conncoll.edu"
        >
          akhalifae@conncoll.edu
        </a>
      </section>
      <footer className="center-div">
        <h4 className="footer-text lead">
          Made with <i className="fas fa-heart"></i> by Adham Khalifa
        </h4>
      </footer>
    </>
  );
};

export default Footer;
