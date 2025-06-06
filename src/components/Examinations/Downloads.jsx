import React,{useEffect} from 'react';
import './Downloads.css';
import Footer from "../Home/Footer";
import Navbar from "./Navbar";
const downloads = [
  {
    title: 'Ph.D Provisional Certificate-Application Form',
    file: '/pdf/form1.pdf',
  },
  {
    title: 'CGPA-To-Percentage-Conversion',
    file: '/pdf/CGPA-To-Percentage-Conversion.pdf',
  },
  {
    title: 'Form Fill-Up Form',
    file: '/pdf/Form-Fill-Up-Form.pdf',
  },
  {
    title: 'Application for Back Paper Subject Registration',
    file: '/pdf/4.-Application-for-back-paper-subject-Registration.pdf',
  },
  {
    title: 'Application-for-Correction-of-name-in-grade-sheets-Degree-Certificate',
    file: '/pdf/7.-Application-for-Correction-of-name-in-grade-sheets-Degree-Certificate.pdf',
  },
   {
    title: 'Application-for-Duplicate-Degree-Certificate',
    file: '/pdf/8.-Application-for-Duplicate-Degree-Certificate.pdf',
  },
   {
    title: 'Application-for-Duplicate-Grade-Sheets',
    file: '/pdf/9.-Application-for-Duplicate-Grade-Sheets.pdf',
  },
   {
    title: 'Application-for-Migration-Certificate',
    file: '/pdf/10.-Application-for-Migration-Certificate.pdf',
  },
   {
    title: 'Application-for-Re-Evaluation',
    file: '/pdf/11.-Application-for-Re-Evaluation.pdf',
  },
   {
    title: 'Name-COrrection-in-Migration-Certificate',
    file: '/pdf/11.-Name-Correction-in-Migration-Certificate.pdf',
  },
  
];

const Downloads = () => {
  useEffect(() => {
          document.title = 'Downloads - GIET University | Odisha | Gunupur';
    }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="downloads-container">
      <h1 className="notices-title">DOWNLOADS</h1>
      <div className="about-heading-underline"></div>
      {downloads.map((item, index) => (
        <a
          key={index}
          href={item.file}
          className="download-button"
          download
        >
          {item.title}
        </a>
      ))}
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default Downloads;
