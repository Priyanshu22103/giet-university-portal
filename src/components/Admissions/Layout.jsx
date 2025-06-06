import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import TopNavbar from "../Home/Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import "./Layout.css";
const Layout = ({ children }) => {
  const location = useLocation();
  const pageTitle =
    {
      // "/acad-overview": "ADMISSIONS",
      "/acad-overview": "ADMISSIONS",
      "/gietee": "GIETEE",
      "/application-process": "APPLICATION PROCESS",
      "/programmes-fee-structure": "PROGRAMMES & FEE STRUCTURE",
      "/online-payment": "ONLINE PAYMENT",
      "/admission-assistance": "ADMISSION ASSISTANCE",
      "/faq": "FREQUENTLY ASKED QUESTIONS",
      "/apply-online": "APPLY ONLINE",
      "/hdfc-form": "HDFC CCAVENUE",
    }[location.pathname] || "";

  const showPageHeader = !!pageTitle;
  const hideNavbar =
    location.pathname === "/hdfc-form" || location.pathname === "/sbi-form";
  return (
    <>
      <div>
        <TopNavbar/>
      </div>
      <div>
        ADMISSIONS
      </div>
      <div className="layout">
        <br/><br/>
        {/* {showPageHeader && (
          <div className="page-header">
            <h1 className="page-title">{pageTitle}</h1>
            <div className="decorative-underline"></div>
          </div>
        )} */}
        <div>
          <h1 style={{color:'black',marginLeft:'717px',fontSize:'39px'}}>ADMISSIONS</h1>
          <div className="decorative-underline"></div>
        </div>
        {!hideNavbar && <Navbar />}
        {showPageHeader && !hideNavbar && (
          <div className="simple-black-underline"></div>
        )}
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
