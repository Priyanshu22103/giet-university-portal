import React from "react";
// import "./Criteria13.css";
const documentLinks = [
  { name: "2.3.1 Report on Problem Solving Methodology", file: "one.pdf" },
  { name: "2.3.2 Report on Experiential Learning", file: "two.pdf" },
  { name: "2.3.3- Reports of Participative Learning", file: "three.pdf" },
];
const Criteria21 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-2.3</h1>
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
              href={`/second3_docs/${doc.file}`}
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
