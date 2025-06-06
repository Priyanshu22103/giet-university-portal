// src/components/News.jsx
import React,{useEffect} from "react";
import "./News.css";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const newsData = [
  {
    link: "https://www.giet.edu/news/industrial-visit-to-220-132-33-kv-grid-substation-gunupur/",
    img: "https://www.giet.edu/wp-content/uploads/2025/02/Grid-Visit-1.jpeg",
    date: "13 February 2025 - 13 February 2025",
    title: "Industrial Visit to 220/132/33 KV Grid Substation, Gunupur",
  },
  {
    link: "https://www.giet.edu/news/cyber-hack-2025/",
    img: "https://www.giet.edu/wp-content/uploads/2025/02/hackathon-2025-scaled.jpg",
    date: "08 February 2025 - 09 February 2025",
    title: "Cyber Hack 2025",
  },
  {
    link: "https://www.giet.edu/news/alumni-talk-mr-pradeep-kumar-mishra/",
    img: "https://www.giet.edu/wp-content/uploads/2025/02/pradeep-kumar.jpg",
    date: "07 February 2025 - 07 February 2025",
    title: "Alumni Talk by Mr. Pradeep Kumar Mishra",
  },
  {
    link: "https://www.giet.edu/news/water-tech-hackathon-2024/",
    img: "https://www.giet.edu/wp-content/uploads/2024/08/Flyer.jpeg",
    date: "02 August 2024 - 03 August 2024",
    title: "Water Tech Hackathon-2024",
  },
  {
    link: "https://www.giet.edu/news/international-yoga-day/",
    img: "https://www.giet.edu/wp-content/uploads/2024/06/3.jpg",
    date: "21 June 2024 - 21 June 2024",
    title: "International Yoga Day",
  },
  {
    link: "https://www.giet.edu/news/learning-experience-at-garuda-aerospace/",
    img: "https://www.giet.edu/wp-content/uploads/2024/08/4.jpeg",
    date: "18 June 2024 - 22 June 2024",
    title: "Learning Experience at Garuda Aerospace",
  },
  {
    link: "https://www.giet.edu/news/nsetm-2024/",
    img: "https://www.giet.edu/wp-content/uploads/2024/11/aa.jpg",
    date: "29 April 2024 - 30 April 2024",
    title: "NSETM-2024",
  },
  {
    link: "https://www.giet.edu/news/ctf-competition/",
    img: "https://www.giet.edu/wp-content/uploads/2024/04/IMG-20240403-WA0013-scaled.jpg",
    date: "07 April 2024 - 07 April 2024",
    title: "CTF competition",
  },
  {
    link: "https://www.giet.edu/news/interdepartmental-seminar-report-for-6th-april-2024/",
    img: "https://www.giet.edu/wp-content/uploads/2024/04/Ag.-Interdepartmental-Seminar-Photo-2-held-on-6-april-2024-scaled.jpg",
    date: "06 April 2024 - 06 April 2024",
    title: "Interdepartmental Seminar Report for 6th April, 2024",
  },
  
];

const News = () => {
  useEffect(() => {
               document.title = 'News - GIET University | Odisha | Gunupur'
        }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="news-section">
      <h2 className="aic-title">
         NEWS
        <span className="underline"></span>
        </h2>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <a key={index} href={news.link} className="news-card" target="_blank" rel="noopener noreferrer">
            <img src={news.img} alt={news.title} className="news-image" />
            <div className="news-title">{news.title}</div>
            <div className="news-date">{news.date}</div>
          </a>
        ))}
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default News;
