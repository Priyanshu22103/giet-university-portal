// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import Table from "../table/Table";
import { useEffect } from "react";
const Publications = () => {
  useEffect(() => {
      document.title = 'Publications-GIET University | Odisha | Gunupur'; 
  },[])
  const projectData = [
    {
      "Sl.No": 1,
      "Title of paper":
        "Effect of silicon amendment on whorl maggot, Hydrellia philippina, (Ferino) and leaf folder, Cnaphalocrocis medinalis (Guenee) damage in rice",
      "Name of the author/s": "S Panda, and H. Raghunandan",
      "Department of the teacher": "Agriculture, SoAg.",
      "Name of journal": "Journal of Applied Zoological Researches",
      "Year of publication": 2024,
      "ISSN number": "0970-9304",
    },
    {
      "Sl.No": 2,
      "Title of paper":
        "Advancing water conservation techniques in agriculture for sustainable resource management",
      "Name of the author/s": "Shruti Mallikarjun Kolur",
      "Department of the teacher": "Agriculture, SoAg.",
      "Name of journal":
        "Journal of geography, environment and earth science international",
      "Year of publication": 2024,
      "ISSN number": "2454-7352",
    },
    {
      "Sl.No": 3,
      "Title of paper":
        "Comprehensive Characterization of Lignocellulosic Biomass and their effective Delignification for Sustainable Bioenergy.",
      "Name of the author/s": "Manoja Das",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Research Journal of Chemistry and Environment",
      "Year of publication": 2024,
      "ISSN number": "2278-4527",
    },
    {
      "Sl.No": 4,
      "Title of paper":
        "Reactive oxygen species and its effect on germination of seeds",
      "Name of the author/s": "Manoja Das",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Multidisciplinary Reviews",
      "Year of publication": 2024,
      "ISSN number": "2535-5962",
    },
    {
      "Sl.No": 5,
      "Title of paper":
        "Biosynthesis of silver nanoparticles using cow dung extract and evaluation of their antibacterial potentials",
      "Name of the author/s": "Diptikant Acharya",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Microbes and Infectious Diseases",
      "Year of publication": 2024,
      "ISSN number": "2682-4132",
    },
    {
      "Sl.No": 6,
      "Title of paper": "Nano-Biofertilizers Synthesis and Applications",
      "Name of the author/s": "Diptikant Acharya",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "ATOMIC SPECTROSCOPY",
      "Year of publication": 2024,
      "ISSN number": "2682-4140",
    },
    {
      "Sl.No": 7,
      "Title of paper":
        "Development Of Nanobiofertilizer Via Chemical & Biological Synthesis",
      "Name of the author/s": "Diptikant Acharya",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal":
        "International Research Journal of Modernization in Engineering Technology and Science",
      "Year of publication": 2024,
      "ISSN number": "2582-5208",
    },
    {
      "Sl.No": 8,
      "Title of paper":
        "Isolation of delignifying bacteria and optimization of microbial pretreatment of biomass for bioenergy",
      "Name of the author/s": "Suman Polaki",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Biotechnology letters",
      "Year of publication": 2024,
      "ISSN number": "1573-6776",
    },
    {
      "Sl.No": 9,
      "Title of paper":
        "Comprehensive Characterization of Lignocellulosic Biomass and their effective Delignification for Sustainable Bioenergy.",
      "Name of the author/s": "Polaki Suman",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Research Journal of Chemistry and Environment",
      "Year of publication": 2024,
      "ISSN number": "2278-4527",
    },
    {
      "Sl.No": 10,
      "Title of paper":
        "Biosynthesis of silver nanoparticles using cow dung extract and evaluation of their antibacterial potentials",
      "Name of the author/s": "Manoja Das",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Microbes and Infectious Diseases",
      "Year of publication": 2024,
      "ISSN number": "2682-4132",
    },
    {
      "Sl.No": 11,
      "Title of paper":
        "Physicochemical Characterization and Delignification Enhancement of Lignocellulosic Biomass for Sustainable Bioenergy",
      "Name of the author/s": "Suman Polaki",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Iranian Journal of Science",
      "Year of publication": 2024,
      "ISSN number": "2731-8109",
    },
    {
      "Sl.No": 12,
      "Title of paper":
        "Synthesis of silver nanoparticles from biogenic waste: a systematic review over the last 5 years",
      "Name of the author/s": "Manoja Das",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "IJRAR",
      "Year of publication": 2023,
      "ISSN number": "2348-1296",
    },
    {
      "Sl.No": 13,
      "Title of paper":
        "Self-Assembled Micellar Saponin from Sapindus laurifolia Vahl.: Investigations on the Surfactant Activity on the Extraction of Fibroin from Silk Cocoons",
      "Name of the author/s": "Manoja Das",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Journal of Polymers and the Environment",
      "Year of publication": 2023,
      "ISSN number": "1572-8919",
    },
    {
      "Sl.No": 14,
      "Title of paper":
        "Immunological assessment of recent immunotherapy for colorectal cancer",
      "Name of the author/s": "Diptikant Acharya",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal": "Immunological Investigations",
      "Year of publication": 2023,
      "ISSN number": "2582-5208",
    },
    {
      "Sl.No": 15,
      "Title of paper":
        "Synthesis of Silver Nanoparticles from Biogenic Waste: A Systematic Review over the Last 5 Years",
      "Name of the author/s": "Diptikant Acharya",
      "Department of the teacher": "Biotechnology, SoET",
      "Name of journal":
        "International Journal of Research and Analytical Reviews",
      "Year of publication": 2023,
      "ISSN number": "1532-443",
    },
  ];

  const colData = [
    "Sl.No",
    "Title of paper",
    "Name of the author/s",
    "Department of the teacher",
    "Name of journal",
    "Year of publication",
    "ISSN number",
  ];
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "357px",color:'black' }}>
        Publications
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "400px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        style={{ textAlign: "justify", lineHeight: "30px", fontSize: "18px" }}
      >
        The vibrancy of research programs at any university is underscored by
        the impressive quality of publications. The publication works includes
        books, book chapters, scientific chapters, research articles, and so on
        published by the students and faculty from the various departments of
        that university.
        <br />
        <br />
        The contribution of any educational institution to the community or
        larger society at large can be gauged by the quality of research
        publications by the faculty members and students of that institute.
        Apart from ensuring in-depth knowledge over a topic, scientific
        publications also help students by guiding and helping them in their
        research. Often students pursuing M.Phil., Ph.D. or similar educational
        degree refer to such scientific research publications to continue and
        complete their studies.
        <br />
        <br />
        The faculty members and students from GIET University have published
        numerous books, journals, chapters, research in peer-reviewed national
        and international journals.
      </div>
      <div style={{ backgroundColor: "darkblue" }}>
        <h2 style={{ paddingLeft: "250px" }}>JOURNAL PUBLICATION DETAILS</h2>
      </div>
      <div
        style={{ backgroundColor: "yellow", height: "6px", marginTop: "-20px" }}
      ></div>
      <Table data={projectData} columnData={colData} />
    </div>
  );
};
export default Publications;
