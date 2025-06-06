import React,{useEffect} from 'react';
// import library1 from '../assets/images/library1.jpg';
import library1 from '../../assets/images/library1.jpg'
import library2 from '../../assets/images/library2.jpg';
import './CentralLibrary.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const CentralLibrary = () => {
  useEffect(() => {
         document.title = 'Central Library - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div><Navbar/></div>
      <div className="central-library-container">
      {/* Navigation Bar */}
      <h2 className="aic-title">
         CENTRAL LIBRARY
        <span className="underline"></span>
        </h2>
      {/* <nav className="library-nav">
        <span>Central Library</span>
        <span>Schools</span>
        <span>Authorities</span>
        <span>Innovations</span>
        <span>Academic Integrity Committee (AIC)</span>
        <span>IQAC</span>
      </nav> */}

      {/* First Card */}
      <div className="first-library-card">
        <img src={library1} alt="Library" className="first-card-img" />
        <div className="first-card-text">
          <h2>University Knowledge Centre</h2>
          <p>
            “Knowledge is the new rich, arm yourself with it – Toni Payne” has precisely been the motto of GIET University, Gunupur.
            The central library of GIET University, popularly known as “Knowledge Centre” is one of the best libraries in Eastern India.
            The “Knowledge Centre” of GIET University is as old as the university itself and built for efficient delivery of knowledge.
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="second-library-card">
        <div className="second-card-left">
          <img src={library2} alt="Vision and Mission" />
        </div>
        <div className="second-card-right">
          <div className="vision">
            <h2>Vision</h2>
            <p>
              The GIETU central library’s vision is to have a multidisciplinary approach to learning, teaching, sharing, and researching various sectors.
              These all sectors combine to develop an education directed mindset in the students. The library strives to master curiosity and provide
              the repository of options for sharing, preserving, exploring, and analyzing the vast knowledge sources.
            </p>
          </div>
          <div className="mission">
            <h2>Mission</h2>
            <p>
              The Central Library of GIETU fulfills the mission of holistic development in learning by creating an environment ideal enough for the smooth
              exchange of learning, teaching, research, and knowledge. It promotes access to diverse resources for all staff, students, and alumni,
              and encourages the celebration and collaboration of knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
      <div><Footer/></div>
    </>
    
  );
};

export default CentralLibrary;
