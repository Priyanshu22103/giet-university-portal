import React,{useEffect} from 'react';
import './Notice.css';
import Footer from "../Home/Footer";
import Navbar from "./Navbar";
const notices = [
  {
    title: 'MBA, BBA & M.A (English) Rechecking Notice-2025',
    link: './pdf/Notice1.pdf',
  },
  {
    title: 'B. Tech (2021-2025 Batch) Special Supplementary Examination Extended',
    link: './pdf/Notice2.pdf',
  },
  {
    title: 'BCA & M.Sc 4th Semester Rechecking Notice',
    link: './pdf/Notice3.pdf',
    
  },
  {
    title: 'B. Tech (2021-2025 Batch) Back Paper Registration For Special Supplementary Examination',
    link: './pdf/Notice4.pdf',
  },
  {
    title: 'Ph. D. 1st Semester Regular And Supplementary Examination Registration Notice',
    link: './pdf/Notice5.pdf',
  },
  {
    title: 'B. Sc. (Ag.) (2021-2025 Batch) 8th Semester Form Fill Up Notice',
    link: './pdf/Notice6.pdf',
  },
  {
    title: 'BCA & MCA Rechecking Notice',
    link: './pdf/Notice7.pdf',
  },
  {
    title:'B. Sc. Nursing 2nd Semester Supplementary Examination Subject Registration Notice.',
    link:'./pdf/Notice8.pdf',
  },
  {
    title:'BBA,BCA & MA English Reschedule Notice',
    link:'./pdf/Notice9.pdf',
  },
  {
    title:'B.Tech (Batch 2024-2028) 2nd Semester Regular Reschedule Notice',
    link:'./pdf/Notice10.pdf',
  },
  {
    title:'MA. English 2024 – 26 Batch and M.Sc. 2024 – 26 Batch 1st semester form fill up Notice.',
    link:'./pdf/Notice11.pdf',
  },
  {
    title:'M.Sc (Ag) Agronomy (Batch 2023-2024) Third Semester Form fillup Notice',
    link:'./pdf/Notice12.pdf',
  },
  {
    title:'M. C. A. 3rd Semester Regular & Supplementary Examination Postponed Notice',
    link:'./pdf/Notice13.pdf',
  },
  {
    title:'M.-Tech-2nd-4th-Semester-End-Examinations-Registration-Form-Fill-up-Notice',
    link:'./pdf/Notice14.pdf',
  },
  {
    title:'Ph.D 1st Semester Supplementary Exam. for Subject Registration Notice -03.07.2023',
    link:'./pdf/Notice15.pdf',
  }

];

const Notices = () => {
  useEffect(() => {
            document.title = 'Notice - GIET University | Odisha | Gunupur';
      }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="notices-container">
      <h1 className="notices-title">NOTICES</h1>
      <div className="about-heading-underline"></div>
      <div className="notices-list">
        {notices.map((notice, index) => (
          <a
            key={index}
            href={notice.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`notice-item ${notice.faded ? 'faded' : ''}`}
          >
            {notice.title}
            <span className="pdf-icon">📄</span>
          </a>
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
