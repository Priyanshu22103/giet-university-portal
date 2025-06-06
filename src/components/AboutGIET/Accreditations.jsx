import React,{useEffect} from "react";
import "./Accreditation.css";

const accreditationData = [
  {
    logo: "Naac.jpg",
    title: "NAAC (National Assessment and Accreditation Council)",
    description:
      "Accredited GIET in SECOND Cycle with – the highest grade (CGPA 3.28 on a four point scale). Certificate was awarded again for the years 2015-2020.",
    pdfUrl: "/images/naac.pdf",
  },
  {
    logo: "Dsir.jpg",
    title: "DSIR Recognition",
    description:
      "GIET University is recognized by DSIR (Govt. of India) as an institution for Quality Research.",
      pdfUrl: "/images/dsir.pdf",
  },
  {
    logo: "odishalogo.jpg",
    title: "Government of Odisha Act 2018",
    description: "",
    pdfUrl: "/images/govt.pdf",
  },
  {
    logo: "Ugc.jpg",
    title:
      "Inclusion in the list of Universities as per section 2 (f) of the UGC Act, 1956.",
    description: "",
    pdfUrl: "/images/ugc.pdf",
  },
  {
    logo: "IndianUniversity.jpg",
    title: "Membership of Association of Indian Universities",
    description: "",
    pdfUrl: "/images/aiu.pdf",
  },
  {
    logo: "Nba.jpg",
    title: "NBA Accreditation",
    description:
      "AICTE, Govt. of India FIVE TIMES Accredited Five B.Tech programs ( CSE, MECH, EEE, Biotech and ECE ), for high quality technical education.",
    pdfUrl: "/images/nba.pdf",
  },

];

const Accreditation = () => {
  useEffect(() => {
          document.title='Accreditations - GIET University | Odisha | Gunupur'
    },[])
  return (
    <div className="accreditation-container">
      <h2 className="aic-title">
         ACCREDITATIONS
        <span className="underline"></span>
        </h2>
      {accreditationData.map((item, index) => (
        <div key={index} className="accreditation-card">
          <img src={`images/${item.logo}`} alt={item.title} />
          <div className="accreditation-text">
            {item.pdfUrl ? (
              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                <h4 className="clickable-title">{item.title}</h4>
              </a>
            ) : (
              <h4>{item.title}</h4>
            )}
            {item.description && <p>{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accreditation;
