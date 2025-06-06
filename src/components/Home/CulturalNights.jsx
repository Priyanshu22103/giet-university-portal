import React from "react";
import "./CulturalNights.css";
import img1 from "../../assets/highlights/cn1.jpg";
import img2 from "../../assets/highlights/cn2.jpg";
import img3 from "../../assets/highlights/cn3.jpg";
import img4 from "../../assets/highlights/cn4.jpg";
import img5 from "../../assets/highlights/cn5.jpg";
import img6 from "../../assets/highlights/cn6.jpg";
import img7 from "../../assets/highlights/cn7.jpg";
import img8 from "../../assets/highlights/cn8.jpg";
import img9 from "../../assets/highlights/cn9.jpg";
import img10 from "../../assets/highlights/cn10.jpg";
import img11 from "../../assets/highlights/cn11.jpg";
import img12 from "../../assets/highlights/cn12.jpg";
import img13 from "../../assets/highlights/cn13.jpg";
import img14 from "../../assets/highlights/cn14.jpg";
import img15 from "../../assets/highlights/cn15.jpg";
import img16 from "../../assets/highlights/cn16.jpg";
import img17 from "../../assets/highlights/cn17.jpg";
import img18 from "../../assets/highlights/cn18.jpg";
import img19 from "../../assets/highlights/cn19.jpg";
import img20 from "../../assets/highlights/cn20.jpg";
import img21 from "../../assets/highlights/cn21.jpeg";
import img22 from "../../assets/highlights/cn22.jpeg";
import img23 from "../../assets/highlights/cn23.jpeg";
import img24 from "../../assets/highlights/cn24.jpg";
import img25 from "../../assets/highlights/cn25.jpg";
import img26 from "../../assets/highlights/cn26.jpg";
import img27 from "../../assets/highlights/cn27.jpg";
import img28 from "../../assets/highlights/cn28.jpg";
import img29 from "../../assets/highlights/cn29.jpg";
import img30 from "../../assets/highlights/cn30.jpg";
import img31 from "../../assets/highlights/cn31.jpg";
import img32 from "../../assets/highlights/cn32.jpg";


import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";

const CulturalNights = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32
  ];

  return (
    <>
      <TopNavbar />
      <div className="cultural-nights-container">
        <h1 className="cultural-title">CULTURAL NIGHTS</h1>
        <div className="underline-bar"></div>
        {/* <hr></hr>
        <br></br> */}

        <PhotoProvider>
          <div className="cultural-gallery">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="cultural-image-wrapper">
                  <img
                    src={src}
                    alt={`Cultural Night ${index + 1}`}
                    className="cultural-image"
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

export default CulturalNights;
