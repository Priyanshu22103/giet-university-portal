import React,{useEffect} from "react";
import "./AwardsAndRanking.css";

const awards = [
  { image: "/images/award1.jpg", description: "FIT INDIA" },
  { image: "/images/award2.jpg", description: "FINAL 400 MGNCRE ONE DISTRICT ONE GREEN" },
  { image: "/images/award3.jpg", description: "Education Excellence 2021" },
  { image: "/images/award4.jpg", description: "Asia Education Summit 2020" },
  { image: "/images/award5.jpg", description: "Achievements Galore" },
  { image: "/images/award6.jpg", description: "ASSOCHAM EduMeet 2019" },
  { image: "/images/award7.jpg", description: "Neat and Clean Campus" },
  { image: "/images/award8.jpg", description: "Core Value Excellence" },
];

const AwardsAndRanking = () => {
  useEffect(() => {
          document.title='Awards And Ranking - GIET University | Odisha | Gunupur'
    },[])
  return (
    <div className="awards-section">
      <h2 className="aic-title">
         AWARDS AND RANKING
        <span className="underline"></span>
        </h2>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <img src={award.image} alt={award.description} />
            <div className="award-overlay">
              {award.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsAndRanking;
