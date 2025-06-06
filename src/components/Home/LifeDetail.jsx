import React from "react";
import { useParams } from "react-router-dom";
import lifeData from "./LifeData.js";
// import AboutNavbar from "../About/Navbar.jsx";
import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";
import "./LifeDetail.css";

export default function LifeDetail() {
  const { id } = useParams();
  const data = lifeData[id];

  if (!data) return <div>Page not found.</div>;

  return (
    <>
      <TopNavbar />
      {/* <AboutNavbar /> */}
      <div className="life-detail-container">
  <h2 className="life-detail-title">{data.title}</h2>
<span className="life-detail-underline"></span>

  <img src={data.image} alt={data.title} className="life-detail-image" />
  <p className="life-detail-description">{data.description}</p>

  {data.gallery && (
    <>
      <h3 className="life-detail-gallery-heading">Gallery</h3>
      <div className="gallery">
        {data.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className="life-detail-gallery-image"
          />
        ))}
      </div>
    </>
  )}
</div>
      <Footer />
    </>
  );
}