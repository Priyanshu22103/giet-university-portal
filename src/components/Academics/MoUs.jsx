import React,{useEffect} from "react";
import "./MoUs.css";
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const MoUs = () => {
  useEffect(() => {
         document.title = 'MoUs - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
    <div><Navbar /></div>
    <div className="mous-container">
      <h2 className="aic-title">
         MoUs
        <span className="underline"></span>
        </h2>
      <p className="mous-description">
        Click the button below to view our official Memorandums of Understanding (MoUs).
      </p>

      <a
        href="assets/pdfs/MoU-27.5.22.pdf" // Update this path to match your actual file location
        target="_blank"
        rel="noopener noreferrer"
        className="mous-button"
      >
        View MoUs PDF
      </a>
    </div>
    <div><Footer/></div>
  </>
  );
};

export default MoUs;
