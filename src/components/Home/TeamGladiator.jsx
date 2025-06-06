import React from 'react';
import './TeamGladiator.css';
import smallGladiator from '../../assets/highlights/tg1.jpg';
import bigGladiator from '../../assets/highlights/tg2.jpg';

import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";

const TeamGladiator = () => {
  return (
    <>
    <TopNavbar/>
    <div className="Gladiator-container">
      <div className="Gladiator-grid">
        {/* Left Small Image */}
        <div className="Gladiator-left">
          <img src={smallGladiator} alt="Award Presentation" />
        </div>

        {/* Right Content and Images */}
        <div className="Gladiator-right">
          <div className="Gladiator-image">
            <img src={bigGladiator} alt="Award Ceremony Main" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TeamGladiator;
