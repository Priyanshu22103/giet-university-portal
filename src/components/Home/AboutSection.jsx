import React from 'react';
import './AboutSection.css';
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className='about'>
        <div className="about-content">
        <h2 className="about-title">ABOUT GIETU</h2>
        <p className="about-description">
          GIET, best University in Eastern India for campus placement. GIET University, Gunupur
          (formerly known as Gandhi Institute of Engineering and Technology) was established by
          “Vidya Bharati Educational Trust,” Gunupur, Odisha, India in the year 1997. Since inception,
          the Trust promotes Technical Education in India with a motto of providing Quality Education in
          a highly disciplined and conducive environment with International Standards.
        </p>
        <Link to='/about-gietu' className="read-moree">Read More <i className="fas fa-arrow-right arrow-icon"></i></Link>

      </div>
    </div>
  );
};

export default AboutSection;
