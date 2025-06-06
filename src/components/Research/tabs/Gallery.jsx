import img1 from "../../../assets/ece_pics/1.jpg";
import img2 from "../../../assets/ece_pics/2.jpg";
import img3 from "../../../assets/ece_pics/3.jpg";
import img4 from "../../../assets/ece_pics/4.jpg";
import img5 from "../../../assets/ece_pics/5.jpg";
import img6 from "../../../assets/ece_pics/6.jpg";
import img7 from "../../../assets/ece_pics/7.jpg";
import img8 from "../../../assets/ece_pics/8.jpg";
import img9 from "../../../assets/ece_pics/9.jpg";
import img10 from "../../../assets/ece_pics/10.jpg";
import img11 from "../../../assets/ece_pics/11.jpg";
import img12 from "../../../assets/ece_pics/12.jpg";
import img13 from "../../../assets/ece_pics/13.jpg";

import i1 from "../../../assets/mech_pics/1.jpg";
import i2 from "../../../assets/mech_pics/2.jpg";
import i3 from "../../../assets/mech_pics/3.jpg";
import i4 from "../../../assets/mech_pics/4.jpg";
import i5 from "../../../assets/mech_pics/5.jpg";
import i6 from "../../../assets/mech_pics/6.jpg";
import i7 from "../../../assets/mech_pics/7.jpg";
import i8 from "../../../assets/mech_pics/8.jpg";
import i9 from "../../../assets/mech_pics/9.jpg";
import i10 from "../../../assets/mech_pics/10.jpg";
import i11 from "../../../assets/mech_pics/11.jpg";
import i12 from "../../../assets/mech_pics/12.jpg";
import i13 from "../../../assets/mech_pics/13.jpg";
import i14 from "../../../assets/mech_pics/14.jpg";
import i15 from "../../../assets/mech_pics/15.jpg";
import i16 from "../../../assets/mech_pics/16.jpg";
import i17 from "../../../assets/mech_pics/17.jpg";
import i18 from "../../../assets/mech_pics/18.jpg";
import i19 from "../../../assets/mech_pics/19.jpg";
import i20 from "../../../assets/mech_pics/20.jpg";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
// import { BsDisplay } from "react-icons/bs";
import { useEffect } from "react";
const Gallery = () => {
    useEffect(() => {
        document.title = 'Gallery-GIET University | Odisha | Gunupur';  
    },[])
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "388px",color:'black' }}>
        Gallery
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div style={{ backgroundColor: "darkblue" }}>
        <h2 style={{ paddingLeft: "135px" }}>
          DEPT. OF ELECTRONICS AND COMMUNICATION ENGG.
        </h2>
      </div>
      <div
        style={{ backgroundColor: "yellow", height: "6px", marginTop: "-20px" }}
      ></div>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          justifyItems: "center",
        }}
      >
        {[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          img10,
          img11,
          img12,
          img13,
        ].map((src, index) => (
          <Zoom key={index}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "300px",
                borderRadius: "5px",
                cursor: "zoom-in",
              }}
            />
          </Zoom>
        ))}
      </div>
      <br />
      <br />
      <div style={{ backgroundColor: "darkblue" }}>
        <h2 style={{ paddingLeft: "260px" }}>
          DEPT. OF Mechanical Engineering
        </h2>
      </div>
      <div
        style={{ backgroundColor: "yellow", height: "6px", marginTop: "-20px" }}
      ></div>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          justifyItems: "center",
        }}
      >
        {[
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9,
          i10,
          i11,
          i12,
          i13,
          i14,
          i15,
          i16,
          i17,
          i18,
          i19,
          i20,
        ].map((src, index) => (
          <Zoom key={index}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "300px",
                borderRadius: "5px",
                cursor: "zoom-in",
              }}
            />
          </Zoom>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};
export default Gallery;
