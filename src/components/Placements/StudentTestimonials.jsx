import React,{useEffect} from 'react';
import './StudentTestimonials.css';

const testimonials = [
  {
    name: "CAMPUS WINNER | JINDAL POLYFILMS LTD",
    image: "/images/a1.jpg",
    link: "https://www.youtube.com/embed/QpuMPtizTjI"
  },
  {
    name: "Ms. Priyanka Acharya | INFOBAHN",
    image: "/images/a2.jpg",
    link: "https://www.youtube.com/embed/jgKfbZ9lPaY"
  },
  {
    name: "Ms. Alpana Kumari | INFOBAHN",
    image: "/images/a3.jpg",
    link: "https://www.youtube.com/embed/l7suLBIRWYU"
  },
  {
    name: "CAMPUS WINNER | JINDAL POLYFILMS LTD",
    image: "/images/a4.jpg",
    link: "https://www.youtube.com/embed/sqCac1n5mdI"
  },
  {
    name: "CAMPUS WINNERS | MILLIMAN",
    image: "/images/a5.jpg",
    link: "https://www.youtube.com/embed/WoqjR5kODd4"
  },
  {
    name: "CAMPUS WINNERS | MINDTREE",
    image: "/images/a6.jpg",
    link: "https://www.youtube.com/embed/nDJNLxC3sEk"
  },
  {
    name: "Mr. Keshab Kumar Jha | MILLIMAN INDIA",
    image: "/images/a7.jpg",
    link: "https://www.youtube.com/embed/aAeoDrSMDkk"
  },
  {
    name: "Mr. Akash | PIAGGIO",
    image: "/images/a8.jpg",
    link: "https://www.youtube.com/embed/XuJR4z2IahY"
  },
  {
    name: "Ms.Vandana Kumari | INVENIO",
    image: "/images/a9.jpg",
    link: "https://www.youtube.com/embed/Laergpe4uyE"
  },
  {
    name: "Mr. Sourav Dutta | MILLIMAN INDIA",
    image: "/images/a10.jpg",
    link: "https://www.youtube.com/embed/KtRGdUpNXVQ"
  },
];

const StudentTestimonials = () => {
  useEffect(() => {
      document.title='Student Testimonials - GIET University | Odisha | Gunupur'
    },[])
  return (
    <section className="testimonials-section">
      <h2>Student Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <a href={t.link} target="_blank" rel="noopener noreferrer" className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} />
            <span className="testimonial-play">
              <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="none"/><polygon points="26,20 48,32 26,44"/></svg>
            </span>
            <div className="testimonial-overlay">
              <p>{t.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
