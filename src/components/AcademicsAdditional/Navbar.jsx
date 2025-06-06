import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import TopNavbar from "../Home/Navbar";
const Navbar = () => {
  return (
    <>
      <div>
        <TopNavbar/> 
      </div>
      <br /><br /><br/><br/>
      <div className="academics-heading">
        <h1>ACADEMICS</h1>      
      </div>
      <br/>
      <div className="decorative-underline"></div>
      <div className="about-nav-container">
      <nav className="about-nav">
        
    
        <NavLink
          to="/student-clubs"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Student Clubs
        </NavLink>
        <NavLink
          to="/downloads"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Downloads
        </NavLink>
        <NavLink
          to="/innovation-incubation"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Innovation & Incubation
        </NavLink>
        <NavLink
          to="/knowledge-partners"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Knowledge Partners
        </NavLink>
        <NavLink
          to="/student-support"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Student Support
        </NavLink>
       
        <NavLink
          to="/academic-integrity"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Academic Integrity
        </NavLink>
        <NavLink
          to="/mous"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          MoUs
        </NavLink>
     
        <NavLink
          to="/central-library"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Central Library
        </NavLink>
        <NavLink
          to="/proctor-mechanism"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Proctor Mechanism
        </NavLink>
        <NavLink
          to="/incubatex"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Incubatex
        </NavLink>
        <NavLink
          to="/acad-authorities"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Authorities
        </NavLink>
        <NavLink
          to="/academic-regulations"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Academic Regulations
        </NavLink>
        <NavLink
          to="/faculty"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Faculty
        </NavLink>
        <NavLink
          to="/academic-calendar"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Academic Calendar
        </NavLink>
        <NavLink
          to="/syllabus"
          className={({ isActive }) =>
            isActive ? "about-nav-link active-link" : "about-nav-link"
          }
        >
          Syllabus
        </NavLink>
        </nav>
        <br/><br/><br/>
        <hr/>
    </div>
    </>
    
  );
};

export default Navbar;
