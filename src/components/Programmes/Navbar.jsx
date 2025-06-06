import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="program-nav-container">
      <nav className="program-nav">
  
        <NavLink
          to="/school"
          className={({ isActive }) =>
            isActive ? "program-nav-link active-link" : "program-nav-link"
          }
        >
          Schools
        </NavLink>
        <NavLink
          to="/authorities"
          className={({ isActive }) =>
            isActive ? "program-nav-link active-link" : "program-nav-link"
          }
        >
          Authorities
        </NavLink>
        <NavLink
          to="/innovations"
          className={({ isActive }) =>
            isActive ? "program-nav-link active-link" : "program-nav-link"
          }
        >
          Innovations
        </NavLink>
        <NavLink
          to="/academic-integrity-committee"
          className={({ isActive }) =>
            isActive ? "program-nav-link active-link" : "program-nav-link"
          }
        >
          Academic Integrity Committee (AIC)
        </NavLink>
        <NavLink
          to="/iqac"
          className={({ isActive }) =>
            isActive ? "program-nav-link active-link" : "program-nav-link"
          }
        >
          IQAC
        </NavLink>
        {/* <div className="navbar-underline"></div> */}
      </nav>
    </div>
  );
};

export default Navbar;