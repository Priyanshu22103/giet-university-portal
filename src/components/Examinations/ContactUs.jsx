import React,{useEffect} from 'react';
import './ContactUs.css';
import Footer from "../Home/Footer";
import Navbar from "./Navbar";
const ContactUs = () => {  
  useEffect(() => {
      document.title = 'Contact Us - GIET University | Odisha | Gunupur';
    }, []);
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="contactus-container">
      <h1 className="contactus-title">CONTACT US</h1>
      <div className="contactus-underline"></div>
      <div className="contactus-info">
        <div className="contactus-row">
          <span className="contactus-label">Address:</span>
          <span className="contactus-value">
            GIET University, Gunupur<br />
            Gobriguda, Po- Kharling, Gunupur,<br />
            Rayagada, Odisha - 765022
          </span>
        </div>
        <div className="contactus-row">
          <span className="contactus-label">Email:</span>
          <a className="contactus-value" href="mailto:enquiry@giet.edu">enquiry@giet.edu</a>
        </div>
        <div className="contactus-row">
          <span className="contactus-label">Phone:</span>
          <a className="contactus-value" href="tel:+917735745535">+91-7735745535</a>,{' '}
          <a className="contactus-value" href="tel:06857250172">06857-250172</a>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </>
    
  );
};

export default ContactUs;