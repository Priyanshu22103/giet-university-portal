import React,{useEffect} from "react";
import './AcademicCalendar.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const academicCalendarLinks = [
  { title: "Ph.D. Academic Calendar-2024-25(W)", url: "https://www.giet.edu/wp-content/uploads/2025/04/Ph.D.-Academic-Calendar-2024-25W.pdf" },
  { title: "M.Sc (Ag) Agronomy and M.Sc (Hort.) Fruit Science II Semester Academic Calendar-2024-2025", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.Sc-Ag-Agronomy-and-M.Sc-Hort.-Fruit-Science-II-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "M.Sc (Ag) Agronomy 4th Sem Academic Calendar-2024-2025", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.Sc-Ag-Agronomy-4th-Sem-Academic-Calendar-2024-2025.pdf" },
  { title: "M.Sc. – II Semester Academic Calendar 2024-25", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.Sc_.-II-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "M.A. – IV Semester Academic Calendar 2024-25", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.A.-IV-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "M.A. – II Semester Academic Calendar 2024-25", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.A.-II-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "M.Tech. – II Semester Academic Calendar 2024-25", url: "https://www.giet.edu/wp-content/uploads/2025/03/M.Tech_.-II-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "B.-Sc.-Hons.-Agriculture-II-Semester-Academic-Calendar-2024-25", url: "https://www.giet.edu/wp-content/uploads/2025/02/B.-Sc.-Hons.-Agriculture-II-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "B. Sc. Nursing – II Semester – Academic Calendar", url: "https://www.giet.edu/wp-content/uploads/2025/02/B.-Sc.-Nursing-II-Semester-Academic-Calendar.pdf" },
  { title: "B. Sc. Nursing – IV Semester – Academic Calendar", url: "https://www.giet.edu/wp-content/uploads/2025/02/B.-Sc.-Nursing-IV-Semester-Academic-Calendar.pdf" },
  { title: "B. Sc. Nursing – V Semester – Academic Calendar", url: "https://www.giet.edu/wp-content/uploads/2025/02/B.-Sc.-Nursing-V-Semester-Academic-Calendar.pdf" },
  { title: "B. C. A – II Semester – Academic Calendar ( AY 2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2025/01/B.-C.-A-II-Semester-Academic-Calendar-AY-2024-2025.pdf" },
  { title: "M. C. A – II Semester – Academic Calendar (AY 2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2025/01/M.-C.-A-II-Semester-Academic-Calendar-AY-2024-2025.pdf" },
  { title: "B. B. A – II Semester – Academic Calendar (AY 2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2025/01/B.-B.-A-II-Semester-Academic-Calendar-AY-2024-2025.pdf" },
  { title: "M. B. A – II Semester – Academic Calendar (AY 2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2025/01/M.-B.-A-II-Semester-Academic-Calendar-AY-2024-2025.pdf" },
  { title: "M. B. A – IV Semester – Academic Calendar (AY 2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2025/01/M.-B.-A-IV-Semester-Academic-Calendar-AY-2024-2025.pdf" },
  { title: "B. Sc. (Hons.) Agriculture- IV Semester Academic Calendar-2024-25", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Sc.-Hons.-Agriculture-IV-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "B. Sc. (Hons.) Agriculture- VI Semester Academic Calendar-2024-25", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Sc.-Hons.-Agriculture-VI-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "B. Sc. (Hons.) Agriculture- VIII Semester Academic Calendar-2024-25", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Sc.-Hons.-Agriculture-VIII-Semester-Academic-Calendar-2024-25.pdf" },
  { title: "M.Sc – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/M.Sc-IV-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "M.C.A – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/M.C.A-IV-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "M. Tech – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/M.-Tech-IV-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. Tech – VIII Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Tech-VIII-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. Tech – VI Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Tech-VI-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. Tech – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Tech-IV-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. Tech – II Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-Tech-II-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. C. A – VI Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-C.-A-VI-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. C. A – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-C.-A-IV-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. B. A – VI Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-B.-A-VI-Semester-Academic-Calendar-2024-2025.pdf" },
  { title: "B. B. A – IV Semester – Academic Calendar (2024 – 2025)", url: "https://www.giet.edu/wp-content/uploads/2024/12/B.-B.-A-IV-Semester-Academic-Calendar-2024-2025.pdf" }
];

export default function AcademicCalendar() {
  useEffect(() => {
           document.title = 'Academic Calender - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section className="academic-calendar-section" style={{color:'black'}}>
     
      <h2 className="aic-title">
         ACADEMIC CALENDAR
        <span className="underline"></span>
        </h2>


      <div className="cards-container">
        {academicCalendarLinks.map(({ title, url }) => (
          <div
            key={title}
            className="card"
            onClick={() => window.open(url, "_blank")}
          >
            {title}
          </div>
        ))}
      </div>
    </section>
      <div>
        <Footer/>
      </div>
    </>
    
  );
}
