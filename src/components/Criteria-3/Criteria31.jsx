import React from "react";
// import "./Criteria13.css";
const documentLinks = [
  { name: "SEED MONEY-2019-2020", file: "one.pdf" },
  { name: "SEED MONEY-2020-2021", file: "two.pdf" },
  { name: "SEED MONEY-2021-2022", file: "three.pdf" },
];
const Criteria31 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-3.1</h1>
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

export default Criteria31;
