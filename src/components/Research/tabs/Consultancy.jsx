// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import { useEffect } from "react";
const Consultancy = () => {
  useEffect(() => {
        document.title = 'Consultancy-GIET University | Odisha | Gunupur'; 
  },[])
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "358px",color:'black' }}>
        CONSULTANCY
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div style={{fontSize:'18px',lineHeight:'30px',textAlign:'justify'}}>
        Consultancy and Research & Development are the hallmarks of a
        world-class university. At GIET University we place emphasis on creating
        an enabling infrastructure and facilities for advanced research facility
        and training facilities in different fields and diverse disciplines. Our
        team of exceptional and hard-working staffs has set up different centers
        for material testing and characterization. We have also been successful
        in establishing a state-of-art Central Advanced Research Centre that is
        built from multidisciplinary research training and training facilities.
        <br />
        <br />
        Several Centers of excellence have been established in collaboration
        with the growing industry such as ISOTOPE Technologies, Baba Inspection
        and Training Services, NDT Consultancy and Training Centre, Xtech
        Limited, and ISOTOPE Technology that are functioning properly inside the
        campus of GIET University. These centers are ideal for providing and
        conducting collaborative research and development work with partnering
        companies and agencies. Nearly 60 research and consultancy projects
        funded by various national and international funding agencies are
        ongoing with substantial budget outlay.
        <br />
        <br />
        The positive impact of GIET University’s focus of innovation and
        research is demonstrated by the research accomplishments of the
        students, faculty and staff. The faculty members of GIET University are
        involved in consultancy and research works, actively.
        <br />
        <br />
        GIET University actively encourages and promotes student participation
        in research and projects so that the students can be appreciated at
        national and international forum.
      </div>
    </div>
  );
};
export default Consultancy;
