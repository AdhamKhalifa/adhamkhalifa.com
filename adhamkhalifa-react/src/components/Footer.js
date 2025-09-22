import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AdhamKhalifa",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adhamkhalifa/",
      icon: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/adhamkhalefa",
      icon: "fab fa-twitter",
    },
  ];

  return (
    <footer className="py-8 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-400 transition-colors duration-300 text-xl"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="text-center md:text-right">
            <a
              href="mailto:adham@adhamkhalifa.com"
              className="text-slate-400 hover:text-accent-400 transition-colors duration-300 font-mono"
            >
              adham@adhamkhalifa.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-700 text-center">
          <p className="text-slate-400 text-sm">
            Made with <i className="fas fa-heart text-red-400"></i> by Adham
            Khalifa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
