import React,{useEffect} from "react";
import "./Innovation.css";
import groupImage from "../../assets/group.jpg";
import Footer from "../Home/Footer";
const Innovation = () => {
  useEffect(() => {
            document.title='Innovations - GIET University | Odisha | Gunupur'
      },[])
  return (
    <>
      <br/>
      <div>
        <h2 className="aic-title">
         INNOVATIONS
        <span className="underline"></span>
        </h2>
      </div>
      <div className="innovation-wrapper">
        <div className="innovation-container">
          <h2 className="innovation-heading">Innovation & Incubation</h2>
          <div className="innovation-underline"></div>
          <p className="innovation-text">
            The Innovation & Incubation center of GIET University is proactively
            involved in establishing and developing the paradigm of the
            students’ entrepreneurial mindset and the people alike. It strives
            to offer an environment where like-minded individuals can ideate,
            create, communicate, and commercialize the entrepreneurial ventures
            that align with the incubation center’s principles.
          </p>
          <a
            href="https://www.giet.edu/academics/innovation-and-incubation/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="innovation-read-more"
          >
            Read More →
          </a>
          <img
            src={groupImage}
            alt="Innovation Group"
            className="innovation-image"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Innovation;
