import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
        <h1 className="vision-main-heading">VISION & MISSION</h1>
      <div className="vision-heading-underline"></div>
      <div className="section vision-section">
        <img src="/images/vision.jpg" alt="Vision" className="vision-jpg" />
        <div className="text-block">
          <h2 className="heading">VISION</h2>
          <p className="text">
            To be a renowned and Globally Recognized University giving importance to academic excellence with latest technology, Research, Innovation and Entrepreneurial Attitude.
          </p>
        </div>
      </div>

      <div className="section mission-section">
        <div className="text-block">
          <h2 className="heading">MISSION</h2>
          <ul className="text">
            <li>To create innovative and committed work force to cater to the societal, environmental and economic needs of the Nation.</li>
            <li>To promote Education and Research Globally at par with the international standards.</li>
            <li>To prepare the future leaders with latest skills befitting to become Entrepreneurs or Employable.</li>
            <li>To support and uplift the meritorious students of this Tribal Area to represent as an Ambassador in National and International Platforms.</li>
          </ul>
        </div>
        <img src="/images/mission.jpg" alt="Mission" className="mission-jpg" />
      </div>
    </div>
  );
};

export default VisionMission;