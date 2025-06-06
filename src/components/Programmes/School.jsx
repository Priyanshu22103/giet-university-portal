import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./School.css";
import Footer from "../Home/Footer.jsx";

import soe from "../../assets/soe.jpg";
import soa from "../../assets/soa.jpg";
import som from "../../assets/som.jpg";
import sos from "../../assets/sos.jpg";
import soh from "../../assets/soh.jpg";
import son from "../../assets/son.jpg";

const schools = [
  {
    id: "soe",
    name: "School of Engineering and Technology",
    image: soe,
    path: "/school/soe",
  },
  {
    id: "soa",
    name: "School of Agriculture",
    image: soa,
    path: "/school/soa",
  },
  {
    id: "som",
    name: "School of Management Studies",
    image: som,
    path: "/school/som",
  },
  {
    id: "sos",
    name: "School of Sciences",
    image: sos,
    path: "/school/sos",
  },
  {
    id: "soh",
    name: "School of Humanities and Social Sciences",
    image: soh,
    path: "/school/soh",
  },
  {
    id: "son",
    name: "School of Nursing",
    image: son,
    path: "/school/son",
  },
];

const School = () => {
  useEffect(() => {
    document.title = "Schools - GIET University | Odisha | Gunupur";
  }, []);

  return (
    <>
      <div>
        <h2 className="aic-title">
          SCHOOLS 
          <span className="underline"></span>
        </h2>
      </div>
      <div className="school-page">
        <div className="school-grid">
          {schools.map((school) => (
            <Link to={school.path} className="school-card-link" key={school.id}>
              <div className="school-card">
                <img
                  src={school.image}
                  alt={school.name}
                  className="school-img"
                />
                <div className="school-name">{school.name} &raquo;</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default School;
