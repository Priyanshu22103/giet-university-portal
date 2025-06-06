import React,{useEffect} from "react";
import "./Notices.css";

import Navbar from "./Navbar";
import Footer from "../Home/Footer";

const notices = [
  {
    date: "March 21, 2023",
    title: "Blood Donation Camp on 22.03.2023",
    link: "https://www.giet.edu/wp-content/uploads/2023/03/blood-donation-camp-on-22.03.2023.pdf"
  },
  {
    date: "February 2, 2023",
    title: "Constituation of IAIP",
    link: "https://www.giet.edu/wp-content/uploads/2023/02/Constituation-of-IAIP.pdf"
  },
  {
    date: "February 2, 2023",
    title: "ADMISSION INTO THE Ph.D. PROGRAMME-2022-23 (Winter)",
    link: "https://www.giet.edu/wp-content/uploads/2023/02/ADMISSION-PHD-PROGRAMME-2022-23-WINTER.pdf"
  },
  {
    date: "January 13, 2023",
    title: "MAKAR SANKRANTI HOLIDAY",
    link: "https://www.giet.edu/wp-content/uploads/2023/01/Circular-Makar-Sankrnti-Holiday.pdf"
  },
  {
    date: "December 26, 2022",
    title: "Class Timing for Students",
    link: "https://www.giet.edu/wp-content/uploads/2022/12/class-timings_20221226_0001.pdf"
  },
  {
    date: "November 14, 2022",
    title: "Enrollment in NCC (2022-23)",
    link: "https://www.giet.edu/wp-content/uploads/2022/11/Enrollment-in-NCC-2022-2023.pdf"
  }
];

const Notices = () => {
  useEffect(() => {
                 document.title = 'Notices - GIET University | Odisha | Gunupur'
          }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="notices-container">
  <h2 className="aic-title">
         NOTICES
        <span className="underline"></span>
        </h2>
  <div className="notices-list">
    {notices.map((notice, index) => (
      <div className="notice-wrapper" key={index}>
        <div className="notice-date">{notice.date}</div>
        <a href={notice.link} className="notice-card" target="_blank" rel="noopener noreferrer">
          <div className="notice-title">{notice.title}</div>
        </a>
      </div>
    ))}
  </div>
</div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default Notices;
