import React, { useEffect } from "react";
import "./CompanyTestimonials.css";

const testimonials = [
  {
    name: "MAHESH KUMAR",
    title: "Senior Project Manager",
    companyLogo: "/images/invenio.jpg",
    message: "Excellent hospitality very good co-operation and support from all the staff members.",
  },
  {
    name: "RAGHURAJ SINGH BALOT",
    title: "Associate Manager Corporate Recruitment, Vadodara",
    companyLogo: "/images/collabera.jpg",
    message:
      "Phenomenal People, Awesome Ambience Great Talent pool one of the best campuses we have visited. Thanks for helping us trumpeting over talent shortages and really appreciate the way you guys conduct campus drives.",
  },
  {
    name: "MAYANK JINDAL",
    title: "VP (Works)",
    companyLogo: "/images/jkpaper.jpg",
    message:
      "It is an excellent experience to be at GIET, Campus. Such a green and clean environment that everyone will look. Very inspiring. Keep it up.",
  },
  {
    name: "MOHD. FARMOZ BURMAN",
    title: "SAAS Head",
    companyLogo: "/images/milliman.jpg",
    message:
      "It's always been a pleasure coming back to GIET year after year and recruiting the interns who have become great employees. Their contribution has been well acknowledged.",
  },
  {
    name: "VIJAY SHARMA",
    title: "Head HR",
    companyLogo: "/images/diageo.jpg",
    message:
      "Good College, Disciplined students Good hospitality Keep up the good work. Looking forward for the next year.",
  },
  {
    name: "SANJEEV CHOUDHARY",
    title: "Head HR",
    companyLogo: "/images/shivani-locks.jpg",
    message:
      "Infrastructure wise college is very good. Practical Knowledge of the students is also good at the time of campus interview. Hope this will continue.",
  },
];
const recruiterVideos = [
  { title: "HIGH RADIUS", file: "HIGH-RADIUS.mp4" },
  { title: "PRODAPT", file: "PRODAPT.mp4" },
  { title: "HR MEET AT HYDERABAD", file: "hrmeetathyd.mp4" },
  { title: "GR INFRA HR INTERACTION", file: "INFRA.mp4" },
  { title: "DRAPIL INTERACTION", file: "DROPAL.mp4" }
];

const CompanyTestimonials = () => {
  useEffect(() => {
        document.title='Company Testimonials - GIET University | Odisha | Gunupur'
      },[])
  return (
    <div className="testimonial-container">
        <div className="recruiter-video-list">
                <h3>Recruiter Interactions Video</h3>
                {recruiterVideos.map((video, index) => (
                  <a
                    key={index}
                    href={`/videos/${video.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-box"
                  >
                    {video.title}
                    <span className="video-icon">📄</span>
                  </a>
                ))}
              </div>
      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card"
          >
            <div className="testimonial-image">
              <img src={item.companyLogo} alt={item.name} />
            </div>
            <div className="testimonial-text">
              <h3>{item.name}</h3>
              <p className="title"><em>{item.title}</em></p>
              <p className="message">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTestimonials;
