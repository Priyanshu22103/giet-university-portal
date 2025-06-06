import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
        <br/><br/><br/><br/>
      <div style={{marginLeft:'760px'}}>
        <h1 style={{color:'black',fontSize:'39px'}}>ALUMNI</h1>
      </div>
       <div className="decorative-underline"></div>
      <div className="about-nav-container">
        <nav className="about-nav">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/ouralumni"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Our Alumni
          </NavLink>
          <NavLink
            to="/alumnimeet"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Alumni Meet
          </NavLink>
          <NavLink
            to="/alumnitestimonials"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Alumni Testimonials
          </NavLink>
          <NavLink
            to="/alumniinteraction"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Alumni Interaction
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            Achievements
          </NavLink>
          <NavLink
            to="/internationalalumni"
            className={({ isActive }) =>
              isActive ? "about-nav-link active-link" : "about-nav-link"
            }
          >
            International Alumni
          </NavLink>
        </nav>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};
export default Navbar;
