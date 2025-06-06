import React from "react";
import "./Achievements.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
const videoData = [
  {
    image: "/images/achieve1.png",
    name: "Lipsarani Pradhan",
  },
  {
    image: "/images/achieve2.jpeg",
    name: "Mr. Sambit Sahoo",
  },
  {
    image: "/images/achieve3.jpeg",
    name: "Mr. Prafulla Kumar Chhura",
  },
  {
    image: "/images/achieve4.jpg",
    name: "Dr. Jyoti Prakash Mohanty",
  },
  {
    image: "/images/achieve5.jpg",
    name: "Pallabi Nayak",
  },
  {
    image: "/images/achieve6.jpg",
    name: "Sudhansu Behera",
  },
  {
    image: "/images/achieve7.jpg",
    name: "Suchitra Kumari",
  },
  {
    image: "/images/achieve8.jpg",
    name: "Suchita Kumari",
  },
  {
    image: "/images/achieve9.jpg",
    name: "Bishnu Prasad Mahapatra",
  },
];

const VideoGallery = () => {
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
      <div>
        <h2 className="aic-title">
         ALUMNI ACHIEVEMENTS
        <span className="underline"></span>
        </h2>

        <div className="video-gallery">
          {videoData.map((item, index) => (
            <div className="video-cards" key={index}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="date-bar">{item.date}</div>
              </div>
              <div className="name-bar">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default VideoGallery;
