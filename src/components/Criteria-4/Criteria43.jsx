import React, { useState } from "react";
import "./Criteria43.css";

const syllabusData = {
  "Internet Bandwidth Details:": [
    { name: "4.3.1 Internet bandwidth Bills", file: "btech-cse.pdf" },
    { name: "4.3.1 Wi-Fi, CCTV & Server Bills", file: "btech-cse-aiml.pdf" },
    { name: "Syllabus B.Tech CSE-DS", file: "btech-cse-ds.pdf" },
  ],
  "Computer Bills:": [
    { name: "4.3.2. Computer Bills", file: "bba.pdf" },
    { name: "4.3.2 Computer Distribution Details", file: "mba.pdf" },
  ],
  "E-content Development and other Resource Development": [
    { name: "4.3.3 E-content development and other resource development", file: "bsc-agriculture.pdf" },
      { name: "4.3.3 E-content development and other resource development video", file: "msc-agronomy.pdf" }],
};

const Criteria43 = () => {
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
      <h1 className="main-heading">CRITERIA-4.3</h1>
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

export default Criteria43;
