// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import Table from "../table/Table";
import { useEffect } from "react";
const projectData = [
    {
        "Sl.No":1,
        "Name of the teacher": "Ankush Sharma, Vishal Bhojak, Vikas Kukshal, S. K. Biswas, Amar Patnaik and Tapan Kumar Patnaik",
        "Title of the book published": "Energy, Environment, and Sustainability",
        "Title of the chapters published": "Mechanical and Erosion Characteristics of Natural Fiber Reinforced Polymer Composite: Effect of Filler Size",
        "Year of publication": "2019",
        "ISBN number": "978-981-15-0434-1",
        "Name of the publisher": "Springer Nature"
    },
    {
        "Sl.No":2,
        "Name of the teacher": "Brojo Kishore Mishra",
        "Title of the book published": "Emerging Trends and Applications in Cognitive Computing",
        "Title of the chapters published": "Addressing Security Issues and Standards in Internet of Things",
        "Year of publication": "2019",
        "ISBN number": "978-1-52255-793-7",
        "Name of the publisher": "IGI Global Publisher"
    },
    {
        "Sl.No":3,
        "Name of the teacher": "Brojo Kishore Mishra",
        "Title of the book published": "Natural Language Processing in Artificial Intelligence",
        "Title of the chapters published": "Role of Machine Learning and Application Towards Information Retrieval in Cloud",
        "Year of publication": "2020",
        "ISBN number": "978-3-67808-495",
        "Name of the publisher": "Apple Academic Press"
    },
    {
        "Sl.No":4,
        "Name of the teacher": "Dillip Kumar Pattanayak",
        "Title of the book published": "AICTE NEW Delhi",
        "Title of the chapters published": "Introduction to EMT",
        "Year of publication": "2020",
        "ISBN number": "978-93-91638-16-0",
        "Name of the publisher": "Institute of odia studies and Research"
    },
    {
        "Sl.No":5,
        "Name of the teacher": "Diptikanta Acharya",
        "Title of the book published": "Microbial Bioremediation & Biodegradation",
        "Title of the chapters published": "Advancement in Treatment Technologies of Biopharmaceutical Industrial Effluents",
        "Year of publication": "2020",
        "ISBN number": "978-981-15-1811-9",
        "Name of the publisher": "Springer"
    },
    {
        "Sl.No":6,
        "Name of the teacher": "Manoja Das",
        "Title of the book published": "Molecular Identification of Mosquito Vectors and Their Management",
        "Title of the chapters published": "Biocontrol of Mosquito Vectors: A New Dimension to Control Mosquito Borne Diseases",
        "Year of publication": "2020",
        "ISBN number": "978-981-15-9455-7",
        "Name of the publisher": "Springer"
    },
    {
        "Sl.No":7,
        "Name of the teacher": "Valentina Emilia Balas, Vijender Kumar Solanki and Raghvendra Kumar",
        "Title of the book published": "An Industrial IoT Approach for Pharmaceutical Industry Growth Volume 2",
        "Title of the chapters published": "An Industrial IoT Approach for Pharmaceutical Industry Growth Volume 3",
        "Year of publication": "2020",
        "ISBN number": "978-01-28213-26-1",
        "Name of the publisher": "Elsevier"
    },
    {
        "Sl.No":8,
        "Name of the teacher": "Raghvendra Kumar, Rohit Sharma, Prasant Kumar Pattnaik",
        "Title of the book published": "Multimedia Technologies in the Internet of Things Environment",
        "Title of the chapters published": "Multimedia Technologies in the Internet of Things Environment",
        "Year of publication": "2020",
        "ISBN number": "978-981-15-7965-3",
        "Name of the publisher": "Springer"
    }
];

const colData = [
   "Sl.No",
  "Name of the teacher",
  "Title of the book published",
  "Title of the chapters published",
  "Year of publication",
  "ISBN number",
  "Name of the publisher"
];

const BooksAndChapters = () => {
  useEffect(() => {
        document.title = 'Books & Chapters-GIET University | Odisha | Gunupur'; 
    },[])
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "312px",color:'black' }}>
        Books And Chapters
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div style={{fontSize:'18px',textAlign:'justify',lineHeight:'30px'}}>
        The Books and Chapters section highlights published scholarship by
        faculty members at GIET University.
        <br />
        <br />
        GIET University is fully-focused towards paving the path of academic
        research-based development and legacy. The vacancy of research programs
        at the GIET University is accentuated by the high-quality publications
        including books, book chapters, scientific research papers, research
        articles, creative write-ups published by the esteemed faculty members
        from different departments of the university.
        <br />
        <br />
        GIET University takes great pride in announcing that more than 50 books,
        book series and book chapters have been published by the acclaimed
        faculty members and scholars from the departments of CSE, Electronics,
        Biotech, M.Tech, Mech, Agriculture, MBA, Metallurgy over the last 4
        academic years.
        <br />
        <br />
        These scholarly publications are the driving force that encourages
        students at GIET to constantly strive to achieve their goals and unleash
        their full potential to become successful in life and realize
        milestones.
        <br />
        <br />
        Following are the listing of the university faculty publications of
        Books and Books chapters.
        <br />
          </div>
          <Table data={projectData} columnData={colData} />
    </div>
  );
};
export default BooksAndChapters;
