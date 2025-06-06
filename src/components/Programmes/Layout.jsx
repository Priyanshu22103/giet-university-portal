import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HomeNavbar from "../Home/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const pageTitle =
    {
      "/school": "SCHOOL",
      "/school/soe": "SCHOOL OF ENGINEERING AND TECHNOLOGY",
      "/authorities": "AUTHORITIES",
      "/innovations": "INNOVATIONS AND INCUBATION",
      "/academic-integrity-committee": "ACADEMIC INTEGRITY COMMITTEE",
      "/iqac": "INTERNAL QUALITY ASSURANCE CELL",
      "/programmes": "PROGRAMMES",
      "/": "PROGRAMMES",
    }[location.pathname] || "";

  const showPageHeader = !!pageTitle;
  const hideNavbar = location.pathname === "/school/soe";
  return (
    <>
      <div>
        <HomeNavbar />
      </div>
      <div className="layout">
        <br/><br/><br/>
        {/* {showPageHeader && (
          <div className="page-header">
            <h1 className="page-title">{pageTitle}</h1>
            <div className="decorative-underline"></div>
          </div>
        )} */}
        <div>
          <div>
        <h1 style={{color:'black',fontSize:'39px',marginLeft:'710px'}}>PROGRAMMES</h1>
      </div>
      <div className="decorative-underline"></div>
        </div>
        {!hideNavbar && <Navbar />}
        {showPageHeader && !hideNavbar && (
          <div className="simple-black-underline"></div>
        )}

        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
