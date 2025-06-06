/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect} from "react";
// import Carousel from "../components/Carousel";
import Carousel from "../AcademicsAdditional/Carousel.jsx";
import ImageCarousel from "../AcademicsAdditional/ImageCarousel";
import YouTubeThumbnail from "../AcademicsAdditional/YouTubeThumbnail.jsx";
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
export default function AcicGietuPage() {
  useEffect(() => {
         document.title = 'ACIC GIETU - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "white" }}>
      <img src="https://lh3.googleusercontent.com/nJ4fXGYe20LQWvKD…35z4w9Img_JIsMwIN4lRiVoG2mDIqw9kWA6AzGujInQ=w1280" class="CENy8b" role="img"></img>

        {/* <img src="/logo1.png" alt="Logo 1" style={{ height: "60px" }} /> */}
        {/* <h1 style={{ color: "#124d9c" }}>ACIC GIETU FOUNDATION</h1> */}
        <h2 className="aic-title">
         ACIC GIETU FOUNDATION
        <span className="underline"></span>
        </h2>

        {/* <img src="/logo2.png" alt="Logo 2" style={{ height: "60px" }} /> */}
        <img src="https://lh3.googleusercontent.com/nJ4fXGYe20LQWvKD…35z4w9Img_JIsMwIN4lRiVoG2mDIqw9kWA6AzGujInQ=w1280" class="CENy8b" role="img"></img>
      </div>

      {/* Upcoming Events Section */}
      <div style={{ backgroundColor: "#004aad", color: "white", padding: "10px 20px" }}>
        <strong>Upcoming Events :</strong>
      </div>

      <div style={{ display: "flex", padding: "20px", backgroundColor: "white" }}>
        <div style={{ width: "50%", paddingRight: "20px" }}>
          <h3>ABOUT ACIC GIETU FOUNDATION:</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            ACIC GIETU FOUNDATION is the culmination of concerted efforts of GIETU with its rich experience
            in establishing 65+ innovation labs, entrepreneurship development cells, and incubation
            centers nationally.
            <br /><br />
            ACIC GIETU FOUNDATION incubated at GIET University aims to foster a culture of innovation,
            support early-stage start-ups and local entrepreneurs, especially from underserved sections of the
            society.
          </p>
          <a href="/" style={{ color: "#f37020", textDecoration: "none" }}>Read More...</a>
        </div>
        <div style={{ width: "50%" }}>
          {/* <img src="/gietu_team.jpg" alt="GIETU Team" style={{ width: "100%", borderRadius: "10px" }} /> */}
           <Carousel />
        </div>
      </div>

      {/* Event Images */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", backgroundColor: "#fff" }}>
       
        {/* <img src="https://lh5.googleusercontent.com/KTZw3jn7cn-veSc7…NGnEwIcG6pMqP78MHoixxj5AquzhmgTEdvLAJhXyvKw=w1280" alt="Event 1" style={{ width: "45%" }} /> */}
        <img
  src="https://lh5.googleusercontent.com/KTZw3jn7cn-veSc7tzPRdROZ9kP4SZE5qRZvxk0DU7fAiRBeWsy-yWzxiRgOxzxlZKiaJ-1T2RnyF4ETIGrDnWPNGnEwIcG6pMqP78MHoixxj5AquzhmgTEdvLAJhXyvKw=w1280"
  className="CENy8b"
  alt="Event 1"
  style={{ width: "45%" }}
/>

        {/* <img src="/event2.png" alt="Event 2" style={{ width: "45%" }} /> */}
        <ImageCarousel/>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#ff4500", padding: "10px" }}>
        <button style={{ backgroundColor: "#fff", color: "#ff4500", border: "none", padding: "10px 20px" }}>UPCOMING EVENTS</button>
        <button style={{ backgroundColor: "#124d9c", color: "white", border: "none", padding: "10px 20px" }}>PREVIOUS EVENTS</button>
      </div>

      {/* AIM Section */}
      <div style={{ backgroundColor: "#ff6600", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "white" }}>ACIC & AIM</span>
        <button style={{ padding: "5px 10px", border: "1px solid black" }}>More Details</button>
      </div>

      {/* Equipment Gallery */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", background: "linear-gradient(to right, #61045f, #aa076b)", color: "white" }}>
        <div>
          <img src="https://lh6.googleusercontent.com/hnIj1y8En-EzZaTB63Qzvi1Fm91svvlHOGE4oXhoJvP9M9nvWylzQjZPauVL7p1ZUfO8wXsO-k9kwx6VaYX5QwxU2u-4NJhD-qN1jmBE8ioOVqnLdC9tv21pnIjiGW3nYw=w1280" alt="3D Printer" className="CENy8b" style={{ width: "200px" }} />
          <p style={{ textAlign: "center" }}>3D PRINTERS</p>
        </div>
        <div>
          <img src="https://lh5.googleusercontent.com/tsGNpUjvvzBXUEsPtpGWvkGS-ekIT8-u4uTmyubCOB16jLePZo2Ms0-ewPg_VmEs7LLJvDwCN2JlwHi79mo0Z0O_gMxWfPJogZdOU35NyzhM35-RAcEziET1S31Zx-IrlA=w1280" className="CENy8b" alt="PCB" style={{ width: "200px" }} />
          <p style={{ textAlign: "center" }}>PCB DESIGN MACHINE</p>
        </div>
        <div>
          <img src="https://lh4.googleusercontent.com/Ri8U3wjo-x8wcYi_31amgArOKolxvL3SVjLUv4sVneudjgJFVsLzL82TXkZ_sEx1hUimSPe9a9VgQ7AXlO221vbAmpSHJCLSGtD7QQpM4i7NpMpi5ooFXVmmZaGritkIXA=w1280" className="CENy8b" alt="KIT" style={{ width: "200px" }} />
          <p style={{ textAlign: "center" }}>KIT LAB EQUIPMENT</p>
        </div>
      </div>

      {/* Video Section */}
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#e6f2ff",
    padding: "30px",
    gap: "40px"  // <-- add this line
  }}
>
  <YouTubeThumbnail videoId="7VikC8JE84c" />
  <YouTubeThumbnail videoId="4gblpbGR0U4" />
  <img
  src="https://lh6.googleusercontent.com/Blpws-f_lYhH3lTef1dGQC0HnVHjYfVtGxezuYWB15M54j2Pog0c_f-g5n48DSl4ryaL3Blh-lYrPwk-IbH6YpjzituYF_gw47eJtNKgcNVvLOv8Egl2suQdV03Jfr4A9A=w1280"
  className="CENy8b"
  style={{ width: "33%", margin: "-0.0162760417% 0 -0.0162760417% 0" }}
  alt=""
/>

</div>


      {/* Image Gallery */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", backgroundColor: "#f0f0f0" }}>
        <img src="https://lh4.googleusercontent.com/j8fmQf2ZnmJ2opNxMyVZvv27w85IpTxH3gjxfPsqFe5YR9OYSp1UOTfyCqV7PC1NeEmI3ajHptHWy_-AvVV6zgErlptfYgT6rmXJ18GZ80hLMWz-wMsbUIKvyCdJmV97IA=w1280
" alt="Gallery 1" style={{ width: "33%" }} />
        <img src="https://lh3.googleusercontent.com/9hgeBMGC0VYn9ZyBFUaoEWA0KkWxx5vO7M_djfje5u6GxwN8cKi4eiALFCxFL1zBwX4BVQYngnbuQDIzeFeCFRt-uR20Yqv5AH-ehlHHS9Fv_QSVGnIWceDrSdZqO4w0eg=w1280
" alt="Gallery 2" style={{ width: "33%" }} />
        <img src="https://lh4.googleusercontent.com/1-goG7gV2eVVVPrnO1NJRQgJVDTtkMvwBMWMGTvbOl-wwM49JTQfH9W1UbtvIr49_8jHYg4LHIKMa8469lS91ulraQNz-TLEIlHzGh1Gbb-YN5_phro7Bn2iIo1xlJ7uiA=w1280
" alt="Gallery 3" style={{ width: "33%"}} />
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
}
