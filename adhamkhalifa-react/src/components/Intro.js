import React, { useState, useEffect } from "react";

const Intro = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["developer.", "problem-solver.", "researcher."];
    const currentWord = words[currentIndex];

    if (isDeleting) {
      // Deleting effect
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Typing effect
      if (currentText === currentWord) {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="section-subtitle animate-fade-in">Hi, my name is</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in-up">
              Adham.
            </h1>
          </div>

          {/* Typewriter */}
          <div className="h-20 md:h-24 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl text-slate-300 font-medium">
              I am a{" "}
              <span className="text-accent-400 font-bold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed animate-fade-in-up delay-300">
              I'm a software engineer who delivers innovative solutions that
              scale. With expertise in full-stack development, LLMs, and
              computer vision, I build products that solve complex problems and
              drive business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up delay-500">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
