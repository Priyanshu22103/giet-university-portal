import React,{useEffect} from "react";
import "./Overview.css";
import image from "../../assets/image.png";
// import Navbar from "./Navbar";
// import Layout from "../Admissions/Layout";
const Overview = () => {
   useEffect(() => {
        document.title = 'Admission Overview - GIET University | Odisha | Gunupur'
      }, []);
  return (
    <>
      <br/>
      <div>
        <h2 className="aic-title">
         OVERVIEW
        <span className="underline"></span>
        </h2>
      </div>
      <div className="overview-container">
      <div className="overview-content">
        <div className="overview-row">
          <img src={image} alt="Group of students" className="overview-image" />
          <div className="overview-box">
            <p>
              <strong>GIET UNIVERSITY</strong> is emerging as a benchmark for
              the continuous journey towards excellence amongst institutions of
              higher education in the field of Science, Technology, Agriculture,
              Management, Economics and Literature across the country. Its
              values of equality, transparency and healthy collaboration have
              been ably guided under the leadership of its founder Dr. Satya
              Prakash Panda & Dr. Chandradhwaj Panda, who are renowned for their
              principled life devoted to public service. GIET UNIVERSITY is
              emerging as a benchmark for the continuous journey towards
              excellence amongst institutions of higher education in the field
              of Science, Technology, Agriculture, Management, Economics and
              Literature across the country. Its values of equality,
              transparency and healthy collaboration have been ably guided under
              the leadership of its founder Dr. Satya Prakash Panda & Dr.
              Chandradhwaj Panda, who are renowned for their principled life
              devoted to public service.
            </p>
          </div>
        </div>
        <div className="overview-paragraph">
          <p>
            The ubiquitous sense of joy and enthusiasm observed in the campus
            bears testimony to the positive learning and living experiences
            enjoyed by every student at <strong>GIET UNIVERSITY</strong>. Ours
            is a place where opportunities for learning as well as recreation
            are maximized and distractions are minimized. Students at GIET
            UNIVERSITY get to feel the taste of a borderless world through a
            heterogeneous group of students from across the globe, which has
            made it as their institution of choice. GIET UNIVERSITY has long
            since been devoted to provide quality education in various
            disciplines of Science, Technology, Agriculture, Management,
            Economics & Literature and of late it has proliferated into
            frontiers of Research as well. The University follows a rigorous
            selection procedure to admit students into various programmes. An
            exclusive entrance examination “GIETEE” (GIET UNIVERSITY ENTRANCE
            EXAMINATION) is conducted for admission to the B.Tech, M.Tech, MBA,
            MCA and B.Sc Agriculture Programmes. Over the decades, GIET
            University has been a magnet for all those aspiring for a better &
            brighter career ahead. Students and Parents value “GIET University”
            for the quality of education, placement and most importantly for a
            disciplined, safe & friendly environment.
          </p>
        </div>
      </div>
    </div>
    </>   
  );
};

export default Overview;
