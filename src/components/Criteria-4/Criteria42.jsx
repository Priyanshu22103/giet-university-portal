import React from "react";
// import "./Criteria13.css";
const documentLinks = [
    { name: "4.2.1 Audited Statement 2019-2024", file: "one.pdf" },
    {name:"4.2.2 Purchase bills of books/ e-books and subscription to journals/e-journals during the last five years",file:"two.pdf"}
];
const Criteria42 = () => {
  return (
    <div className="criteria13-container">
      <br/><br/><br/><br/>
      <h1 className="criteria13-heading">CRITERIA-4.1</h1>
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

export default Criteria42;
