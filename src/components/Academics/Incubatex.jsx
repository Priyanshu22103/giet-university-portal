import React,{useEffect} from 'react';
import './Incubatex.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const Incubatex = () => {
  useEffect(() => {
         document.title = 'Incubatex - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div><Navbar/></div>
      <div className="incubatex-container">
        <h2 className="aic-title">
          INCUBATEX
          <span className="underline"></span>
          </h2>
        <div className='total-div'>
          <div className='content-div'>
            <h2 className="subheading-left">
              IncubateX Private Limited: Empowering Innovation and Technical Excellence
            </h2>

            <p className="incubatex-paragraph">
              IncubateX Private Limited, in association with GIET University, Gunupur, is a leading consultancy firm
              dedicated to fostering innovation and academic excellence. Registered under the Companies Act,
              IncubateX is committed to providing top-notch technical consultancy services to students, faculty,
              industries, and startups. Our mission is to bridge the gap between academic research and industry standards,
              ensuring quality and precision in every project.
            </p>

            <h3 className="incubatex-services-heading">Our Services:</h3>
            <ul className="incubatex-list">
              <li>
                <strong>Research Support:</strong> Assistance in writing high-quality journal and conference papers,
                thesis, dissertations, and book publications.
              </li>
              <li>
                <strong>Technical Consultancy:</strong> Expert guidance for setting up laboratories, experimental setups,
                and project designs.
              </li>
              <li>
                <strong>Skill Development:</strong> Organizing short-term courses to enhance the skills of students and
                faculties, focusing on cutting-edge technologies and methodologies.
              </li>
              <li>
                <strong>Innovative Solutions:</strong> Tailored consultancy services for startups to accelerate their
                growth and innovation journey.
              </li>
            </ul>

            <p className="incubatex-paragraph">
              <strong>Why Choose IncubateX?</strong> IncubateX is more than just a consultancy; it is a hub of innovation
              where ideas are nurtured and transformed into impactful solutions. With a team of experienced professionals
              and academicians, we are dedicated to improving the technical capabilities of our clients, ensuring that
              every project meets the highest standards of quality and excellence.
            </p>

            <p className="incubatex-paragraph">
              <strong>Join Us in Shaping the Future!</strong> Whether you are a student looking to enhance your research
              skills, a faculty member aiming to publish impactful papers, an industry professional seeking technical
              advice, or a startup ready to innovate, IncubateX is your partner in success. Together, let’s push the
              boundaries of knowledge and technology.
            </p>

            <p className="incubatex-link">
              <strong>More Details: </strong>
              <a href="https://incubationx.com/" target="_blank" rel="noopener noreferrer">
                https://incubationx.com/
              </a>
            </p>
          </div>
        </div>
    </div>
      <div><Footer/></div>
    </>
    
  );
};

export default Incubatex;
