import React,{useEffect} from "react";
import "./Media.css";

import Navbar from "./Navbar";
import Footer from "../Home/Footer";

const extendedMediaItems = [
  {
    date: "October 9, 2024",
    title: "Honored with Prakruti Mitra Award",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/10/2-3.jpg",
    link: "https://www.giet.edu/media-coverage/honored-with-prakruti-mitra-award/",
  },
  {
    date: "October 2, 2024",
    title: "Mahatma Gandhi Jayanti Celebration 2024",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/10/2-2.jpg",
    link: "https://www.giet.edu/media-coverage/mahatma-gandhi-jayanti-celebration-2024/",
  },
  {
    date: "September 24, 2024",
    title: "Mega Blood Donation Camp, 602 Unit Collected",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/09/IMG-20240925-WA0010.jpg",
    link: "https://www.giet.edu/media-coverage/mega-blood-donation-camp-602-unit-collected/",
  },
  {
    date: "September 17, 2024",
    title: "School of Nursing Holds Oath-taking Ceremony",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/09/1-3.jpg",
    link: "https://www.giet.edu/media-coverage/school-of-nursing-holds-oath-taking-ceremony/",
  },
  {
    date: "September 17, 2024",
    title: "“Ek Ped Maa Ke Naam” Program Held at GIET University",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/09/4-3.jpg",
    link: "https://www.giet.edu/media-coverage/ek-ped-maa-ke-naam-program-held-at-giet-university/",
  },
  {
    date: "September 15, 2024",
    title: "National Engineering Day",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/09/IMG-20240916-WA0009.jpg",
    link: "https://www.giet.edu/media-coverage/national-engineering-day/",
  },
  {
    date: "August 23, 2024",
    title: "National Space Science and Technology Conference",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/5-3.jpg",
    link: "https://www.giet.edu/media-coverage/national-space-science-and-technology-conference/",
  },
  {
    date: "August 23, 2024",
    title: "Global Bio-India Road Show",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/12-2.jpg",
    link: "https://www.giet.edu/media-coverage/global-bio-india-road-show/",
  },
  {
    date: "August 20, 2024",
    title: "GIETU MoU with ICAR-CIWA and ICAR-NRRI",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/5-2.jpg",
    link: "https://www.giet.edu/media-coverage/gietu-mou-with-icar-ciwa-and-icar-nrri/",
  },
  {
    date: "August 13, 2024",
    title: "GIET University Recognized by NIRF",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/2-3.jpg",
    link: "https://www.giet.edu/media-coverage/giet-university-recognized-by-nirf/",
  },
  {
    date: "August 12, 2024",
    title: "National Anti – Ragging Awareness Program",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/3-3.jpg",
    link: "https://www.giet.edu/media-coverage/national-anti-ragging-awareness-program/",
  },
  {
    date: "August 11, 2024",
    title: "2 Days Seminar on Advance Knowledge and Skills for Human Welfare",
    imgSrc: "https://www.giet.edu/wp-content/uploads/2024/08/8-1.jpg",
    link: "https://www.giet.edu/media-coverage/advance-knowledge-and-skills-for-human-welfare/",
  },
];

const Media = () => {
  useEffect(() => {
             document.title = 'Media Coverage- GIET University | Odisha | Gunupur'
      }, []);
  return (
    <>
        <div>
          <Navbar/>
        </div>
        <div className="media-container">
      <h2 className="aic-title">
         MEDIA COVERAGE
        <span className="underline"></span>
        </h2>

     

      <div className="media-grid">
        {extendedMediaItems.map((item, index) => (
          <div className="media-card" key={`ext-${index}`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imgSrc} alt={item.title} className="media-img" />
              <div className="media-caption">
                <div style={{ fontSize: "14px", color: "#888" }}>{item.date}</div>
                {item.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
        <div>
          <Footer/>
        </div>
    </>
    
  );
};

export default Media;
