import React from "react";
import "./AlumniTestimonials.css";
import { FaPlay } from "react-icons/fa";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
const videos = [
  {
    name: "Mr. Navneet Kumar",
    company: "Beckman Coulter, Bangalore",
    src: "/images/video1.jpg",
    url: "//www.youtube.com/embed/HpGUOfG2sWk",
  },
  {
    name: "Mr. Amitabh Patra",
    company: "Manager at KPMG, Bangalore",
    src: "/images/video2.jpg",
    url: "//www.youtube.com/embed/C0qzwQT3SOo",
  },
  {
    name: "Mr. Somen Kumar Prusty",
    company: "TCS",
    src: "/images/video3.jpg",
    url: "//www.youtube.com/embed/1pzFlpv2nqo",
  },
  {
    name: "Arpita Patra",
    company: "ABB INDIA LTD",
    src: "/images/video4.jpg",
    url: "//www.youtube.com/embed/Q-GXN3V8lWA",
  },
  {
    name: "Nikki Singh",
    company: "INVENIO | COGNIZANT",
    src: "/images/video5.jpg",
    url: "//www.youtube.com/embed/DwoPNOU5iJ0",
  },
  {
    name: "B. Vennela",
    company: "Campus Winner | Wipro",
    src: "/images/video6.jpg",
    url: "//www.youtube.com/embed/elyBC9RENJY",
  },
  {
    name: "Mr. Sujan Sekhar",
    company: "ACS Publications",
    src: "/images/video7.jpg",
    url: "//www.youtube.com/embed/iWWB7I6-iFI",
  },
  {
    name: "Mr. Dhiraj Agarwal",
    company: "",
    src: "/images/video8.jpg",
    url: "//www.youtube.com/embed/ZxYNYxHfHCI",
  },
  {
    name: "Mr. Jakir Ahemed",
    company: "",
    src: "/images/video9.jpg",
    url: "//www.youtube.com/embed/VvIW1ELXVQs",
  },
];

const UniversityOfficers = () => {
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
      <div className="university-officers">
        <h2 className="aic-title">
         ALUMNI TESTIMONIALS
        <span className="underline"></span>
        </h2>

        <div className="testimonial-gallery">
          {videos.map((video, index) => (
            <div
              className="video-carded"
              key={index}
              onClick={() => window.open(video.url, "_blank")}
            >
              <img src={video.src} alt={video.name} />
              <div className="overlay">
                <FaPlay className="play-icon" />
                <div className="text">
                  <h4>{video.name}</h4>
                  <p>{video.company}</p>
                </div>
              </div>
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

export default UniversityOfficers;
