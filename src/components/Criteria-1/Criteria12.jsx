import React, { useState } from "react";
import "./Criteria12.css";

const bosData = [
  { name: "BOS SOS (BSH)", file: "sos-bsh.pdf" },
  { name: "BOS BCA & MCA", file: "bca-mca.pdf" },
  { name: "BOS B.Tech Biotechnology", file: "biotech.pdf" },
  { name: "BOS Chemical Engineering", file: "chemical.pdf" },
  { name: "BOS Civil Engineering", file: "civil.pdf" },
  { name: "BOS CSE & Engineering", file: "cse.pdf" },
  { name: "BOS ECE", file: "ece.pdf" },
  { name: "BOS Electrical Engineering", file: "eee.pdf" }
];

const Criteria12 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="criteria12-container">
      <br/><br/><br/><br/>
      <h1 className="main-heading">CRITERIA-1.2</h1>
      <div className="divider">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <br/><br/>
      <hr />
      <br/><br/>

      <div className="expandable-container">
        <div className="expandable-header" onClick={() => setIsOpen(!isOpen)}>
          <span>Board of Studies</span>
          <span>{isOpen ? "−" : "+"}</span>
        </div>

        <div className={`expandable-content ${isOpen ? "open" : ""}`}>
          {bosData.map((item, index) => (
            <div key={index} className="child-box">
              <a
                href={`/pdfs/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Criteria12;
