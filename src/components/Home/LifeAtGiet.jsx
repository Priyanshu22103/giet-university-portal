import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LifeAtGiet.css";

const lifeData = [
  
  {
    id: 1,
    image: require("../../assets/life_at_giet/img1.jpg"),
    title: "Hostel Facilities",
    desc: "Serving as a home for thousands, the hostels at GIETU have been an emotional space...",
  },
  {
    id: 2,
    image: require("../../assets/life_at_giet/img2.jpg"),
    title: "Mega Auditorium",
    desc: "Entertainment is not an option at GIET University, Gunupur but a foremost aspect as stress...",
  },
  {
    id: 3,
    image: require("../../assets/life_at_giet/img3.jpg"),
    title: "GIETU Open Gym",
    desc: "The overall well-being of students and staff is the cornerstone of GIETU. As a result...",
  },
  {
    id: 4,
    image: require("../../assets/life_at_giet/img4.jpg"),
    title: "Elite NCC-University Corps unit of GIETU",
    desc: "About NCC Unit in GIET University: The National Cadet Corps is the Indian Military Cadet...",
  },
  {
    id: 5,
    image: require("../../assets/life_at_giet/img5.jpg"),
    title: "GIETU Badminton Ground",
    desc: "The physical wellness mantra is the best way to increase students' efficiency and productivity. Therefore...",
  },
  {
    id: 6,
    image: require("../../assets/life_at_giet/img6.jpg"),
    title: "GIETU Football Field",
    desc: "Physical development is the ability to live a good life and have fit and fine...",
  },
  {
    id: 7,
    image: require("../../assets/life_at_giet/img7.jpg"),
    title: "GIETU Canteen",
    desc: "The canteen is one of the most happening places inside the campus of GIET University...",
  },
  {
    id: 8,
    image: require("../../assets/life_at_giet/img8.jpg"),
    title: "Unmatched Exceptional Education",
    desc: "GIET University is renowned because it brings for its students one of the best education...",
  },
  {
    id: 9,
    image: require("../../assets/life_at_giet/img9.jpg"),
    title: "Swimming Pool",
    desc: "Swimming Pool Swimming lessons are considered essential in the present times, both as a necessity...",
  },
  {
    id: 10,
    image: require("../../assets/life_at_giet/img10.jpg"),
    title: "GIETU Temple",
    desc: "One of the incredible feats of GIET University Gunupur- a snow-white “Temple” with stunning architecture...",
  },
  {
    id: 11,
    image: require("../../assets/life_at_giet/img11.jpg"),
    title: "Medical Facilities",
    desc: "GIET University has a medical facility right on the university campus with full-time MBBS doctors...",
  },
  {
    id: 12,
    image: require("../../assets/life_at_giet/img12.jpg"),
    title: "Annual Techno Cultural Fest",
    desc: `"GIET University, Gunupur organises "Annual Techno Cultural Fest" every year. It is an ecstatic &..."`,
  },
  {
    id: 13,
    image: require("../../assets/life_at_giet/img13.jpg"),
    title: "Learning Environment",
    desc: "GIET University – India’s one of the most prestigious universities for higher education is well...",
  },
  {
    id: 14,
    image: require("../../assets/life_at_giet/img14.jpg"),
    title: "Accommodation Spaces",
    desc: "Accommodation Space Accommodation is one of the first things that come to a student’s mind...",
  },
  {
    id: 15,
    image: require("../../assets/life_at_giet/img15.jpg"),
    title: "Student Centre",
    desc: "The amazingly curated architectural marvel 'Student Center' has a global-inspired design and is built for...",
  },
  {
    id: 16,
    image: require("../../assets/life_at_giet/img16.jpg"),
    title: "Research & Development",
    desc: "“Research and Development (R&D)” is one of the most distinguished and competitive strengths of GIET...",
  },
  {
    id: 17,
    image: require("../../assets/life_at_giet/img17.jpg"),
    title: "Central Mess",
    desc: "There is no better place with a peaceful environment than GIET University to get the...",
  },
  {
    id: 18,
    image: require("../../assets/life_at_giet/img18.jpg"),
    title: "Gymnasium",
    desc: "GIET University believes that both mental and physical health is necessary for success in life...",
  },
  {
    id: 19,
    image: require("../../assets/life_at_giet/img19.jpg"),
    title: "Cool Parlour",
    desc: "The quickest reach for a student's hangout spot in between classes is the cool parlour...",
  },
  {
    id: 20,
    image: require("../../assets/life_at_giet/img20.jpg"),
    title: "Extra co-curricular faclities",
    desc: "Sports: Sports & Games play a pivotal role in the overall intellectual & physical development...",
  },
  {
    id: 21,
    image: require("../../assets/life_at_giet/img21.jpg"),
    title: "Knowledge Centre",
    desc: "Knowledge is the new rich, arm yourself with it - Toni Payne” has precisely been...",
  },
];

export default function LifeAtGiet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lifeData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(lifeData[(currentIndex + i) % lifeData.length]);
    }
    return cards;
  };

  return (
    <div className="life-section">
      <h2 className="life-title">LIFE AT GIET UNIVERSITY</h2>
      <p className="life-desc">
        The GIET University has a thriving and vibrant population of students from across the Globe...
      </p>

      <div className="card-container">
        {getVisibleCards().map((card, i) => (
          <div
            key={i}
            className={`life-card ${i === 1 ? "life-card--active" : "life-card--inactive"}`}
          >
            <img src={card.image} alt={card.title} className="life-img" />
            <div className="life-content">
              <h3>{card.title}</h3>
              <p className="desc-text">{card.desc}</p>
              <Link to={`/life-at-giet/${card.id}`}>
                <span className="read-moree">Read More →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="dot-container">
        {lifeData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
