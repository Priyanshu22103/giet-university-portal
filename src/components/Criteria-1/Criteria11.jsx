import React, { useState } from "react";
import "./Criteria11.css";

const syllabusData = {
  "School of Engineering and Technology": [
    { name: "Syllabus B.Tech CSE", file: "btech-cse.pdf" },
    { name: "Syllabus B.Tech CSE-AIML", file: "btech-cse-aiml.pdf" },
    { name: "Syllabus B.Tech CSE-DS", file: "btech-cse-ds.pdf" },
  ],
  "School of Management Studies": [
    { name: "Syllabus BBA", file: "bba.pdf" },
    { name: "Syllabus MBA", file: "mba.pdf" },
  ],
  "School of Agriculture": [
    { name: "Syllabus B.Sc. Agriculture", file: "bsc-agriculture.pdf" },
    { name: "Syllabus M.Sc. (Ag.) Agronomy", file: "msc-agronomy.pdf" },
  ],
};

const Criteria11 = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (school) => {
    setOpenSections((prev) => ({
      ...prev,
      [school]: !prev[school],
    }));
  };

  return (
    <div className="criteria11-container">
      <br/><br/><br/><br/>
      <h1 className="main-heading">CRITERIA-1.1</h1>
      <div className="divider">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <br/><br/>
      <hr />
      <br/><br/><br/>

      {Object.entries(syllabusData).map(([school, syllabi]) => (
        <div key={school} className="expandable-container">
          <div
            className="expandable-header"
            onClick={() => toggleSection(school)}
          >
            <span>{school}</span>
            <span>{openSections[school] ? "−" : "+"}</span>
          </div>

          <div
            className={`expandable-content ${
              openSections[school] ? "open" : ""
            }`}
          >
            {syllabi.map((item, index) => (
              <div key={index} className="child-box">
                <a
                  href={`/syllabus/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Criteria11;
