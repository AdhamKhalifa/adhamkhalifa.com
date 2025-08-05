import React from "react";

const SocialLinks = () => {
  return (
    <ul className="social">
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
  );
};

export default SocialLinks;
