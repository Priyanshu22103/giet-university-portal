// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import Table from "../table/Table";
import { useEffect } from "react";
const MoUs = () => {
  useEffect(() => {
      document.title = 'MoUs-GIET University | Odisha | Gunupur';    
  },[])
  const projectData = [
  {
    'Sl.No': 1,
    'Year of signing MoU': '2024',
    'Name of org with whom MOU signed': 'Cyber3ra',
    'Duration': '2 Years',
    'Purpose of MOU': 'Cyber Security Training',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '15.07.2024',
  },
  {
    'Sl.No': 2,
    'Year of signing MoU': '2024',
    'Name of org with whom MOU signed': 'Ambula Technologies Private Limited',
    'Duration': '2 Years',
    'Purpose of MOU': 'Healthcare App and social Media. Social Campaigning, Medical Data collection',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': 'TO be done',
  },
  {
    'Sl.No': 3,
    'Year of signing MoU': '2024',
    'Name of org with whom MOU signed': 'Infosys limited',
    'Duration': '5 Years',
    'Purpose of MOU': 'Corporate social Responsibilities. Workshop, Electronics product manufacturing',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': '27.3.2024',
  },
  {
    'Sl.No': 4,
    'Year of signing MoU': '2024',
    'Name of org with whom MOU signed': 'ICAR Central Institute for Women in Agriculture, Bhubaneswar',
    'Duration': '3 Years',
    'Purpose of MOU': 'Related to the thesis requirement of research students for B.Sc. (Hons) Agriculture, M.Sc.(Ag) & Ph.D (Agriculture) and allied sectors.',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': '19.08.2024',
  },
  {
    'Sl.No': 5,
    'Year of signing MoU': '2024',
    'Name of org with whom MOU signed': 'ICAR- National Rice Research Institute (NRRI), Cuttack, Odisha',
    'Duration': '3 Years',
    'Purpose of MOU': 'Long-term collaboration for promotion of students’ training and quality postgraduate research in cutting edge areas',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': '19.08.2024',
  },
  {
    'Sl.No': 6,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'EduRapid Pvt Lmt',
    'Duration': 'Since 2023',
    'Purpose of MOU': 'Activity design courses',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '01.03.2024',
  },
  {
    'Sl.No': 7,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'Bikram Deb Autonomous College, Jeypore',
    'Duration': '3 Years',
    'Purpose of MOU': 'Students from BD College undertake internship at BIRAC E-YUVA center ,Dept. of Biotechnology GIETU',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '2023-2024',
  },
  {
    'Sl.No': 8,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'HackerForYou',
    'Duration': '1 year',
    'Purpose of MOU': '1. Organizing workshop, seminar, conferences, 2. Online library, 3. Myajma online portal, 4. Research Publications , 5. Orientation programmes',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '14.10.2023',
  },
  {
    'Sl.No': 9,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'MATTU UNIVERSITY, ETHIOPIA',
    'Duration': '5 Years',
    'Purpose of MOU': 'Mutually beneficial relationship built on academic, scientific and cultural cooperation as well as to define the areas for fundamental academic research',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': '27.04.2023',
  },
  {
    'Sl.No': 10,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'INDQ PRODUCT DESIGN STUDIO',
    'Duration': '3 Years',
    'Purpose of MOU': 'Jointly apply for funding to various agencies for the joint projects. Undertake collaborative projects in the area of Robotics, AGV etc.',
    'List the actual activities under each MOU yearwise': '1',
    'Date of activity': '20.04.2023',
  },
  {
    'Sl.No': 11,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': 'Scientific Innovation Research Group',
    'Duration': '5 Years',
    'Purpose of MOU': 'IOT and Website. Cooperation and promotion of educational training',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '11.03.2023',
  },
  {
    'Sl.No': 12,
    'Year of signing MoU': '2023',
    'Name of org with whom MOU signed': '3rd Eye Techno Solution Pvt. Lmt.',
    'Duration': '1 Year',
    'Purpose of MOU': '1. Joint sponsored research, development and consulting 2. Exchange of resource person, social scientist and researchers 3. Student, scholar and faculty participation 4. Joint conferences, workshops and short term courses',
    'List the actual activities under each MOU yearwise': '2',
    'Date of activity': '10.03.2023',
  },
];

  const colData = [
    "Sl.No",
    "Year of signing MoU",
    "Name of org with whom MOU signed",
    "Duration",
    "Purpose of MOU",
    "List the actual activities under each MOU yearwise",
    "Date of activity",
  ];
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "409px",color:'black' }}>
        MoUs
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        style={{ textAlign: "justify", fontSize: "18px", lineHeight: "30px" }}
      >
        A memorandum of understanding is an agreement signed between two of more
        parties outlined in a formal document. The MoU is seen as the starting
        point for negotiations as it defines the scope and purpose of the talks.
        It is an expression of agreement to process and it communicate the
        mutually accepted expectations of all the parties involved in a
        Negotiation action.
        <br />
        <br />
        MoU is important because it allows each party to clearly state their
        objections and resolutions and what they except from each other or the
        other parties. The purpose of MoU sets forth the intentions of the
        Parties for increased collaboration, cooperation and interaction and it
        does not create any legally binding commitments howsoever.
        <br />
        <br />
        GIET University has active MoUs with other prestigious universities and
        institutions all across India. Each active MoU serves a purpose to the
        visiting scholar exchanges, resource sharing, student exchanges, etc.
        depending entirely upon the needs of the person or the entity that
        initiated the agreement in the first place.
        <br />
        <br />
        MoUs between GIET University and the other universities are set forward
        to define the areas for fundamental and academic research in which the
        parties desire to work together in the future for their mutual benefit,
        to foster a collaborative framework and environment with a view to
        benefiting from each other’s initiatives and working procedures. It also
        aims towards support collaboration among the researchers associated with
        both Parties.
        <br />
        <br />
        The primary objective of signing the MoU between different institutions
        is to create a means of cooperative effects between GIET and the
        respective university/institution to affect the academic and clinical
        interchange of faculty members, postgraduate and postdoctoral fellows,
        and students, academic and research information between the
        institutions. The collaboration of GIET University with the other
        institutions covers the fields of education, teaching, learning,
        research, innovation and student and teachers exchange and learning.
      </div>
      <br />
      <br />
      <Table data={projectData} columnData={colData} />
    </div>
  );
};
export default MoUs;
