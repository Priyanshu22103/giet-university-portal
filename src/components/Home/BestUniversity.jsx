import React from 'react';
import './BestUniversity.css';
import smallAward from '../../assets/highlights/buf1.jpg';
import awardMain from '../../assets/highlights/buf2.jpg';
import awardSecondary from '../../assets/highlights/buf3.jpg';
import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";

const BestUniversity = () => {
  return (
    <>
    <TopNavbar/>
    <div className="placement-container">
      <div className="placement-grid">
        {/* Left Small Image */}
        <div className="placement-left">
          <img src={smallAward} alt="Award Presentation" />
        </div>

        {/* Right Content and Images */}
        <div className="placement-right">
          <h2 className="placement-title">
            Best University for Campus Placement in Eastern India
          </h2>
          <p className="placement-description">
            Happy to share with you all that <strong>GIET University, Gunupur</strong> received the award for <strong>Best University for Campus placement in Eastern India</strong> from Shri Pratap Chandra Sarangi, Honourable Minister of State for MSME, Govt. of India in Asia Education Summit & Awards 2020 at Vigyan Bhawan, New Delhi on 27th February 2020.
          </p>
          <div className="placement-image">
            <img src={awardMain} alt="Award Ceremony Main" />
          </div>
          <div className="placement-image">
            <img src={awardSecondary} alt="Award Ceremony Secondary" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BestUniversity;
