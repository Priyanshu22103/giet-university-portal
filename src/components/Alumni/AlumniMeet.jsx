import React from "react";
import "./AlumniMeet.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
function WhyGIETU() {
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
      <div className="about-gietu">
        <h2 className="aic-title">
         ALUMNI MEET
        <span className="underline"></span>
        </h2>
        {/* Top Banner Section */}
        <section className="top-banner" >
          {/* style={{display:'flex',justifyContent:'center',alignItems:'center'}} */}
          <div className="top-text">
            <h2>Celebrating Unbreakable Bonds and Unforgettable Journeys</h2>
            <p>
              Sometimes, somewhere the past seems to fade away although there
              are some special moments of nurturing and faith that prevails till
              the last breath filled with joy and glory. The GIET University
              figures out such overwhelming flash and organizes Alumni reunion
              meets frequently.
            </p>
            <p>
              Alumni meet is a rare opportunity for both alumni and alma mater
              to walk down their memory lanes, recreate moments and to celebrate
              with all the familiar faces and locations that they have missed
              over the past many years.
            </p>
          </div>

          <div className="head" style={{}}>
            <h2>Alumni meet conducted at various chapters</h2>
          </div>

          <img
            src="/images/ALUMNI-CHART-UPDATED.jpg"
            alt="Alumni Chapter Meet Chart"
            className="banner-img"
          />
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default WhyGIETU;
