import React, { useState } from "react";
import "./Navbar.css";
import AboutGIETU from "./AboutGIETU";
import VisionMission from "./VisionMission";
import WhyGIETU from "./WhyGIETU";
import UniversityOfficers from "./UniversityOfficers";
import Leadership from "./Leadership";
import Accreditations from "./Accreditations";
import CSR from "./CSR";
import AwardsRanking from "./AwardsRanking";
import Navbar1 from "../Home/Navbar";
import Footer from "../Home/Footer";

const tabItems = [
  { key: "about-gietu", label: "About GIETU", component: <AboutGIETU /> },
  { key: "vision-mission", label: "Vision & Mission", component: <VisionMission /> },
  { key: "why-gietu", label: "Why GIETU", component: <WhyGIETU /> },
  { key: "university-officers", label: "University Officers", component: <UniversityOfficers /> },
  { key: "leadership", label: "Leadership", component: <Leadership /> },
  { key: "accreditations", label: "Accreditations", component: <Accreditations /> },
  { key: "csr", label: "CSR", component: <CSR /> },
  { key: "awards-ranking", label: "Awards & Ranking", component: <AwardsRanking /> },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about-gietu");
  const currentTab = tabItems.find(tab => tab.key === activeTab);

  return (
    <div style={{backgroundColor:'white'}}>
      <Navbar1 />
      <br /><br /><br /><br/>
      <div><h1 style={{color:'black',marginLeft:'700px',fontSize:'39px'}}>ABOUT GIETU</h1></div>
      <div className="decorative-underline"></div>
      <div className="about-nav-container">
        <nav className="about-nav">
          {tabItems.map((tab) => (
            <button
              key={tab.key}
              className={
                activeTab === tab.key
                  ? "about-nav-link active-link"
                  : "about-nav-link"
              }
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="about-tab-content">
        {currentTab.component}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutSection;


