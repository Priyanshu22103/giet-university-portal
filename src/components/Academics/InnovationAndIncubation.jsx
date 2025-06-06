import React,{useEffect} from "react";
import "./InnovationAndIncubation.css";
import innovationImage from '../../assets/images/innovation-image.png';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const InnovationAndIncubation = () => {
  useEffect(() => {
         document.title = 'Innovation & Incubation - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
        <Navbar/>
        <div className="innovation-wrapper">
      <div className="innovation-container">
        <h2 className="aic-title">
         INNOVATION AND INCUBATION
        <span className="underline"></span>
        </h2>
        <p className="innovation-text">
          The Innovation & Incubation center of GIET University is proactively involved in establishing and developing the paradigm of the students’ entrepreneurial mindset and the people alike. It strives to offer an environment where like-minded individuals can ideate, create, communicate, and commercialize the entrepreneurial ventures that align with the incubation center’s principles.
        </p>
        <a
          href="https://www.giet.edu/academics/innovation-and-incubation/overview/"
          target="_blank"
          rel="noopener noreferrer"
          className="innovation-read-more"
        >
          Read More →
        </a>
        <img src={innovationImage} alt="Innovation Group" className="innovation-image" />
      </div>
    </div>
        <Footer/>
    </>
    
  );
};

export default InnovationAndIncubation;
