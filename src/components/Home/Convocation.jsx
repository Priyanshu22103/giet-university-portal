import React from "react";
import "./Convocation.css";
import img1 from "../../assets/highlights/convo1.jpg";
import img2 from "../../assets/highlights/convo2.jpg";
import img3 from "../../assets/highlights/convo3.jpg";
import img4 from "../../assets/highlights/convo4.jpg";
import img5 from "../../assets/highlights/convo5.jpg";
import img6 from "../../assets/highlights/convo6.jpg";
import img7 from "../../assets/highlights/convo7.jpg";
import img8 from "../../assets/highlights/convo8.jpg";
import img9 from "../../assets/highlights/convo9.jpg";
import img10 from "../../assets/highlights/convo10.jpg";
import img11 from "../../assets/highlights/convo11.jpg";
import img12 from "../../assets/highlights/convo12.jpg";
import img13 from "../../assets/highlights/convo13.jpg";
import img14 from "../../assets/highlights/convo14.jpg";
import img15 from "../../assets/highlights/convo15.jpg";
import img16 from "../../assets/highlights/convo16.jpg";
import img17 from "../../assets/highlights/convo17.jpg";
import img18 from "../../assets/highlights/convo18.jpg";
import img19 from "../../assets/highlights/convo19.jpg";
import img20 from "../../assets/highlights/convo20.jpg";
import img21 from "../../assets/highlights/convo21.jpg";
import img22 from "../../assets/highlights/convo22.jpg";
import img23 from "../../assets/highlights/convo23.jpg";
import img24 from "../../assets/highlights/convo24.jpg";
import img25 from "../../assets/highlights/convo25.jpg";
import img26 from "../../assets/highlights/convo26.jpg";



import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Footer from "./Footer.jsx";
import TopNavbar from "./Navbar.jsx";

const Convocation = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26
  ];

  return (
    <>
      <TopNavbar />
      <div className="convocation-container">
        <h1 className="convocation-title">1st CONVOCATION 2024</h1>
        <div className="underline-bar"></div>
        {/* <hr></hr>
        <br></br> */}

        <PhotoProvider>
          <div className="convocation-gallery">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="convocation-image-wrapper">
                  <img
                    src={src}
                    alt={`Cultural Night ${index + 1}`}
                    className="convocation-image"
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

export default Convocation;
