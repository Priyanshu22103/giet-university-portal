import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="admission-nav-container">
      <nav className="admission-nav">  
        <NavLink
          to="/acad-overview"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="/gietee"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          GIETEE
        </NavLink>
         <NavLink
          to="/application-process"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Application Process
        </NavLink>
      
        <NavLink
          to="/programmes-fee-structure"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Programmes & Fee Structure
        </NavLink>
        <NavLink
          to="/online-payment"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Online Payment
        </NavLink>
        <NavLink
          to="/admission-assistance"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Admission Assistance
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Frequently Asked Questions
        </NavLink>
        <NavLink
          to="/apply-online"
          className={({ isActive }) =>
            isActive ? "admission-nav-link active-link" : "admission-nav-link"
          }
        >
          Apply Online
        </NavLink>
        {/* <div className="navbar-underline"></div> */}
      </nav>
    </div>
  );
};

export default Navbar;