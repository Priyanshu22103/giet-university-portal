import React,{useEffect} from "react";
import "./Achievement.css";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const achievements = [
  {
    href: "https://www.giet.edu/achievements/grand-finale-of-smart-india-hackathon-2023/",
    img: "https://www.giet.edu/wp-content/uploads/2024/01/Hackathon-winner.jpg",
    title: "Grand Finale of Smart India Hackathon 2023",
  },
  {
    href: "https://www.giet.edu/achievements/giet-cadets-in-annual-training-camp-1/",
    img: "https://www.giet.edu/wp-content/uploads/2023/06/GIET-Cadets-in-Annual-Training-Camp-1-5.jpeg",
    title: "GIET Cadets in Annual Training Camp-1",
  },
  {
    href: "https://www.giet.edu/achievements/felicitation-on-the-eve-of-celebration-of-world-blood-donors-day-2023/",
    img: "https://www.giet.edu/wp-content/uploads/2023/06/Felicitation-on-the-eve-of-Celebration-of-World-Blood-Donors-Day-20232.jpeg",
    title: "Felicitation on the eve of Celebration of World Blood Donors Day 2023",
  },
    {
    href: "https://www.giet.edu/achievements/undivided-kbk-powerlifting-and-bodybuilding-championship/",
    img: "https://www.giet.edu/wp-content/uploads/2023/04/UNDIVIDED-KBK-Powerlifting-and-Bodybuilding-Championship-2.jpeg",
    title: "UNDIVIDED KBK Powerlifting and Bodybuilding Championship",
  },
  {
    href: "https://www.giet.edu/achievements/paper-published-by-gietans-in-a-national-lavel-seminar/",
    img: "https://www.giet.edu/wp-content/uploads/2023/03/Paper-published-by-GIETANS-in-a-National-Lavel-Seminar-1.jpeg",
    title: "Paper published by GIETANS in a National Lavel Seminar",
  },
  {
    href: "https://www.giet.edu/achievements/gietu-secured-3rd-position-in-the-finale-of-the-national-competition-anveshan-2023/",
    img: "https://www.giet.edu/wp-content/uploads/2023/03/GIETU-secured-3rd-position-in-the-finale-of-the-national-competition-ANVESHAN-2023.jpeg",
    title:
      "GIETU secured 3rd position in the finale of the national competition “ANVESHAN 2023”",
  },
  {
    href: "https://www.giet.edu/achievements/giet-university-has-received-a-best-university-award-for-organising-a-successful-startup-bootcamp-programme-in-odisha/",
    img: "https://www.giet.edu/wp-content/uploads/2022/12/GIET-University-has-received-a-Best-University-award-for-organising-a-successful-startup-bootcamp-programme-in-Odisha3.jpeg",
    title:
      "GIET University has received a “Best University” award for organising a successful startup bootcamp programme in Odisha",
  },
  {
    href: "https://www.giet.edu/achievements/gietu-received-the-prestigious-academic-excellence-award-2022-from-iit-bombay/",
    img: "https://www.giet.edu/wp-content/uploads/2022/08/Prestigious-Academic-Excellence-Award-2022-from-IIT-Bombay.jpeg",
    title: "GIETU received the prestigious Academic Excellence Award 2022 from IIT Bombay",
  },
  {
    href: "https://www.giet.edu/achievements/nirf-india-rankings-2022/",
    img: "https://www.giet.edu/wp-content/uploads/2022/07/NIRF-POSTER.jpg",
    title: "NIRF India Rankings 2022",
  },
  {
    href: "https://www.giet.edu/achievements/swayam-nptel-recognizes-giet-university/",
    img: "https://www.giet.edu/wp-content/uploads/2022/01/GIETU-A-scaled.jpg",
    title: "SWAYAM-NPTEL Recognizes GIET University",
  },
  {
    href: "https://www.giet.edu/achievements/gietians-who-stood-out-with-exemplary-performances-in-icar-aieea-jrf-2021/",
    img: "https://www.giet.edu/wp-content/uploads/2022/01/jrf-opt.jpg",
    title: "GIETians who stood out with exemplary performances in ICAR AIEEA (JRF) 2021",
  },
  {
    href: "https://www.giet.edu/achievements/rank-under-band-excellent-category-ariia/",
    img: "https://www.giet.edu/wp-content/uploads/2021/12/ARIIA-RANK-10th-2021-Certificate.jpeg",
    title: "Rank under Band Excellent Category (ARIIA)",
  },
  {
    href: "https://www.giet.edu/achievements/the-leader-of-campus-placement-in-eastern-india/",
    img: "https://www.giet.edu/wp-content/uploads/2021/09/WhatsApp-Image-2021-08-27-at-18.30.22-1.jpeg",
    title: "‘The Leader of Campus Placement in Eastern India",
  },
  {
    href: "https://www.giet.edu/achievements/the-winners-of-toycathon-2021-digital-edition/",
    img: "https://www.giet.edu/wp-content/uploads/2021/07/The-Winners-of-Toycathon-2021-Digital-Edition2.jpeg",
    title: "The Winners of Toycathon 2021 Digital Edition",
  },
  {
    href: "https://www.giet.edu/achievements/international-education-pride-awards-2021/",
    img: "https://www.giet.edu/wp-content/uploads/2021/03/International-Education-Price-Award.jpg",
    title: "International Education Pride Awards 2021",
  },
  {
    href: "https://www.giet.edu/achievements/best-disciplined-university-for-academics-and-ambience/",
    img: "https://www.giet.edu/wp-content/uploads/2021/02/Best-Disciplined-University-for-Academics-and-Ambience.jpeg",
    title: "Best Disciplined University for Academics and Ambience",
  },
  {
    href: "https://www.giet.edu/achievements/successful-candidates-of-assistant-executive-engineergrade-a-govt-of-odisha/",
    img: "https://www.giet.edu/wp-content/uploads/2020/12/aee-odisha-govt.jpeg",
    title:
      "Successful Candidates of Assistant Executive Engineer(Grade A), Govt of Odisha",
  },
  {
    href: "https://www.giet.edu/achievements/giet-university-has-signed-the-mou-with-one-of-the-largest-solar-brand-goldi-solar-private-limited/",
    img: "https://www.giet.edu/wp-content/uploads/2020/12/ACIC.jpeg",
    title:
      "GIET University has signed the MoU with one of the largest solar brand, Goldi Solar Private Limited",
  },
  {
    href: "https://www.giet.edu/achievements/mou-signing-ceremony-giet-university-gunupur/",
    img: "https://www.giet.edu/wp-content/uploads/2020/11/ess1.jpeg",
    title: "MoU Signing Ceremony, GIET University, Gunupur",
  },
  {
    href: "https://www.giet.edu/achievements/best-university-in-eastern-india-for-campus-placement/",
    img: "https://www.giet.edu/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-7.56.45-PM.jpeg",
    title: "Best University in Eastern India for Campus Placement",
  },
  {
    href: "https://www.giet.edu/achievements/ranking-of-institutions-on-innovation-achievements-ariia-rankings-2020/",
    img: "https://www.giet.edu/wp-content/uploads/2020/08/ariia-ranking-gietu.jpg",
    title: "The Atal Ranking of Institutions on Innovation Achievements (ARIIA) Rankings 2020",
  },
  {
    href: "https://www.giet.edu/achievements/nodal-center-to-host-the-grand-finale-of-sih-software-edition/",
    img: "https://www.giet.edu/wp-content/uploads/2020/07/sid-nodal-center.jpeg",
    title: "Nodal Center to host the Grand Finale of SIH- Software Edition",
  },
  
];

export default function Achievement() {
  useEffect(() => {
    document.title = 'Achievements - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section className="achievement-section">
        <h2 className="aic-title">
         ACHIEVEMENTS
        <span className="underline"></span>
        </h2>
      <div className="achievement-grid">
        {achievements.map(({ href, img, title }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-card"
          >
            <div className="achievement-image-container">
              <img src={img} alt={title} className="achievement-image" />
              <div className="achievement-overlay" />
            </div>
            <p className="achievement-title">{title}</p>
          </a>
        ))}
      </div>
    </section>
      <div>
        <Footer/>
      </div>
    </>
    
  );
}
