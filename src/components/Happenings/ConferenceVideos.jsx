import React,{useEffect} from 'react';
import './ConferenceVideos.css';

import Navbar from "./Navbar";
import Footer from "../Home/Footer";

const videos = [
  {
    title: 'ADVANCEMENT OF BIOTECHNOLOGY',
    img: 'https://www.giet.edu/wp-content/uploads/2022/02/ADVANCEMENT-OF-BIOTECHNOLOGY.jpg',
    url: 'https://www.youtube.com/embed/1fnwoc6fmkg',
  },
  {
    title: 'COVID-19 EMERGENCE I RESURGENCE AND ITS CONTROL',
    img: 'https://www.giet.edu/wp-content/uploads/2022/02/COVID-19-EMERGENCE-RESURGENCE-AND-ITS-CONTROL.jpg',
    url: 'https://www.youtube.com/embed/_hpmW8JloZs',
  },
  {
    title: 'Recent Trends in IOT and Blockchain',
    img: 'https://www.giet.edu/wp-content/uploads/2022/02/Recent-Trends-in-IOT-and-Blockchain.jpg',
    url: 'https://www.youtube.com/embed/TjOHUY_gYkY',
  },
  {
    title: 'Smart & Sustainable Technologies',
    img: 'https://www.giet.edu/wp-content/uploads/2022/02/Smart-Sustainable-Technologies.jpg',
    url: 'https://www.youtube.com/embed/OdkqRnzxBaA',
  },
];

export default function ConferenceVideos() {
  useEffect(() => {
         document.title = 'Conference Videos - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
       <div className="conference-container">
      <h2 className="aic-title">
         INTERNATIONAL CONFERENCE
        <span className="underline"></span>
        </h2>
      <br/><br/>
      <div className="video-row">
        {videos.slice(0, 3).map((video, index) => (
          <a
            key={index}
            className="video-card"
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="video-thumb">
              <img src={video.img} alt={video.title} />
              <div className="video-overlay">
                <span className="play-icon">▶</span>
                <p>{video.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="video-row left-align">
        <a
          className="video-card"
          href={videos[3].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-thumb">
            <img src={videos[3].img} alt={videos[3].title} />
            <div className="video-overlay">
              <span className="play-icon">▶</span>
              <p>{videos[3].title}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
   
  );
}
