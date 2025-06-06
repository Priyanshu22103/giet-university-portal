import React, { useState } from "react";
import "./PlacementTabs.css";
import TrainingPlacementCell from "./TrainingPlacementCell";
import NewsAndActivities from "./NewsAndActivities";
import StudentTestimonials from "./StudentTestimonials";
import PlacementRecords from "./PlacementRecords";
import ParentFeedback from "./ParentFeedBack";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import CompanyTestimonials from "./CompanyTestimonials";

const tabItems = [
  { key: "placement-cell", label: "Placement Cell" },
  { key: "news-activities", label: "News & Activities" },
  { key: "placement-records", label: "Placement Records" },
  { key: "recruiter-testimonials", label: "Recruiter Testimonials Video" },
  { key: "student-testimonials", label: "Student Testimonials" },
  { key: "parent-testimonials", label: "Parent Testimonials" },
];

const PlacementTabs = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].key);
  const renderContent = () => {
    switch (activeTab) {
      case "placement-cell":
        return <TrainingPlacementCell />;
      case "news-activities":
        return <NewsAndActivities />;
      case "placement-records":
        return <PlacementRecords />;
      case "recruiter-testimonials":
        return <CompanyTestimonials />;
      case "student-testimonials":
        return <StudentTestimonials />;
      case "parent-testimonials":
        return <ParentFeedback />;
      default:
        return null;
    }
  };

  return (
    <div className="placement-page">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 style={{ color: "black", marginLeft: "710px", fontSize: "39px" }}>
          PLACEMENTS
        </h1>
      </div>
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
      <div className="placement-tab-content">{renderContent()}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PlacementTabs;
