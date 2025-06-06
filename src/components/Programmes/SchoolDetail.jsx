import React from "react";
import { useParams } from "react-router-dom";
import "./SchoolDetail.css";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";

import soe from "../../assets/soe.jpg";
import soa from "../../assets/soa.jpg";
import som from "../../assets/som.jpg";
import sos from "../../assets/sos.jpg";
import soh from "../../assets/soh.jpg";
import son from "../../assets/son.jpg";

// Helper to convert markdown-style text to JSX
const parseDescription = (text) => {
  return text
    .split("\n\n")
    .map((para, idx) => (
      <p key={idx}>
        {para
          .split("\n")
          .map((line, i) =>
            line.startsWith("**") && line.endsWith("**") ? (
              <strong key={i}>{line.replace(/\*\*/g, "")}</strong>
            ) : (
              line
            )
          )
          .reduce((acc, curr, i) =>
            acc === null ? curr : [acc, <br key={i} />, curr],
            null
          )}
      </p>
    ));
};

// Use imported images here, not string paths
const schoolData = {
  soe: {
    title: "School of Engineering and Technology",
    image: soe,
    descriptionTitle: "About Us",
    descriptionText: `
      The changing landscape of the Engineering and Technology sector in India needs more innovation, creativity, and reform. School of Engineering and Technology at GIET University has been established with a mission and objective to pursue high-quality research and impart research-led education in emerging multi-disciplinary areas encompassing science, engineering, and technology. Academic programs in prominent engineering and technical fields ought to have creativity and flexibility to explore beyond what classrooms can provide. That is what the School of Engineering and Technology at GIETU provides.

      The department here incorporates an Outcome-Based Education (OBE) approach with a partial Choice Based Credit System (CBCS) curriculum with innovative teaching and learning paradigms. There are several project-based courses like Python, Computer-Aided Design (CAD), rapid prototyping, entrepreneurship, case study based on courses, and control engineering. Innovative Learning Paradigms, partnerships, and collaborations have enabled the Department of Engineering at GIETU to provide a curriculum of excellent academic talent. Here, at GIET University, the academicians believe in learning by doing. The focus is on total hands-on activity-based exercises that enhance one's creativity, thinking, and innovation. The value-based approach in education goes beyond the typical curriculum of Engineering.
    `,
  },
  soa: {
    title: "School of Agriculture",
    image: soa, 
    descriptionTitle: "About Us",
    descriptionText: `
      School of Agriculture, GIET University, Gunupur, Rayagada was established in the year 2017 with an objective of promoting teaching, research and extension activities in agriculture in the backward districts of South Odisha. Located on the foot hills of Eastern Ghats with an intake capacity of 60 students during 2017 and subsequently increased to 180 from 2019 onwards. The campus boasts of a picturesque landscape and provides all the facilities that young budding agro-professionals aspire to dream of.

      With the advancement of research across diverse fields, agricultural research too will emerge as a demanding field. The research in agriculture will lead to better production and enough food for the ever-increasing population of India. Simultaneously, it will aim to sustain the entire system of food production and consumption. The School of Agriculture (SoAg) at GIET University is established precisely for that cause!
    `,
  },
  som: {
    title: "School of Management Studies",
    image: som,
    descriptionTitle: "About Us",
    descriptionText: ` 
      The School of Management Studies (SMS) at GIETU aims precisely the same. It extends itself into the intersection of business and society, facilitating sustainability, financial stability, the role of women, healthcare, education, and human resource management. It trains its students to be deeply connected and affected by world issues by equipping them with resources, knowledge base, networks, and corporate interactions for a positive change.

      Where to study MBA?  
      Any graduate who wants to get management education wants to get into the best business school. In this aspiration, everyone appears for CAT to get into IIMs, Xavier’s, XLRI, ISB, etc. But hardly 0.02% of aspirants get placed after years of hard work. The question is what can be done. At this point of time, one needs to understand the objective of management education & how the best management education can be imparted.  

      Management education is the most dynamic field where the candidate is prepared to take over the day-to-day challenges faced by the industry. It must be imparted with a unique blend of classroom teaching, industrial exposure including practical & experiential learning.  

      This is what makes the difference between a great business school & an average one. Some key parameters to judge the credibility of the institute are:  
      - Its association with market leaders in business & management  
      - Accreditations through various government agencies  
      - Placement record  
      - Campus infrastructure  
      - Faculty profile  

      GIET University’s School of Management Studies (SMS) stands perfect on all these parameters.  
      - SMS has various associations with national & international leaders in management and business. For example – All India Management Association, NASSCOM, ASSOCHAM, Business & Management Chronicles, etc.  
      - SMS is accredited by AICTE & NAAC.  
      - It has an excellent placement track record with top MNCs from India and the world. Our alumni proudly contribute to companies like Coca Cola, Tech Mahindra, Axis Bank, SBI, Accenture, Jindal Steels, Berger Paints, and more.  

      Campus infrastructure at SMS is unmatched. We proudly invite you to visit the campus and experience it for yourself. Features include excellent computer labs, a multi-floor library open 24x7, well-equipped smart classrooms, 24x7 WiFi, cafeteria, sports complex, various sports grounds, a theatre, and more.  

      In short, SMS is one of the best choices for students looking to build a career in the management field.
    `,
  },
  sos: {
    title: "School of Sciences",
    image: sos,
    descriptionTitle: "About Us",
    descriptionText: ` 
      The School of Sciences at GIET University offers two-year Post Graduation courses in disciplines such as Physics, Chemistry, Mathematics, Biotechnology, and Life Sciences. It accommodates diverse interests in research areas like biophysics, computational science, and other domains that modern science embraces. The department has delivered remarkable semester projects backed by both internal and external funding across various departments and faculties.  

      The laboratories are state-of-the-art—equipped with advanced technologies and designed for Research and Development activities.  

      Teaching at the School of Sciences is enhanced with the use of Information and Communication Technology (ICT), allowing deeper and broader communication and knowledge dissemination. The integration of the latest tools, supported by skilled faculty and an Entrepreneurial Development Cell (EDP Cell), enriches both pedagogy and research-driven teaching methods.  

      The department also supports both on-campus laboratories and off-campus biodiversity and field research initiatives.  

      The Department of Mathematics, in particular, expands opportunities in mathematical and computational research, addressing challenges across natural sciences and engineering applications.
    `,
  },
  soh: {
    title: "School of Humanities and Social Sciences",
    image: soh,
    descriptionTitle: "About Us",
    descriptionText: `
      The School of Humanities and Social Sciences is a distinctive component of GIET University that sets it apart from other engineering-focused institutions in the region. This school provides students with an enriching academic experience by integrating scientific knowledge with courses in Economics, Education, and English.
 
      Addressing the needs of a rapidly evolving world, the School of Humanities and Social Sciences equips students with essential skills required across diverse fields such as business, psychology, education, and law.  

      Unlike traditional academic divisions, the programs here adopt a holistic and interdisciplinary approach—breaking away from narrow disciplinary boundaries to foster broader intellectual development.

      GIET University offers a wide range of undergraduate, postgraduate, and doctoral programs under this school, empowering students with a robust, versatile education in humanities and social sciences.
    `,
  },
  son: {
    title: "School of Nursing",
    image: son,
    descriptionTitle: "About Us",
    descriptionText: `  
      According to the National Health Policy of 2002, the B.Sc. Nursing programme is a four-year undergraduate degree aimed at fostering the values, competency, and critical care skills required for the professional practice of nursing and midwifery.

      The program's structured curriculum empowers students to address the health concerns of individuals, society, and the nation effectively. It emphasizes a code of moral principles and ethical behavior, ensuring students fulfill their personal, social, and professional duties with responsibility and integrity.  
      By doing so, the School of Nursing at GIET University prepares students to be skilled healthcare professionals and responsible citizens who contribute meaningfully to national health goals.
    `,
  },
};

const SchoolDetail = () => {
  const { id } = useParams();
  const school = schoolData[id];

  if (!school) {
    return <div className="school-detail-error">School not found.</div>;
  }

  return (
    <>
      <div className="school-detail-container">
        <div className="school-detail-header">
          <h2>{school.title}</h2>
        </div>
        <div className="school-detail-body">
          <img
            src={school.image}
            alt={school.title}
            className="school-detail-image"
          />
          <div className="school-detail-description">
  <h3 className="description-title">{school.descriptionTitle}</h3>
  {parseDescription(school.descriptionText)}
</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolDetail;
