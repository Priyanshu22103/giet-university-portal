import React,{useEffect} from 'react';
import './StudentClubs.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const StudentClubs = () => {
  useEffect(() => {
         document.title = 'Student Clubs - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <Navbar/>
      <div className="student-clubs-container">
      <h2 className="aic-title">
        STUDENT'S CLUB
        <span className="underline"></span>
      </h2>

      {/* <nav className="student-clubs-nav">
        <ul>
          <li>Schools</li>
          <li>Authorities</li>
          <li>Innovations</li>
          <li>Academic Integrity Committee (AIC)</li>
          <li>IQAC</li>
        </ul>
      </nav> */}

      <section className="student-clubs-content">
        <p>‘Mentoring isn’t an extra-curricular activity. It is vital for cultivating an enriching and inclusion community’</p>

        <p>
          GIET University supports different student societies that aim to direct the dynamism of students in constructive directions. The societies are aligned to produce an overall integrated personality through enhancement in culture, literature, art, music, dance arena, sports activities, and community services. GIETU societies offer a multitude of extracurricular activities that meet the variety of student interests. Each Student Club/Society has a Convener, an efficient Treasurer, a Student Secretary, and student members.
        </p>

        <p>
          There are several student clubs to help gather, discuss, energize ideas and create them. There is a club for every interest, talent, and skill to strengthen individuals and groups.
        </p>

        <h3>Student Association and Robotic Science ( SARS CLUB )</h3>
      </section>
    </div>
      <Footer/>
    </>
    
  );
};

export default StudentClubs;
