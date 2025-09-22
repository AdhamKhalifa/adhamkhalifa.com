import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <p className="section-subtitle">Contact</p>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <a
            href="mailto:adham@adhamkhalifa.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Say Hello</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
