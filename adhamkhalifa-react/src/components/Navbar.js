import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link code-text scroll-to-anchor hover-underline-animation"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link code-text scroll-to-anchor hover-underline-animation"
                href="#experiences"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link code-text scroll-to-anchor hover-underline-animation"
                href="#projects"
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link code-text scroll-to-anchor hover-underline-animation"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link code-text hover-underline-animation"
                href="https://adhamkhalifa.com/AdhamKhalifa_Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
