import React,{useEffect} from "react";
import "./PhysicalFacilities.css";

const PhysicalFacilities = () => {
  useEffect(() => {
         document.title = 'Physical Facilities - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <div className="physical-facilities-container">
      <h3 className="section-title">
        Physical Facilities
        <span className="underline"></span>
      </h3>
      <hr />
      <p className="physical-facilities-video">Physical Facilities Video</p>
    </div>
  );
};

export default PhysicalFacilities;
