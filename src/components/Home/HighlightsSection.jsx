import React from "react";
import { useNavigate } from "react-router-dom";
import "./HighlightsSection.css";
import videoThumbnail from "../../assets/anthem.jpg";
import culturalNights from "../../assets/dance.jpeg";
import alumniImage from "../../assets/student.jpg";

const HighlightsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="highlights-wrapper">
      <h2 className="sectionn-title">HAPPENINGS</h2>

      <div className="highlights-inner">
        <div className="events-container">
          <div className="grid-section">
            <div className="box box-image">
              <img src={videoThumbnail} alt="Video Thumbnail" />
              <div
                className="play-iconn"
                onClick={() =>
                  window.open("https://www.youtube.com/embed/1Sfdo1CAEow?rel=0", "_blank")
                }
              >
                ▶
              </div>
            </div>

            <div className="box box-image">
              <img src={culturalNights} alt="Cultural Nights" />
            </div>

            <div className="box box-text">
              <div>
                <p className="date">
                  Tuesday<br />07 April 2020
                </p>
                <h3>Cultural Nights</h3>
              </div>
              <span className="read-more" onClick={() => navigate("/cultural-nights")}>
                Read More →
              </span>
            </div>

            <div className="box box-image">
              <img src={alumniImage} alt="International Alumni" />
            </div>

            <div className="box box-text">
              <div>
                <p className="date">
                  Friday<br />21 June 2019
                </p>
                <h3>International Alumni</h3>
              </div>
              <span className="read-more" onClick={() => navigate("/international-alumni")}>
                Read More →
              </span>
            </div>

            <div className="box box-text red-bg">
              <div>
                <p className="date">
                  Sunday<br />28 January 2024
                </p>
                <h3>1st Convocation 2024</h3>
              </div>
              <span className="read-more" onClick={() => navigate("/convocation")}>
                Read More →
              </span>
            </div>
          </div>

          <div className="side-panel">
            <div className="side-box">
              <p className="date">
                Thursday<br />27 February 2020
              </p>
              <h3>Best University for...</h3>
              <p className="desc">
                Happy to share with you all that <strong>GIET University, Gunupur</strong> received the award for <strong>Best University for Campus placement</strong> in...
              </p>
              <span className="read-more" onClick={() => navigate("/best-university")}>
                Read More →
              </span>
            </div>

            <hr className="divider" />

            <div className="side-box">
              <p className="date">
                Wednesday<br />11 March 2020
              </p>
              <h3>Team Gladiators, Mechanical...</h3>
              <span className="read-more" onClick={() => navigate("/team-gladiators")}>
                Read More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="view-all-container">
        <span className="view-all" onClick={() => navigate("/events")}>
          View All →
        </span>
      </div>
    </div>
  );
};

export default HighlightsSection;
