import React, { useEffect } from "react";
import "./HeaderVideo.css";
import gietVideo from "../../assets/gietvideo.mp4";

const HeaderVideo = () => {
  useEffect(() => {
    document.title =
      "GIET University | Odisha | Gunupur - Best University in Eastern India";
  }, []);

  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline>
        <source src={gietVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeaderVideo;
