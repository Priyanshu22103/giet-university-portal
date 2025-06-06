import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import TopNavbar from "../Home/Navbar.jsx";
// import Footer from "../Home/Footer.jsx";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div>
          <TopNavbar/>
      </div>
      <br /><br /><br />
      <div>
        <h1 style={{color:'black',fontSize:'39px',marginLeft:'710px'}}>HAPPENINGS</h1>
      </div>
      <div className="decorative-underline"></div>
      <div className="about-nav-container">
      <nav className="about-nav">
        <Link to="/events" className={`about-nav-link ${location.pathname === "/events" ? "active-link" : ""}`}>Events</Link>
        <Link to="/conference" className={`about-nav-link ${location.pathname === "/conference" ? "active-link" : ""}`}>Conference Videos</Link>
        <Link to="/hppn-achievements" className={`about-nav-link ${location.pathname === "/hppn-achievements" ? "active-link" : ""}`}>Achievements</Link>
        <Link to="/news" className={`about-nav-link ${location.pathname === "/news" ? "active-link" : ""}`}>News</Link>
        <Link to="/media" className={`about-nav-link ${location.pathname === "/media" ? "active-link" : ""}`}>Media Coverage</Link>
        <Link to="/notices" className={`about-nav-link ${location.pathname === "/notices" ? "active-link" : ""}`}>Notices</Link>
        <Link to="/announcements" className={`about-nav-link ${location.pathname === "/announcements" ? "active-link" : ""}`}>Announcements</Link>
        <Link to="/campus-flash" className={`about-nav-link ${location.pathname === "/campus-flash" ? "active-link" : ""}`}>Campus Flash</Link>
        {/* <Link to="/life-at-gietu" className={`about-nav-link ${location.pathname === "/life-at-gietu" ? "active-link" : ""}`}>Life At GIETU</Link> */}
      </nav>
    </div>
      
    </>
    
  );
};

export default Navbar;
