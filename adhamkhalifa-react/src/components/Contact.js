import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container center-div">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-description lead">
          If you have any questions or comments, feel free to contact me.
        </p>
        <a
          className="email-link code-text"
          href="mailto:akhalifae@conncoll.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
