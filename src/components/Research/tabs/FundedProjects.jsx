import React from "react";
import Table from "../table/Table";
import { useEffect } from "react";
const projectData = [
  {
    sno: 1,
    person: "GIET UNIVERSITY",
    title: "Tech-trends unleashing innovation in the fashion world",
    agency: "MSME",
    duration: "02 Years",
    year: 2024,
    amount: 510000,
  },
  {
    sno: 2,
    person: "Dr. Golmei Langangmeilu",
    title: "Production and validation of low cost cotton biochar and its formulation",
    agency: "Community Innovator Fellowship, Atal Innovation Mission (AIM), NITI Aayog",
    duration: "01 Year",
    year: 2024,
    amount: 200000,
  },
  {
    sno: 3,
    person: "Dr. Priyadarsan Parida",
    title: "AICTE- VAANI SCHEME",
    agency: "AICTE",
    duration: "2 Days",
    year: 2024,
    amount: 200000,
  },
  {
    sno: 4,
    person: "Dr. Raghvendra Kumar, Dept. of CSE",
    title: "AICTE- VAANI SCHEME",
    agency: "AICTE",
    duration: "2 Days",
    year: 2024,
    amount: 200000,
  },
  {
    sno: 5,
    person: "Dr. Tusarkant Panda",
    title: "Design of a AI based 3D medical imaging software and VR system for real time surgical recommendation system",
    agency: "BIRAC",
    duration: "1 Years",
    year: 2024,
    amount: 750000,
  },
  {
    sno: 6,
    person: "Mr. Rudra Narayan Behera, Mr. Ankit Meher, Ms. Trusha Rani Nahak, Ms. Ipsita Ratha, Ms. Priyambada Pr. Behera, GIET University, Gunupur",
    title: "3D Printed Biobased Beehive for Automated Honey Collection",
    agency: "BIRAC",
    duration: "1 Years",
    year: 2024,
    amount: 250000,
  },
  {
    sno: 7,
    person: "Ms. Bhawani Sahu, Mr. Kumar Prasannajit Sahu, Ms. Basiliya Sara Sunil, Mr. Priyanshu Kumar Patro, Ms. Abhilipsa Ratha, GIET University, Gunupur",
    title: "Non-invasive Optical Sensor-Based Blood Sugar Monitoring with AI Analysis",
    agency: "BIRAC",
    duration: "1 Years",
    year: 2024,
    amount: 250000,
  },
  {
    sno: 8,
    person: "Dr. Hari Sankar Mohanty",
    title: "International Conference on “Recent Developments in Functional Materials for Sustainable Application” (RDFMSA-2024)",
    agency: "SERB",
    duration: "2 Days",
    year: 2024,
    amount: 250000,
  },
  {
    sno: 9,
    person: "Dr. Bidush Kumar Sahoo",
    title: "Two Days National Seminar on Future of Quantum Computing and Communication in-line with the National Quantum Mission (NQM-2024)",
    agency: "SERB",
    duration: "2 Days",
    year: 2024,
    amount: 200000,
  },
  {
    sno: 10,
    person: "Dr. Dipan Jyoti Mohanty",
    title: "Augmented Reality (AR) Policy on E-commerce for Sophisticated Supply Chain System",
    agency: "SERB",
    duration: "2 Days",
    year: 2024,
    amount: 100000,
  },
  {
    sno: 11,
    person: "Dr. Uttam Kumar Sahu",
    title: "“Recent Advancement in Chemical Sciences: A Sustainable Approach-2024” (RACSSA-2024)",
    agency: "SERB",
    duration: "2 Days",
    year: 2024,
    amount: 200000,
  },
];
const colData = [
  "sno", "person", "title", "agency",
  "duration", "year", "amount"
]

const FundedProjects = () => {
  useEffect(() => {
        document.title = 'FundedProjects-GIET University | Odisha | Gunupur'; 
    },[])
  return (
    <div className="p-4" style={{ marginLeft: "50px", marginRight: "50px" }}>
      <h1 className="text-xl font-bold mb-4" style={{ marginLeft: "40px" }}>
        Funded Projects
      </h1>
      <div className="divider" style={{ marginLeft: "760px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        style={{ lineHeight: "30px", fontSize: "18px", textAlign: "justify" }}
      >
        The Research and Development (R&D) committee of GIET University has
        developed a database of currently available funding opportunities
        primarily for Indian researchers. The database for the same is regularly
        updated. Our funders are the Department of Science (DST), Department of
        Biotechnology (DBT), All India Council for Technical Education (AICTE),
        Niti Aayog, Ministry of Micro, Small and Medium Enterprises (MSME) etc.
        Our researchers have received lakhs of rupees from various government
        departments and agencies to carry out breakthrough research work.
        <br />
        <br />
        Most of the available funding to our university comes from the
        Government of India. But many other prestigious institutions provide
        opportunities for both Indian and overseas students that have applied to
        this brilliant institution. We have collaborated with partners from
        business and science in publicly funded projects. This helps us to
        identify the latest technology trends faster and it also enables us to
        become actively involved in shaping new technical fields that are best
        suited for the students. Our active and constant participation makes us
        a fundamental member of the international networks. On account of the
        wide spectrum of topics covered by our prestigious institution, our
        partners have played a pivotal role in numerous areas to define future
        research fields at both the national and international level.
          </div>
          <br/>
      <Table data={projectData} columnData={colData} />
    </div>
  );
};

export default FundedProjects;
