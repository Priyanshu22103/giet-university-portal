// src/components/tabs/ResearchOverview.jsx
import React from "react";
import "./ResearchOverview.css";
import { useEffect } from "react";
const ResearchOverview = () => {
   useEffect(() => {
          document.title = 'Research - GIET University | Odisha | Gunupur'; 
      },[])
  return (
    <div className="overview" style={{color:'black'}}>
      <h2 className="heading" style={{ marginLeft: "402px",color:'black' }}>
        OVERVIEW
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "420px",width:'' }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <p style={{fontSize:'18px',color:'black'}}>
        GIET University is committed to high-quality and path breaking research.
        GIET University over the years has emerged as a Research and
        Innovation-Driven University. Research work has been an integral aspect
        of higher education at the University. Research and Development (R&D) is
        one of the most distinguished and competitive strengths of the
        University. It tries its level best to provide an enabling environment
        for its students and faculty to carry out world-class research within
        its premises. This has led to the emergence of the university as a new
        destination for research with its quality teaching-learning environment
        and the gruelling quest for knowledge.
        <br />
        <br />
        Research accomplishments of the students and faculty have brought
        laurels and fame to GIETU. Faculty members of the university are
        actively involved in research and consultancy works. The student’s
        research work and projects have been appreciated at national and
        international forums. Over the years, the research efforts have led to
        all kinds of scholarly activities like fundamental research, applied
        research, research work for the government, non-government and
        international agencies.
      </p>
      <p style={{fontSize:'18px',color:'black'}}>
        The knowledge centre of GIETU integrated with Koha Open LMS-17.11.5 for
        library automation and DSpace-6.2, High-tech Labs, equipment,
        International standard infrastructure, adequate and sustained budgets
        and highly qualified faculties taking research at GIET University to the
        highest possible level.
        <br />
        <br />
        GIET University has maintained the highest All India Council for
        Technical Education (AICTE), Department of Science and Technology (DST),
        Department of Biotechnology (DBT), Ministry of Micro, Small and Medium
        Enterprises (MSME) Industry-sponsored projects in Odisha. This shows the
        quality, quantity and influence of research at GIET University. Starting
        from renewable energy technology to Optical Fibre Communication, GIET
        University is truly leading the way into the future with its research
        and innovation.
      </p>
    </div>
  );
};
export default ResearchOverview;
