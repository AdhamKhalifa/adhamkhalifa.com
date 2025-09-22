import React from "react";

const SocialLinks = () => {
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
    <div className="fixed left-8 bottom-0 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent-400 transition-all duration-300 text-xl hover:scale-110"
            aria-label={social.name}
          >
            <i className={social.icon}></i>
          </a>
        ))}
        <div className="w-px h-24 bg-slate-600"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
