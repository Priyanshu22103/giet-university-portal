import React,{useEffect} from "react";
import "./StudentSupport.css";
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const StudentSupport = () => {
  useEffect(() => {
         document.title = 'Student Support - GIET University | Odisha | Gunupur'
  }, []);
  const items = [
    "5.1.4.1 – Grievance Redressal of Students Policy",
    "5.1.4.2 – Notification_UGC_Redressal",
    "5.1.4.3 – OMBUDSMAN-2024",
    "5.1.4.4 – GIET University_Grievance Commitee",
    "5.1.4.5 – Policy For Sexual Harassment Free Campus",
    "5.1.4.6 – Sexual Harassment Free Campus_Committee",
    "5.1.4.7 – GIET University – Anti Ragging Committee",
    "5.1.4.8 – GIET University Disciplinary Committee",
    "5.1.4.9 – Policy Of ICC",
    "5.1.4.10 – GIET University – ICC committee",
    "5.1.4.11 – File No 11 – SC-ST Committee",
    "5.1.4.12 – Mechanism for Submission of Grievance Redressal",
    "5.1.4.13 – ANTI RAGGING COMMITTEE_MOM",
    "5.1.4.14 – STUDENT GRIEVANCE CELL_MOM",
    "5.1.4.15 – ICC MOM",
    "5.1.4.16 – SHC_MoM",
    "5.1.4.17 – Anti ragging day",
  ];
  return (
    <>
      <div>
          <Navbar/>
      </div>
      <div className="student-support-container" style={{color:'black'}}>
      <h2 className="aic-title">
         STUDENT SUPPORT
        <span className="underline"></span>
      </h2>
        
        
      
      <ul className="student-support-list">
        {items.map((item, idx) => {
          const isAntiRaggingCommittee =
            item.includes("Anti Ragging Committee") &&
            item !== "5.1.4.7 – GIET University – Anti Ragging Committee";

          return (
            <li
              key={idx}
              className={isAntiRaggingCommittee ? "anti-ragging-bold-red" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
      </div>
      <div>
          <Footer/>
      </div>
      
    </>
    
  );
};

export default StudentSupport;
