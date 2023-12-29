import React from 'react';

function Header() {
  return (
    <section id="header">
        <ul class="social">
            <li class="hover-underline-animation"><a href="https://github.com/AdhamKhalifa" target="_blank"/>
                <i class="fab fa-github"></i>
            </li>
            <li class="hover-underline-animation"><a href="https://www.linkedin.com/in/adhamkhalifa/" target="_blank"/>
                <i class="fab fa-linkedin"></i>
            </li>
            <li class="hover-underline-animation"><a href="https://twitter.com/adhamkhalefa" target="_blank"/>
                <i class="fab fa-twitter"></i>
            </li>
        </ul>
        <a class="email-right code-text" href="mailto:akhalifae@conncoll.edu">akhalifae@conncoll.edu</a>
    <div id="main">
        <div class="navbar navbar-dark navbar-expand-lg">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link code-text scroll-to-anchor hover-underline-animation" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link code-text scroll-to-anchor hover-underline-animation" href="#experiences">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link code-text scroll-to-anchor hover-underline-animation" href="#projects">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link code-text scroll-to-anchor hover-underline-animation" href="#contact">Contact</a>
                    </li>
                    <li clas="nav-item">
                        <a class="nav-link code-text hover-underline-animation" href="https://adhamkhalifa.com/AdhamKhalifa_Resume.pdf">Resume</a>
                    </li>
                </ul>
              </div>
            </div>
        </div>
        <p class="lead">Hi! I'm Adham Khalifa! I am a senior Computer Science student at <a target="_blank" href="https://www.conncoll.edu/">Connecticut College 🐫</a>.
        I enjoy coding anything that can solve problems or make life easier.
        My top interests are vision and voice-based application development.
        In high school, I founded the Egyptian chapter of <a target="_blank" href="https://hackclub.com/">Hack Club</a> to spread the culture of high school coding clubs all over Egypt.</p>
        <div class="Intro">
            <h5 class="small-heading code-text">Hi, my name is</h5>
            <h2 class="big-heading">Adham Khalifa.</h2>
            <h4 class="mid-heading typewrite" data-period="2000" data-type='[ "developer.", "problem-solver.", "student." ]'>
                <span class="wrap"></span>
            </h4>
          <button class="button is-primary is-outlined">Outlined</button>
        </div>
    <ul class="list-inline">
    <li class="list-inline-item"><a target="_blank"  href="mailto:adham@adhamkhalifa.com" class="stretched-link">Email</a></li>
    <li class="list-inline-item"><a target="_blank"  href="https://github.com/AdhamKhalifa" class="stretched-link"><img src="img/github.png" width="32px" height="32px"/></a></li>
    <li class="list-inline-item"><a target="_blank"  href="https://www.linkedin.com/in/adhamkhalifa/" class="stretched-link"><img src="img/linkedin.png" width="32px" height="32px"/></a></li>
    </ul>
    </div>
    </section>
  );
}

export default Header;
