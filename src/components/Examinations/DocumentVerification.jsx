import React,{useEffect} from 'react';
import './DocumentVerification.css';
import Footer from "../Home/Footer";
import Navbar from "./Navbar";
const DocumentVerification = () => {
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=verification@giet.edu', '_blank');
  };
  useEffect(() => {
        document.title = 'Document Verification - GIET University | Odisha | Gunupur';
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="document-verification-container">
      <h1 className="notices-title">DOCUMENT VERIFICATION</h1>
      <div className="about-heading-underline"></div>
      
      <div className="verification-card">
        <img
          src="https://img.icons8.com/fluency/96/000000/ok.png"
          alt="Verification Check"
          className="verification-icon"
        />
        <p className="verification-text">For Document Verification</p>
        <button className="verification-button" onClick={handleEmailClick}>
          write to: verification@giet.edu
        </button>
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default DocumentVerification;
