import React from "react";
// import "./Criteria13.css";
const documentLinks = [
  { name: "2.2.1 Student List for AY 2023-24", file: "one.pdf" },
  { name: "2.2.2 List of Faculty for the year 2023-24", file: "two.pdf" },
  { name: "2.2.3 List of Faculty for the year 2022-23", file: "three.pdf" },
];
const Criteria21 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-2.2</h1>
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
              href={`/second2_docs/${doc.file}`}
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
