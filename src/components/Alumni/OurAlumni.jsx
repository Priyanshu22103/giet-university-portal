import React, { useState,useEffect } from "react";
import "./OurAlumni.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
const leaders = [
  {
    name: "Mr. Ranjan Singh",
    title:
      "Batch: 2004-08, Associate Director at Simplilearn, Bangalore, Karnataka, India",
    image: "/images/alumni1.jpg",
    full: "Gandhi Institute of Engineering and Technology (GIET) is my alma mater, and I am proud to have studied there. It is a renowned educational institution known for its excellence in engineering and technology education. The campus provided a conducive learning environment with modern facilities and experienced faculty members. Throughout my time at GIET, I gained valuable knowledge, skills, and cherished memories. The institute's focus on practical learning and industry exposure prepared me well for my career. I am grateful for the opportunities and education I received at GIET, which have played a significant role in shaping my professional journey.",
  },
  {
    name: "Mr. Priyabrata Tripathy",
    title:
      "Batch: 2006, Asst. General Manager, Quality Mgt. in L&T Green Mfg. & Development, Mumbai",
    image: "/images/alumni2.jpg",
    full: "Whatever I am today in my professional career, I would always remain indebted to my college for the platform it gave me to enter into the industry. I wish my college keeps growing and makes an impact in the education sector. Utilise your study days well by always trying to correlate what you read in the books and what practically happens on the field. This will help you stay updated with industry trends and help you grab good opportunities when you pass out of college. All the best.",
  },
  {
    name: "Pramod Kumar Bag",
    title: "2015-19, SHIFT Incharge at J K Paper limited, Rayagada",
    image: "/images/alumni3.jpg",
    full: "Good platform to interaction with Juniors,seniors and our beloved Professors. Prove Yourself better the the best in this competitive world,incase you don't prove better than the best then try to leave atleast different from the rest.",
  },
  {
    name: "Saumyasri Satyajit Kar",
    title: "2013-17, Shift incharge at PI INDUSTRIES LTD, Bharuch",
    image: "/images/alumni4.jpg",
    full: "One of the best environment for growth of the students. Do hard work and success will always run behind you.2013-17.",
  },
  {
    name: "Mr. Parashmani Das",
    title: "2008, Application Consultant at IBM, Gachibowli, Hyderabad",
    image: "/images/alumni5.jpg",
    full: "I am very much thankful to my college for giving me an opportunity and stepping stone in the early stage of my career. Spend as much as time to fine tune your programming skills and try to match your steps to industry standard emerging technologies.",
  },
  {
    name: "Ms. V. Anuradha",
    title:
      "BBA (2017-2020), MBA ( 2020-2022), Junior Analyst - Performance Management at Deloitte",
    image: "/images/alumni6.jpg",
    full: "My Journey is A Journey Par Excellence 2017 to 2022. Proud to be a part of the Giet family. A nostalgic feeling when I enter this premises full of purity and greenery. Message to my Juniors: Believe in your skills and try to develop a positive attitude towards your college. Be more confident and dedicated towards your career goals.",
  },
  {
    name: "Mr. Anupam Kumar",
    title:
      "2004-2008, Deputy Manager at Heavy Engineering Corporation Ltd (A govt of INdia Enterprise), Ranchi, Jharkhand",
    image: "/images/alumni7.jpeg",
    full: "I'm grateful for the education and experiences that I received at GIET. It holds a special place in my heart, and it's always a joy to come back. Being a part of the GIET, I wouldn't be where I am today.2004-2008.",
  },
  {
    name: "Mr. Navneet Kumar",
    title: "2003 - 2007, Engineering Manager at Beckman Coulter",
    image: "/images/alumni8.jpg",
    full: "Visiting GIET is like 'Coming Home', Such an Awesome experience.. Seeing GIET and GIETians conquering new Heights is Phenomenal. All the very Best.",
  },
  {
    name: "Abhaya Kumar Acharya",
    title: "2011, Tata Consultancy Services, London, UNITED KINGDOM",
    image: "/images/alumni9.jpg",
    full: "I am grateful to this college for all the sweet and sour memories that I have had with and that have played a crucial role of shaping me into what I am today.",
  },
];

const Leadership = () => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
          document.title='Our Alumni - GIET University | Odisha | Gunupur'
    },[])
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
      <div className={`leadership-container ${selected ? "blurred" : ""}`}>
        <h2 className="aic-title">
         OUR ALUMNI
        <span className="underline"></span>
        </h2>
        <div className="card-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <img src={leader.image} alt={leader.name} />
              <h3>{leader.name}</h3>
              <h4>{leader.title}</h4>
              <button onClick={() => setSelected(leader)}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-button" onClick={() => setSelected(null)}>
              ×
            </button>
            <div className="modal-content">
              <img src={selected.image} alt={selected.name} />
              <h3>{selected.name}</h3>
              <h4>{selected.title}</h4>
              <p>{selected.full}</p>
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Leadership;
