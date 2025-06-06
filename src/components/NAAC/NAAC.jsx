import React, { useState,useEffect } from "react";
import "./NAAC.css";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
const sections = [
  {
    title: "CRITERIA 1. CURRICULAR ASPECTS",
    children: [
      "Curriculum Design and Development",
      "Academic Flexibility",
      "Feedback System",
    ],
  },
  {
    title: "CRITERIA 2. TEACHING LEARNING AND EVALUATION",
    children: [
      "Student Enrolment and Profile",
      "Catering to Student Diversity",
      "Teaching-Learning Process",
    ],
  },
  {
    title: "CRITERIA 3. RESEARCH, INNOVATION AND EXTENSION",
    children: [
      "Promotion of Research and Facilities",
      "Resource Mobilization for Research",
      "Innovation Ecosystem",
    ],
  },
  {
    title: "CRITERIA 4. INFRASTRUCTURE AND LEARNING RESOURCES",
    children: [
      "Physical Facilities",
      "Library as a Learning Resource",
      "IT Infrastructure",
    ],
  },
  {
    title: "CRITERIA 5. STUDENT SUPPORT AND PROGRESSION",
    children: [
      "Student Support",
      "Student Progression",
      "Student Participation and Activities",
    ],
  },
  {
    title: "CRITERIA 6. GOVERNANCE, LEADERSHIP AND MANAGEMENT",
    children: [
      "Institutional Vision and Leadership",
      "Strategy Development and Deployment",
      "Faculty Empowerment Strategies",
    ],
  },
  {
    title: "CRITERIA 7. INSTITUTIONAL VALUES AND BEST PRACTICES",
    children: [
      "Institutional Values and Social Responsibilities",
      "Best Practices Additional Information",
      "Institutional Distinctiveness",
    ],
  },
];

const NAAC = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
          document.title='NAAC - GIET University | Odisha | Gunupur'
    },[])
  // Counter for unique criteria-child paths

  return (
    <>
    <div>
      <Navbar/>
    </div>
      <h1 className="naac-title" style={{color:'black',marginLeft:'765px'}}>NAAC</h1>
      <div className="divider" style={{marginLeft:'790px'}}>
        <div className="blue-bar" />
        <div className="orange-bar" />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <div className="naac-container" >
        {sections.map((section, index) => (
          <div
            className={`expandable-container ${
              openIndex === index ? "open" : ""
            }`} 
            key={index}
          >
            <div
              className="expandable-header" style={{color:'black',backgroundColor:'#ffffe0',borderRadius:'10px',border:'1px solid black'}}
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            <div className="expandable-content">
              {section.children.map((child, childIdx) => {
                const path = `/criteria-${index + 1}.${childIdx + 1}`;
                return (
                  <div className="child-row" key={childIdx}>
                    <div className="child-number">
                      {index + 1}.{childIdx + 1}
                    </div>
                    <Link to={path} className="child-box">
                      {child}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};
export default NAAC;
