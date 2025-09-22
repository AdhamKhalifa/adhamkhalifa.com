import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AIwell",
      description:
        "An AI-powered Health Management App built with Swift, designed to help users manage their health through intelligent features.",
      image: "/img/Alwell/image.png",
      link: "https://github.com/AdhamKhalifa/AIwell",
      technologies: ["Swift", "AI", "Health Tech"],
    },
    {
      title: "Musical Instruments Detection",
      description:
        "Computer vision project using YOLOv5 and PyTorch to detect musical instruments in video, helping understand music performances.",
      image: "/img/musical-instruments/image.png",
      link: "https://github.com/AdhamKhalifa/Musical_instruments_detection",
      technologies: ["Python", "YOLOv5", "PyTorch", "Computer Vision"],
    },
    {
      title: "Speech Sentiment Analysis",
      description:
        "Application that predicts sentiment from speech audio, demonstrating natural language processing capabilities.",
      image: "/img/speech-sentiment/image.png",
      link: "https://github.com/AdhamKhalifa/Speech-Sentiment-Analysis",
      technologies: ["Python", "NLP", "Audio Processing"],
    },
    {
      title: "Braille Detector",
      description:
        "In this project, I tried to detect Braille characters on a piece of paper and convert it back to original text.",
      image: "/img/braille/screenshot_b.png",
      link: "https://github.com/AdhamKhalifa/BrailleDetector",
      technologies: ["Python", "OpenCV", "Computer Vision"],
    },
    {
      title: "COVID-19 Plasma Live",
      description:
        "I built a website with an interactive map for people who recovered from covid-19 and were willing to donate their plasma. It wasn't put into action in the US because of the health privacy rules, but was used internally in a hospital abroad.",
      image: "/img/covid19/covid19plasma.png",
      link: "https://covid19plasma.live/",
      technologies: ["Django", "JavaScript", "Maps API"],
    },
    {
      title: "Cashify",
      description:
        "I built a machine learning-based iOS application to help the visually-impaired know the value of a cash bill by taking a picture of it. It currently supports US Dollars and Colombian Pesos.",
      image: "/cashify/media/logo.png",
      link: "https://github.com/AdhamKhalifa/CashifyApp",
      technologies: ["iOS", "Machine Learning", "Computer Vision"],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Projects</p>
          <h2 className="section-title">Some Things I've Built</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  <p className="text-sm text-accent-400 font-mono mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-400 transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>

                <div className="card">
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 text-slate-300 rounded-full text-sm font-mono border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:text-accent-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-64 md:h-80 rounded-2xl border-2 border-dark-700 group-hover:border-accent-500/50 transition-all duration-300 ${
                        project.title === "AIwell"
                          ? "object-cover object-center scale-75"
                          : project.title === "Cashify"
                          ? "object-contain"
                          : project.title === "Musical Instruments Detection"
                          ? "object-cover object-center"
                          : project.title === "Speech Sentiment Analysis"
                          ? "object-contain object-center"
                          : "object-cover"
                      }`}
                      style={
                        project.title === "Cashify"
                          ? { backgroundColor: "#FFF" }
                          : project.title === "AIwell"
                          ? { backgroundColor: "#FFF" }
                          : project.title === "Speech Sentiment Analysis"
                          ? { backgroundColor: "#FFF" }
                          : {}
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
