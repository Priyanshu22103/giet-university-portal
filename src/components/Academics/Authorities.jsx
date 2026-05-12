import React, { useState, useEffect } from 'react';
import './Authorities.css';

import AuthoritiesPDFCards from "../AcademicsAdditional/AuthoritiesPDFCards";
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer';

import "../AcademicsAdditional/AuthoritiesPDFCards.css";

const AuthorityCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = 'Authorities - GIET University | Odisha | Gunupur';
  }, []);

  return (
    <div className="authority-card">
      <div className="authority-header" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="authority-title">{title}</h5>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && <div className="authority-body">{children}</div>}
    </div>
  );
};

const SubCard = ({ title, link }) => (
  <div className="inner-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </div>
);

const Authorities = () => {

  const otherCommittees = [
    "Planning & Evaluation Committee",
    "Admission Committee",
    "Entrepreneurship Development Committee",
    "Academic Audit Committee",
    "Student Grievance Redressal Committee",
    "R&D Committee",
    "Examination Committee",
    "RTI Committee",
    "Internal Quality Assurance Committee",
    "Sports Committee",
    "ANTI Ragging Committee",
    "ANTI Ragging Squad Committee Ladies Hostel",
    "ANTI Ragging Squad Committee for Campus Hostel",
    "ANTI Ragging Squad Committee for Town Mess",
    "Transport Committee",
    "Training and Placement Committee",
    "Career Guidance Cell",
    "Alumni Associations",
    "Central Mess & Canteen Committee",
    "Disciplinary Committee",
    "NSS Advisory Committee",
    "Library Committee",
    "Campus Flash Committee",
    "Cultural Committee",
    "Faculty Club Committee",
    "Internal Complaints Committee",
    "NSS Committee",
    "Women Development Cell",
    "Green Campus Committee",
    "SC- ST Committee",
    "Campus Maintenance & Green Campus Committee",
    "Procedures and policies",
    "Green Mission Policy",
    "RECREITMENT AND PROMOTIONAL POLICIES-1",
    "EQUAL OPPORTUNITY CELL",
    "Socio-Economically Disadvantaged Groups Cell"
  ];

  const committeePdfLinks = {
    "Planning & Evaluation Committee": "/pdfs/Planning_and_Evaluation_Committee.pdf",
    "Admission Committee": "/pdfs/Admission_Committee.pdf",
    "Entrepreneurship Development Committee": "/pdfs/Entrepreneurship_Development_Committee.pdf",
    "Academic Audit Committee": "/pdfs/Academic_Audit_Committee.pdf",
    "Student Grievance Redressal Committee": "/pdfs/Student_Grievance_Redressal_Committee.pdf",
    "R&D Committee": "/pdfs/RD_Committee.pdf",
    "Examination Committee": "/pdfs/Examination_Committee.pdf",
    "RTI Committee": "/pdfs/RTI_Committee.pdf",
    "Internal Quality Assurance Committee": "/pdfs/Internal_Quality_Assurance_Committee.pdf",
    "Sports Committee": "/pdfs/Sports_Committee.pdf",
  };

  const center = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <>
      <Navbar />

      <div className="authorities-container">

        <h2 className="aic-title">
          AUTHORITIES
          <span className="underline"></span>
        </h2>

        {/* BOARD OF GOVERNORS */}
        <AuthorityCard title="The Board of Governors">
          <SubCard title="Board of Governors List" link="https://www.giet.edu/wp-content/uploads/2024/06/BOG-LIST.pdf" />
        </AuthorityCard>

        {/* BOARD OF MANAGEMENT */}
        <AuthorityCard title="The Board of Management">
          <SubCard title="Board of Management -1" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-1.pdf" />
        </AuthorityCard>

        {/* ACADEMIC COUNCIL */}
        <AuthorityCard title="Academic Council">
          <SubCard title="Academic Council -1" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-1.pdf" />
        </AuthorityCard>

        {/* BOARD OF STUDIES */}
        <AuthorityCard title="The Board of Studies">
          <p>A: There shall be a Board of Studies...</p>
        </AuthorityCard>

        {/* FINANCE */}
        <AuthorityCard title="Finance Committee">
          <table>
            <tbody>
              <tr>
                <td><strong>A</strong></td>
                <td>Vice-Chancellor</td>
                <td>Dr. A. V. N. L. Sharma</td>
              </tr>
            </tbody>
          </table>
        </AuthorityCard>

        <h1 style={center}>Other Committees</h1>

        <AuthoritiesPDFCards
          committees={otherCommittees}
          links={committeePdfLinks}
        />

      </div>

      <Footer />
    </>
  );
};

export default Authorities;