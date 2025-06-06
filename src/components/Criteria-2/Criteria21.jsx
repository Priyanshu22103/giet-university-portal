import React from "react";
// import "./Criteria13.css";
const documentLinks = [
  { name: "2.1.1 Approval Letters of AICTE, INC and BSc Age", file: "one.pdf" },
  { name: "2.1.2 Sample of Student Application Form", file: "second.pdf" },
  { name: "2.1.3 Student Enrollment for AY 2019 – 2023", file: "third.pdf" },
  { name: "2.1.4 Copy of Letter Issued by State Govt Reservation SCST", file: "fourth.pdf" },
];

const Criteria21 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-2.1</h1>
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
              href={`/second1_docs/${doc.file}`}
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

export default Criteria21;
