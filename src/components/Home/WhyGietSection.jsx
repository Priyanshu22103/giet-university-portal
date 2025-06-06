import React from 'react';
import './WhyGietSection.css';
import { Link } from "react-router-dom";

import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo1 from '../../assets/logo1.jpg';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.jpg';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.jpg';

const WhyGietSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="why-giet-section">
      <h2 className="why-heading">WHY GIET UNIVERSITY?</h2>
      <p className="why-description">
        GIET University, Gunupur - A tranquil paradise, away from the noise and bustle of an urban area,
        surrounded by lush greenery and nestled in the beautiful foothills of eastern India.
        This is one of the most prestigious universities of Odisha.
        It has come out as one of the toppest in eastern India because of many reasons...
      </p>
    
      <Link to='/about-gietu' className="read-more-linkk">Read More <i className="fas fa-arrow-right arrow-icon"></i></Link>

      <div className="association-section">
        <div className="association-title">OUR <br /> ASSOCIATION</div>
        <div className="logos-container">
          {logos.map((logo, index) => (
            <div className="logo-wrapper" key={index}>
              <img src={logo} alt={`Association ${index + 1}`} className="association-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyGietSection;
