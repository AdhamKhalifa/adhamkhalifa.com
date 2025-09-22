import React from "react";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "Go", "Java", "C/C++", "JavaScript", "TypeScript"],
    },
    { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Django", "Node.js", "MongoDB", "Heroku"] },
    { category: "AI/ML", items: ["YOLO", "OpenCV", "PyTorch", "Matlab"] },
    { category: "Tools", items: ["Unity", "Git", "Docker"] },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="section-subtitle">About Me</p>
              <h2 className="section-title">
                Building the Future, One Line at a Time
              </h2>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Technologies I've Worked With
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="card">
                  <h4 className="text-lg font-semibold text-accent-400 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-dark-700 text-slate-300 rounded-full text-sm font-mono border border-dark-600 hover:border-accent-500/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img
                src="/img/pic.jpg"
                alt="Adham Khalifa"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-dark-700 group-hover:border-accent-500/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
