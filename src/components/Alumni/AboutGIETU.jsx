import React from "react";
import "./AboutGIETU.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";

const AboutGIETU = () => {
  return (
    <>
      <TopNavbar />
      <AboutNavbar />

      <div className="overview-container">
        <h2 className="aic-title">
         OVERVIEW
        <span className="underline"></span>
        </h2>

        <div className="overview-box">
          <h2 className="overview-title">
            Alumni reflect the University’s past, represent its present, and link to its future
          </h2>
          <p>Our successful alumni are a light of hope for our students to show them the path of knowledge and fulfilment.</p>
          <p>GIET University has a very well-organized Alumni Association and an officer who continually keeps in touch with the alumni regarding their feedback for improving the teaching-learning process. It encourages a close connection between the accomplished alumni and young budding GIETians.</p>
          <p>Our alumni have a wealth of experience and skills that they share with our current students via talks and meets. They often support students in work placements and help them launch their careers. The alumni also help coordinate the visit of industries where they are working to augment the Placement section’s activities.</p>
          <p>The alumni network of an institution is the most significant source of placement opportunities for the students. Alumni can assist the students in earning good placements at their respective organizations.</p>
          <p>Regular meetings are held every year at different venues to meet the alumni in person to get their feedback. Alumni often mentor the current students in their area of expertise. This engagement between the alumni and current students enhances the student’s experience and gives them a competitive edge in today’s tough job market.</p>
          <p>Alumni of GIET University have played a vital role in creating a positive outlook for the university. They have made us proud repeatedly, and their achievements have brought laurels and promotion to our university.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutGIETU;
