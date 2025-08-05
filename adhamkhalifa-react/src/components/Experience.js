import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("yale");

  const experiences = {
    yale: {
      title: "Software Engineer",
      company: "Yale Center for Research Computing",
      companyUrl: "https://research.computing.yale.edu/",
      date: "June 2021-Dec 2021",
      points: [
        "Developed and designed an app to help Yale faculty access SSH keys using Django and Bootstrap",
        "Designed an interface for an administrator use to track all keys being uploaded and their information.",
        "Received an extension offer for the fall semester to be their first-ever intern to work for 6 months.",
      ],
    },
    research: {
      title: "Research Intern",
      company: "Connecticut College",
      companyUrl: null,
      date: "June 2020-Aug 2020",
      points: [
        "Built a program to assign classes to classrooms during the pandemic using Python and OpenPyXL.",
        "Implemented a Greedy algorithm to assign courses to rooms according to each's maximum capacity.",
        "Designed an efficient user-friendly UI using Django and Bootstrap to be used by the registrar.",
        "Saved the registrar an average of 4 weeks of work to finish schedules for 2,000+ students manually.",
      ],
    },
    beau: {
      title: "Software Engineer",
      company: "Beau Biden Foundation",
      companyUrl: null,
      date: "Jan 2020-May 2020",
      points: [
        "Built a new website for the Beau Biden Foundation targeting 26,000+ users as a part of a course.",
        "Added more admin settings and blogpost options like animation files using Django and Bootstrap.",
        "Implemented support for visually impaired individuals with changeable modes of CSS colors.",
      ],
    },
  };

  const currentExperience = experiences[activeTab];

  return (
    <section id="experiences">
      <div className="container">
        <h2 className="experience-heading">Where I've Worked</h2>
        <div className="row">
          <div className="col">
            <div className="list-group" role="tablist">
              <button
                className={`list-group-item list-group-item-action bg-transparent ${
                  activeTab === "yale" ? "active" : ""
                }`}
                onClick={() => setActiveTab("yale")}
                type="button"
              >
                Yale Center for Research Computing
              </button>
              <button
                className={`list-group-item list-group-item-action bg-transparent ${
                  activeTab === "research" ? "active" : ""
                }`}
                onClick={() => setActiveTab("research")}
                type="button"
              >
                Summer Research
              </button>
              <button
                className={`list-group-item list-group-item-action bg-transparent ${
                  activeTab === "beau" ? "active" : ""
                }`}
                onClick={() => setActiveTab("beau")}
                type="button"
              >
                Beau Biden Foundation
              </button>
            </div>
          </div>
          <div className="col">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <h4>
                  <b>{currentExperience.title}</b> <b className="at">@</b>{" "}
                  <b>
                    {currentExperience.companyUrl ? (
                      <a
                        href={currentExperience.companyUrl}
                        className="company hover-underline-animation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {currentExperience.company}
                      </a>
                    ) : (
                      <span className="company hover-underline-animation">
                        {currentExperience.company}
                      </span>
                    )}
                  </b>
                </h4>
                <h6 className="work-date code-text">
                  {currentExperience.date}
                </h6>
                <ul className="work-points">
                  {currentExperience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
