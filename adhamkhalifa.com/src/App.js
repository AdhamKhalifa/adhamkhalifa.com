import './App.css';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header>
      <ul class="social">
        <li class="hover-underline-animation">
          <a href="https://github.com/AdhamKhalifa">
          <FaGithub />
          </a>
        </li>
        <li class="hover-underline-animation">
          <a href="https://www.linkedin.com/in/adhamkhalifa/">
          <FaLinkedin />
          </a>
        </li>
        <li class="hover-underline-animation">
          <a href="https://twitter.com/adhamkhalefa">
          <FaTwitter />
          </a>
        </li>
    </ul>
      </header>
    </div>
  );
}

export default App;
