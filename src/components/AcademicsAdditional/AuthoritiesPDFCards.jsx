import React from "react";
import "./AuthoritiesPDFCards.css";

const pdfLinks = [
  { title: "Planning & Evaluation Committee", url: "#" },
  { title: "Admission Committee", url: "#" },
  { title: "Enterpreneurship Development Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Enterprunership-Development-Committee.pdf" },
  { title: "Academic Audit Committee", url: "#" },
  { title: "Extar Curricular & Co-curricular Activity Committee", url: "https://www.giet.edu/wp-content/uploads/2019/08/Cocurricular-Activity-Committee.pdf" },
  { title: "Student Grievance Redressal Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Student-Grievance-Redressal-Committee.pdf" },
  { title: "R&D Committee", url: "#" },
  { title: "Examination Committee", url: "#" },
  { title: "RTI Committee", url: "https://www.giet.edu/wp-content/uploads/2019/08/RTI-Committee.pdf" },
  { title: "Internal Quality Assurance Committee", url: "#" },
  { title: "Sports Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Sports-Committee.pdf" },
  { title: "ANTI Ragging Committee", url: "https://www.giet.edu/wp-content/uploads/2024/07/Antiragging-Committee.pdf" },
  { title: "ANTI Ragging Squad Committee Ladies Hostel", url: "https://www.giet.edu/wp-content/uploads/2024/07/Ladies-Hostel.pdf" },
  { title: "ANTI Ragging Squad Committee for Campus Hostel", url: "https://www.giet.edu/wp-content/uploads/2024/07/Campus-Hostel.pdf" },
  { title: "ANTI Ragging Squad Committee for Town Mess", url: "https://www.giet.edu/wp-content/uploads/2024/07/Town-Mess.pdf" },
  { title: "Transport Committee", url: "https://www.giet.edu/wp-content/uploads/2022/07/Transport-Committee.pdf" },
  { title: "Training and Placement Committee", url: "#" },
  { title: "Career Guidance Cell", url: "#" },
  { title: "Alumni Associations", url: "https://www.giet.edu/wp-content/uploads/2023/02/Alumni-Association.pdf" },
  { title: "Central Mess & Canteen Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Central-Mess-and-Canteen-Committee.pdf" },
  { title: "Disciplinary Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Disciplinary-Committee.pdf" },
  { title: "NSS Advisory Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/NSS-Advisory-Committee.pdf" },
  { title: "Library Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Library-Committee.pdf" },
  { title: "Campus Flash Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Campus-Flash-Committee.pdf" },
  { title: "Cultural Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Cultural-Committee.pdf" },
  { title: "Faculty Club Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Faculty-Club.pdf" },
  { title: "Internal Complaints Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Internal-Complaint-Committee.pdf" },
  { title: "NSS Committee", url: "https://www.giet.edu/wp-content/uploads/2021/03/NSS-Advisory-Committee-1.pdf" },
  { title: "Women Development Cell", url: "#" },
  { title: "Green Campus Committee", url: "https://www.giet.edu/wp-content/uploads/2023/02/Campus-Maintance-and-Green-Campus-Committee.pdf" },
  { title: "SC- ST Committee", url: "https://www.giet.edu/wp-content/uploads/2022/07/SC-ST-Committee.pdf" },
  { title: "Campus Maintenance & Green Campus Committee", url: "https://www.giet.edu/wp-content/uploads/2022/12/Campus-Maintenance-Green-Campus-Committee.pdf" },
  { title: "Procedures and policies", url: "https://www.giet.edu/wp-content/uploads/2023/07/Procedures-and-policies.pdf" },
  { title: "Green Mission Policy", url: "https://www.giet.edu/wp-content/uploads/2023/07/Green-Mission-Policy.pdf" },
  { title: "RECREITMENT AND PROMOTIONAL POLICIES-1", url: "https://www.giet.edu/wp-content/uploads/2023/07/RECREITMENT-AND-PROMOTIONAL-POLICIES-1.pdf" },
  { title: "EQUAL OPPORTUNITY CELL", url: "https://www.giet.edu/wp-content/uploads/2025/05/EQUAL-OPPORTUNITY-CELL.pdf" },
  { title: "Socio-Economically Disadvantaged Groups Cell", url: "https://www.giet.edu/wp-content/uploads/2025/05/Socio-Economically-Disadvantaged-Groups-Cell.pdf" }
];

const AuthoritiesPDFCards = () => {
  return (
    <div className="authorities-pdf-cards-container">
      {pdfLinks.map((pdf, index) => (
        <div className="pdf-col" key={index}>
          <a href={pdf.url} className="pdf-card" target="_blank" rel="noopener noreferrer">
            <div className="pdf-icon">📄</div>
            <div className="pdf-title">{pdf.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default AuthoritiesPDFCards;
