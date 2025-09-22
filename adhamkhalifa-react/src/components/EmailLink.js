import React from "react";

const EmailLink = () => {
  return (
    <div className="fixed right-8 bottom-0 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        <a
          href="mailto:adham@adhamkhalifa.com"
          className="text-slate-400 hover:text-accent-400 transition-all duration-300 font-mono text-sm writing-mode-vertical hover:scale-110"
          style={{ writingMode: "vertical-rl" }}
        >
          adham@adhamkhalifa.com
        </a>
        <div className="w-px h-24 bg-slate-600"></div>
      </div>
    </div>
  );
};

export default EmailLink;
