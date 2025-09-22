import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("sourcegraph");

  const experiences = {
    sourcegraph: {
      company: "Sourcegraph",
      position: "Software Engineering Intern",
      period: "May 2022 - August 2022",
      description:
        "Worked on the core code search platform, improving performance and user experience for thousands of daily users.",
      achievements: [
        "Designed responsive UIs with React/TypeScript to introduce new features and enhance UX for thousands of daily users",
        "Improved code search homepage load times through performance optimization and rigorous unit and end to end tests",
        "Streamlined rendering processes to enhance overall UI efficiency under heavy loads for thousands of users",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Performance Optimization",
        "Unit Testing",
        "E2E Testing",
      ],
    },
    dkssf: {
      company: "DKSSF",
      position: "Software Engineering Intern",
      period: "June 2021 - August 2021",
      description:
        "Developed web applications and contributed to various software projects.",
      achievements: [
        "Built responsive web applications using modern technologies",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Implemented best practices for code quality and performance",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Git"],
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-l border-dark-600">
              {Object.keys(experiences).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-3 text-left font-mono text-sm transition-all duration-300 ${
                    activeTab === key
                      ? "text-accent-400 border-b-2 lg:border-b-0 lg:border-l-2 border-accent-400 bg-dark-700/50"
                      : "text-slate-400 hover:text-slate-300 hover:bg-dark-700/30"
                  }`}
                >
                  {experiences[key].company}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {Object.keys(experiences).map((key) => (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  activeTab === key
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute"
                }`}
                style={{ display: activeTab === key ? "block" : "none" }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experiences[key].position} @ {experiences[key].company}
                    </h3>
                    <p className="text-slate-400 font-mono text-sm">
                      {experiences[key].period}
                    </p>
                  </div>

                  <div className="card">
                    <p className="text-slate-300 leading-relaxed">
                      {experiences[key].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {experiences[key].achievements.map(
                        (achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-accent-400 mt-2 text-xs">
                              ▹
                            </span>
                            <span className="text-slate-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experiences[key].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-slate-300 rounded-full text-sm font-mono border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
