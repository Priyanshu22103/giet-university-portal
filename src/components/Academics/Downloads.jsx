import React,{useEffect} from 'react';
import './Downloads.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const downloadItems = [
  { name: "LIST OF HOLIDAYS FOR THE YEAR 2025 ", file: "LIST-OF-HOLIDAYS-FOR-THE-YEAR-2025.pdf" },
  { name: "LIST OF HOLIDAYS FOR THE YEAR 2024", file: "List-of-Holiday-For-the-Year-2024.pdf" },
  { name: "LIST OF HOLIDAYS FOR THE YEAR 2023", file: "List-of-Holiday-for-the-Year-2023.pdf" },
  { name: "Student-Hand-Book", file: "Student-Hand-Book-2018-19.pdf" },
  { name: "Employee’s Hand Book", file: "Employees-Handbok.pdf" },
];
const Downloads = () => {
  useEffect(() => {
         document.title = 'Downloads - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <Navbar/>
      <div className="downloads-container">
      <h2 className="aic-title">
         DOWNLOADS
        <span className="underline"></span>
        </h2>

      {/* <div className="downloads-nav-bar">
        <span>Downloads</span>
        <span>Important Links</span>
        <span>Annual Reports Agriculture</span>
      </div> */}

      <ul className="downloads-list">
        {downloadItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <a
              href={`/assets/pdfs/${item.file}`}
              download={item.file}      
              target="_blank"
              rel="noopener noreferrer"
              className="open-link"
            >
              Open PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
      <Footer/>
    </>
    
  );
};

export default Downloads;
