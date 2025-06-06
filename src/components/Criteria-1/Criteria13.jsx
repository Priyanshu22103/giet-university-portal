import React from "react";
import "./Criteria13.css";
const documentLinks = [
  { name: "1.3.1.2 Supporting Document", file: "1.3.1.2-supporting.pdf" },
  { name: "1.3.2.1 Value-Added Courses/NPTEL/ISRO", file: "1.3.2.1-value-added.pdf" },
  { name: "1.3.2.2 Relevant Document", file: "1.3.2.2-relevant.pdf" },
  { name: "1.3.2.2 Relevant Document Link", file: "1.3.2.2-relevant-link.pdf" },
  { name: "1.3.2.3 Sample attendance sheet", file: "1.3.2.3-attendance.pdf" },
  { name: "ADVANCE & EMERGING TRENDS IN SIGNAL PROCESSING USING MACHINE LEARNING", file: "signal-processing.pdf" },
  { name: "AUTO CAD Civil (2020-24)", file: "autocad-civil.pdf" },
  { name: "Auto CAD-MECH (2021-25)", file: "autocad-mech.pdf" },
  { name: "Catia (2021-25)", file: "catia.pdf" },
  { name: "CNC (2020-24)", file: "cnc.pdf" },
  { name: "CNC Programmer_(2020-24)", file: "cnc-programmer.pdf" },
  { name: "CNC programming and Turning Operation-(2019-23)", file: "cnc-turning.pdf" },
  { name: "Development of Chemical Engineering Thermodynamics Laboratory for Undergraduates", file: "chemical-thermo-lab.pdf" },
  { name: "E-CAD (2019-23)", file: "ecad.pdf" },
];

const Criteria13 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-1.3</h1>
      <div className="divider">
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <br/><br/>
      <hr />
      <br/><br/>

      <ul className="criteria13-list">
        {documentLinks.map((doc, index) => (
          <li key={index}>
            <a
              href={`/documents/${doc.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Criteria13;
