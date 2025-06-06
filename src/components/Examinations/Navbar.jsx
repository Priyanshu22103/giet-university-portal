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
      <br/><br/><br/><br/>
      <div style={{color:'black',marginLeft:'686px',fontSize:'20px'}}>
        <h1>EXAMINATIONS</h1>
      </div>
      <div className="decorative-underline"></div>
      <div className="about-nav-container">
      <nav className="about-nav">
        <NavLink to="/Notice" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          Notice
        </NavLink>
        <NavLink to="/exam-Downloads" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          Downloads
        </NavLink>
        <NavLink to="/Instruction" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          Instruction
        </NavLink>
        <NavLink to="/CGPACalculator" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          CGPA Calculator
        </NavLink>
        <NavLink to="/DocumentVerification" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          Document Verification
        </NavLink>
        <NavLink to="/exam-contactUs" className={({ isActive }) => isActive ? "about-nav-link active-link" : "about-nav-link"}>
          Contact Us
        </NavLink>
      </nav>
    </div>
    </>
    
  );
};

export default Navbar;
