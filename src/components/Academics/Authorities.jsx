import React, { useState,useEffect } from 'react';
import './Authorities.css';
// import AuthoritiesPDFCards from "../components/AuthoritiesPDFCards";
import AuthoritiesPDFCards from "../AcademicsAdditional/AuthoritiesPDFCards"
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
// import "../components/AuthoritiesPDFCards.css";
import "../AcademicsAdditional/AuthoritiesPDFCards.css"


const AuthorityCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
         document.title = 'Authorities - GIET University | Odisha | Gunupur'
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
    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
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

  // Map committee titles to their pdf links - Replace these URLs with actual ones
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
    "ANTI Ragging Committee": "/pdfs/Anti_Ragging_Committee.pdf",
    "ANTI Ragging Squad Committee Ladies Hostel": "/pdfs/Anti_Ragging_Squad_Ladies_Hostel.pdf",
    "ANTI Ragging Squad Committee for Campus Hostel": "/pdfs/Anti_Ragging_Squad_Campus_Hostel.pdf",
    "ANTI Ragging Squad Committee for Town Mess": "/pdfs/Anti_Ragging_Squad_Town_Mess.pdf",
    "Transport Committee": "/pdfs/Transport_Committee.pdf",
    "Training and Placement Committee": "/pdfs/Training_and_Placement_Committee.pdf",
    "Career Guidance Cell": "/pdfs/Career_Guidance_Cell.pdf",
    "Alumni Associations": "/pdfs/Alumni_Associations.pdf",
    "Central Mess & Canteen Committee": "/pdfs/Central_Mess_and_Canteen_Committee.pdf",
    "Disciplinary Committee": "/pdfs/Disciplinary_Committee.pdf",
    "NSS Advisory Committee": "/pdfs/NSS_Advisory_Committee.pdf",
    "Library Committee": "/pdfs/Library_Committee.pdf",
    "Campus Flash Committee": "/pdfs/Campus_Flash_Committee.pdf",
    "Cultural Committee": "/pdfs/Cultural_Committee.pdf",
    "Faculty Club Committee": "/pdfs/Faculty_Club_Committee.pdf",
    "Internal Complaints Committee": "/pdfs/Internal_Complaints_Committee.pdf",
    "NSS Committee": "/pdfs/NSS_Committee.pdf",
    "Women Development Cell": "/pdfs/Women_Development_Cell.pdf",
    "Green Campus Committee": "/pdfs/Green_Campus_Committee.pdf",
    "SC- ST Committee": "/pdfs/SC_ST_Committee.pdf",
    "Campus Maintenance & Green Campus Committee": "/pdfs/Campus_Maintenance_Green_Campus_Committee.pdf",
    "Procedures and policies": "/pdfs/Procedures_and_policies.pdf",
    "Green Mission Policy": "/pdfs/Green_Mission_Policy.pdf",
    "RECREITMENT AND PROMOTIONAL POLICIES-1": "/pdfs/Recruitment_and_Promotional_Policies.pdf",
    "EQUAL OPPORTUNITY CELL": "/pdfs/Equal_Opportunity_Cell.pdf",
  };
 

const center = {
  textAlign: 'center',
  marginBottom: '20px'
};




    return (
    <>
      <div>
          <Navbar/>
      </div>
        <div className="authorities-container">

        <h2 className="aic-title">
         AUTHORITIES
        <span className="underline"></span>
        </h2>
       
      <AuthorityCard title="The Board of Governors">
        <SubCard title="Board of Governors List" link="https://www.giet.edu/wp-content/uploads/2024/06/BOG-LIST.pdf" />
        <SubCard title="Board of Governors -1" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-1-1.pdf" />
        <SubCard title="Board of Governors -2" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-2.pdf" />
        <SubCard title="Board of Governors -3" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-3.pdf" />
        <SubCard title="Board of Governors -4" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-4.pdf" />
        <SubCard title="Board of Governors -5" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-5.pdf" />
        <SubCard title="Board of Governors -6" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-6.pdf" />
        <SubCard title="Board of Governors -7" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-7.pdf" />
        <SubCard title="Board of Governors -8" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-8.pdf" />
        <SubCard title="Board of Governors -9" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-9.pdf" />
        <SubCard title="Board of Governors -10" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-10.pdf" />
        <SubCard title="Board of Governors -11" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-11.pdf" />
        <SubCard title="Board of Governors -12" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-12.pdf" />
        <SubCard title="Board of Governors -13" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-13.pdf" />
        <SubCard title="Board of Governors -14" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-14.pdf" />
        <SubCard title="Board of Governors -15" link="https://www.giet.edu/wp-content/uploads/2024/09/BOG-Minutes-15.pdf" />
        <SubCard title="Board of Governors -16" link="https://www.giet.edu/wp-content/uploads/2024/11/Minutes-of-the-Meeting-BOG-10.01.2024.pdf" />
      </AuthorityCard>

      <AuthorityCard title="The Board of Management">
                <SubCard title="Board of Management -1" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-1.pdf" />

        <SubCard title="Board of Management -2" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-2.pdf" />

        <SubCard title="Board of Management -3" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-3.pdf" />

        <SubCard title="Board of Management -4" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-4.pdf" />
        <SubCard title="Board of Management -5" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-5.pdf" />
        <SubCard title="Board of Management -6" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-6.pdf" />
        <SubCard title="Board of Management -7" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-7.pdf" />
        <SubCard title="Board of Management -8" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-8.pdf" />
        <SubCard title="Board of Management -9" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-9.pdf" />
        <SubCard title="Board of Management -10" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-10.pdf" />
        <SubCard title="Board of Management -11" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-11.pdf" />
        <SubCard title="Board of Management -12" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-12.pdf" />
        <SubCard title="Board of Management -13" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-13.pdf" />
        <SubCard title="Board of Management -14" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-14.pdf" />
        <SubCard title="Board of Management -15" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-15.pdf" />
        <SubCard title="Board of Management -16" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-16.pdf" />
        <SubCard title="Board of Management -17" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-17.pdf" />
        <SubCard title="Board of Management -18" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-18.pdf" />
        <SubCard title="Board of Management -19" link="https://www.giet.edu/wp-content/uploads/2024/09/BOM-Minutes-19.pdf" />
      </AuthorityCard>

      <AuthorityCard title="Academic Council">
       <SubCard title="Academic Council -1" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-1.pdf" />
<SubCard title="Academic Council -2" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-2.pdf" />
<SubCard title="Academic Council -3" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-3.pdf" />
<SubCard title="Academic Council -4" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-4.pdf" />
<SubCard title="Academic Council -5" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-5.pdf" />
<SubCard title="Academic Council -6" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-6.pdf" />
<SubCard title="Academic Council -7" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-7.pdf" />
<SubCard title="Academic Council -8" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-8.pdf" />
<SubCard title="Academic Council -9" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-9.pdf" />
<SubCard title="Academic Council -10" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-10.pdf" />
<SubCard title="Academic Council -11" link="https://www.giet.edu/wp-content/uploads/2024/09/AC-Minutes-11.pdf" />

      </AuthorityCard>


        <AuthorityCard title="The Board of Studies">
        <p><strong>A:</strong> There shall be a Board of Studies for each branch or discipline of study or branches of study as the Academic Council may decide.</p>
        <p><strong>B:</strong> The constitution, powers and functions of the Board of Studies shall be such as may be prescribed in the Statutes.</p>
      </AuthorityCard>

     <AuthorityCard title="Finance Committee">
        <table>
          <tbody>
            <tr>
              <td><strong>A</strong></td>
              <td>The Vice-Chancellor of the University</td>
              <td>Dr. A. V. N. L. Sharma (I/C)</td>
            </tr>
            <tr>
              <td><strong>B</strong></td>
              <td>The Registrar for the University</td>
              <td>Dr. N. V. J. Rao (Ex-officio Secretary)</td>
            </tr>
            <tr>
              <td><strong>C</strong></td>
              <td>The Finance Officer</td>
              <td>Mr. Sanat Patnaik C.A, Bhubaneswar</td>
            </tr>
            <tr>
              <td><strong>D</strong></td>
              <td>Such other members as may be nominated by the Board of Governors.</td>
              <td>
                Dr. S. P. Panda, President, GIET University<br />
                Dr. C. D. Panda, Vice President, GIET University<br />
                Dr. Jagadish Panda, Director General, GIET University<br />
                Sri. Sarat Chandra Panda, Accounts Officer
              </td>
            </tr>
          </tbody>
        </table>
      </AuthorityCard>
    
  

<h1 style={center}>Other Committees</h1>

       {/* New Horizontal PDF links section */}
    <AuthoritiesPDFCards committees={otherCommittees} links={committeePdfLinks} />



    </div>
        <div>
          <Footer/>
        </div>
    </>
    
  );
};

export default Authorities;
