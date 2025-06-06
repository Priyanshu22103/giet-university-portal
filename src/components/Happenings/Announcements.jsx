import React,{useEffect} from "react";
import "./Announcements.css";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const Announcements = () => {
  const announcementLinks = [
    { title: "Admission Open for Ph.D Programme-2025-26 (SUMMER)", url: "https://www.giet.edu/admissions/admission-notices/" },
    { title: "(ICSMSD-2025) International Conference", url: "https://www.gietu.com/icsmsd-2025" },
    { title: "National Eligibility Test(NET) as an Entrance Test for Admission to Ph.D", url: "https://www.giet.edu/wp-content/uploads/2025/02/National-Eligibility-TestNETas-an-Entrance-Test-for-Admission-to-Ph.D.pdf" },
    { title: "Sports Champion 2025", url: "https://www.giet.edu/image-gallery/sports-champion-2025/" },
    { title: "Shrujan 3.0", url: "https://shrujangietu.in/login" },
    { title: "NCRMET-2024", url: "https://www.gietu.com/ncrmet-2024" },
    { title: "Department of Continuous Education Program ( DCEP )", url: "https://www.giet.edu/dcep" },
    { title: "Agneepath Yojana", url: "https://www.giet.edu/happenings/agneepath-yojana/" },
    { title: "Notification for admission into the Ph.D programme-2022-23(Summer)", url: "https://www.giet.edu/wp-content/uploads/2022/04/Ph.D-Advt.pdf" },
    { title: "International Conference on Smart & Sustainable Technologies", url: "https://www.icsst.in/" },
    { title: "National Symposium on Emerging Trends in Electronics", url: "https://www.nsete.in/" },
    { title: "Registration Open for Cultural Fest Events 2022", url: "https://gietuculturalfest.in/" },
    { title: "ICSST-2021 Call for Papers", url: "https://www.giet.edu/events/international-conference-on-smart-sustainable-technologies-icsst-2021/" },
    { title: "Annual Intramural Sports Meet-2021", url: "https://www.giet.edu/wp-content/uploads/2021/12/Annual-Intramural-Sports-Meet-2021.pdf" },
    { title: "GIETU Rank- DBT Supported M.Sc. Biotechnology", url: "https://www.giet.edu/wp-content/uploads/2021/09/GIETU-Second-Marit-List-2021.pdf" },
    { title: "Results of the Technical competition – ISTE student chapter", url: "https://www.giet.edu/wp-content/uploads/2021/09/ISTE_FINAL-1.jpg" },
    { title: "Admissions are open for DBT Supported M.Sc Biotechnology Programme 2021", url: "https://www.giet.edu/wp-content/uploads/2021/09/Edited_Admission-notice.pdf" },
    { title: "In order to enrich the academic and research excellence GIETU requires faculties in the cadre of Asst. Prof. / Asso. Prof. / Professor", url: "https://www.giet.edu/current-openings/" },
    { title: "Revised Examination Schedule postponed due to ‘YAAS CYCLONE’", url: "https://www.giet.edu/examinations/schedule/" },
    { title: "B.Tech(IV & VI Sem), M. Tech (I Sem) and B. Sc-Ag(I,Iv & VI sem Exam Notice)", url: "" },
    { title: "Postponement of Semester End Examinations scheduled from 26.05.2021 to 29.05.2021", url: "https://www.giet.edu/examinations/circulars/" },
    { title: "Form Fill-up Notice for B. Tech (VIII Sem), M.Sc, M.A, MCA & BBA", url: "https://www.giet.edu/examinations/circulars/" },
    { title: "COVID-19 AWARENESS", url: "https://www.giet.edu/covid-19-awareness/" },
    { title: "Revised examination schedule for I Semester B.Sc(Ag), IV Sem BBA and I semester M. Tech", url: "https://www.giet.edu/examinations/schedule/" },
    { title: "Semester End Exam & Cycle Test-II Notice", url: "https://www.giet.edu/examinations/circulars/" },
    { title: "Urgent Notice: April – May’2021 – Form Fillup Notice", url: "https://www.giet.edu/examinations/circulars/" },
    { title: "M.Tech (AR-17, AR-18 & AR-19)1st SEMESTER SUPPLEMENTARY EXAM TIME TABLE-2021", url: "https://www.giet.edu/examinations/schedule/" },
    { title: "National Constitution Day Celebration", url: "https://www.giet.edu/happenings/national-constitution-day/" },
    { title: "Sum of Squares and Modular Forms", url: "https://www.giet.edu/events/sum-of-squares-and-modular-forms/" },
    { title: "AICTE Pragati and Saksham Scholarship Schemes Manual", url: "https://www.giet.edu/aicte-pragati-and-saksham-scholarship-manual/" },
    { title: "Admissions 2020 Closing Soon !!! Apply Now", url: "https://admission.giet.edu/" },
    { title: "CAREER COUNSELLING PROGRAM AT YOUR TOWN", url: "https://www.giet.edu/happenings/career-counselling/" },
    { title: "Ph.D Notification", url: "https://www.giet.edu/wp-content/uploads/2023/05/Ph.d.-Notification-2023-24-Summer.pdf" },
    { title: "Academic Calendar 2020 – 2021", url: "https://www.giet.edu/wp-content/uploads/2020/10/ACADEMIC-CALENDAR-2020-21.pdf" },
    { title: "GIETU selected as Nodal Center for Smart India Hackathon 2020", url: "https://www.giet.edu/happenings/smart-india-hackathon-2020/" },
    { title: "IEEE-iSSSC 2020", url: "https://www.giet.edu/events/ieee-isssc-2020/" },
    { title: "M.Sc Biotech Programme of GIETU selected under DBT", url: "https://www.giet.edu/wp-content/uploads/2020/11/DBT_MSc_Biotech_Approval.pdf" },
  ];

 useEffect(() => {
     document.title = 'Announcements - GIET University | Odisha | Gunupur'
   }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="announcements-container">
      <h2 className="aic-title">
         ANNOUNCEMENTS
        <span className="underline"></span>
        </h2>
      
      <div className="blue-orange-line"></div>
      <ul className="announcement-list">
        {announcementLinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default Announcements;
