import React, { useEffect,useState } from "react";
import "./HeaderVideo.css";
import gietVideo from "../../assets/gietvideo.mp4"; // 👈 Import from assets
// import gietlogo from '../../assets/gietlogo.png'
//  import gietsmalllogo from '../../assets/gietlogo2.png'; 
const HeaderVideo = () => {
  useEffect(() => {
    document.title =
      "GIET University | Odisha | Gunupur - Best University in Eastern India";
  }, []);
  // const [isSticky, setIsSticky] = useState(false);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollTop = window.scrollY;
  //       setIsSticky(scrollTop > 300);
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
  return (
    <div className="video-container" >
      {/* style={{marginTop:'-167px',height:'900px'}} */}
      {/* <li className={`nav-logo ${isSticky ? 'logo-sticky' : ''}`} style={{width:'160px',marginLeft:'749px',marginTop:'56px'}}>
                  <div className={`logo-container ${isSticky ? 'logo-small' : ''}`}>
                    <img src={isSticky ? gietsmalllogo : gietlogo} alt="GIET Logo" />
                  </div>
      </li> */}
      <video autoPlay muted loop playsInline >
        {/* style={{marginTop:'-29px',height:'800px'}} */}
        <source src={gietVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeaderVideo;
