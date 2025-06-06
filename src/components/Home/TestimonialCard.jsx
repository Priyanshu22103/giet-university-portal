import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TestimonialCard.css";
import defaultAlumni from "../../assets/alumni1.jpg";

const alumniList = [
  {
    name: "SMARANIKA PRIYADARSHINI",
    batch: "2007-2011, AE&IE",
    position: "Founder and Director of 5th Ace Technologies",
    quote:
      "GIET has provided me the required knowledge and skills which helped me in refining myself and being eligible for this entrepreneur world. I feel extremely lucky and proud that I was destined to enroll as the student of GIET.",
    image: defaultAlumni,
  },
];

const Testimonials = () => {
  const [selectedTab, setSelectedTab] = useState("Alumni");
  const [currentAlumni, setCurrentAlumni] = useState(alumniList[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTab === "Alumni") {
      const index = Math.floor(Math.random() * alumniList.length);
      setCurrentAlumni(alumniList[index]);
    }
  }, [selectedTab]);

  const handleViewAll = () => {
    navigate("/testimonials/alumni");
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    navigate(`/testimonials/${tab.toLowerCase()}`);
  };

  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-header">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <div className="testimonials-tabs">
          {["Alumni", "Industries", "Parents"].map((tab) => (
            <span
              key={tab}
              className={`tab-item ${selectedTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {selectedTab === "Alumni" && (
        <div className="alumni-section">
          <div className="alumni-info">
            <div className="alumni-photo-wrapper">
              <div className="alumni-photo">
                <img src={currentAlumni.image} alt={currentAlumni.name} />
              </div>
            </div>
            <h3>{currentAlumni.name}</h3>
            <p className="batch">{currentAlumni.batch}</p>
            <p className="position">{currentAlumni.position}</p>
          </div>
          <div className="alumni-quote">
            <span className="quote-mark">“</span>
            <p>{currentAlumni.quote}</p>
            <span className="quote-mark right">”</span>
            <span className="view-all"  role="link" onClick={handleViewAll}>
                View All →
            </span>

          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;