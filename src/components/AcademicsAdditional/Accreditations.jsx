import React from "react";
//import "./Accreditation.css";

const accreditationData = [
  {
    logo: "naac.png",
    title: "NAAC (National Assessment and Accreditation Council)",
    description:
      "Accredited GIET in SECOND Cycle with – the highest grade (CGPA 3.28 on a four point scale). Certificate was awarded again for the years 2015-2020.",
    links: [
      { text: "AQAR REPORT 2018-2019", url: "#" },
      { text: "AQAR REPORT 2017-2018", url: "#" },
      { text: "AQAR REPORT 2016-2017", url: "#" },
    ],
  },
  {
    logo: "dsir.png",
    title: "DSIR Recognition",
    description:
      "GIET University is recognized by DSIR (Govt. of India) as an institution for Quality Research.",
  },
  {
    logo: "aicte.png",
    title: "AICTE Approval",
    description: "Approved by AICTE, New Delhi, INDIA since 1997",
    links: [
      { text: "Extension of Approval 2025-26", url: "#" },
      { text: "Extension of Approval 2024-25", url: "#" },
      { text: "Extension of Approval 2023-24", url: "#" },
      { text: "Extension of Approval 2022-23", url: "#" },
      { text: "Extension of Approval 2021-22", url: "#" },
      { text: "Extension of Approval 2020-21", url: "#" },
      { text: "Letter of Approval 2019-20", url: "#" },
    ],
  },
  {
    logo: "odisha.png",
    title: "Government of Odisha Act 2018",
    description: "",
  },
  {
    logo: "ugc.png",
    title:
      "Inclusion in the list of Universities as per section 2 (f) of the UGC Act, 1956.",
    description: "",
  },
  {
    logo: "aiu.png",
    title: "Membership of Association of Indian Universities",
    description: "",
  },
  {
    logo: "nba.png",
    title: "NBA Accreditation",
    description:
      "AICTE, Govt. of India FIVE TIMES Accredited Five B.Tech programs ( CSE, MECH, EEE, Biotech and ECE ), for high quality technical education.",
  },
];

const Accreditation = () => {
  return (
    <div className="accreditation-container">
      {accreditationData.map((item, index) => (
        <div key={index} className="accreditation-card">
          <img src={`images/${item.logo}`} alt={item.title} />
          <div className="accreditation-text">
            <h4>{item.title}</h4>
            {item.description && <p>{item.description}</p>}
            {item.links && (
              <div className="accreditation-links">
                {item.links.map((link, i) => (
                  <a key={i} href={link.url}>
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accreditation;
