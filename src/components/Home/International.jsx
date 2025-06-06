import React from "react";
import "./International.css";
import img1 from "../../assets/highlights/ia1.jpg";
import img2 from "../../assets/highlights/ia2.jpg";
import img3 from "../../assets/highlights/ia3.jpg";
import img4 from "../../assets/highlights/ia4.jpg";
import img5 from "../../assets/highlights/ia5.jpg";
import img6 from "../../assets/highlights/ia6.jpg";
import img7 from "../../assets/highlights/ia7.jpg";
import img8 from "../../assets/highlights/ia8.jpg";
import img9 from "../../assets/highlights/ia9.jpg";
import img10 from "../../assets/highlights/ia10.jpg";
import img11 from "../../assets/highlights/ia11.jpg";
import img12 from "../../assets/highlights/ia12.jpg";
import img13 from "../../assets/highlights/ia13.jpg";
import img14 from "../../assets/highlights/ia14.jpg";


import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";

const InternationalAlumni = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14
  ];

  return (
    <>
      <TopNavbar />
      <div className="inter-alumni-container">
        <h1 className="inter-alumni-title">INTERNATIONAL ALUMNI</h1>
        <div className="underline-bar"></div>
        {/* <hr></hr>
        <br></br> */}

        <PhotoProvider>
          <div className="inter-alumni-gallery">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="inter-alumni-image-wrapper">
                  <img
                    src={src}
                    alt={`Cultural Night ${index + 1}`}
                    className="inter-alumni-image"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <Footer />
    </>
  );
};

export default InternationalAlumni;
