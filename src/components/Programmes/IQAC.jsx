import React, { useState, useEffect } from "react";
import "./IQAC.css";
import Footer from "../Home/Footer";

const collapsibleData = [
  {
    title: "BEST PRACTICES",
    items: [
      { name: "Best Practice -1", file: "Best-practice1.pdf" },
      { name: "Additional Information On Best Practice 1", file: "Best-practice2.pdf" },
      { name: "Best Practice -2", file: "Best-practice3.pdf" },
      { name: "Additional Information On Best Practice 2", file: "Best-practice4.pdf" },
    ],
  },
  {
    title: "ANNUAL REPORT",
    items: [
      { name: "Annual Report 2024", file: "annual-report-2024.pdf" },
      { name: "Annual Report 2023", file: "annual-report-2023.pdf" },
      { name: "Annual Report 2022", file: "annual-report-2022.pdf" },
      { name: "Annual Report 2021", file: "annual-report-2021.pdf" },
      { name: "Annual Report 2020", file: "annual-report-2020.pdf" },
      { name: "Annual Report 2019", file: "annual-report-2019.pdf" },
    ],
  },
];

const Iqac = () => {
  useEffect(() => {
    document.title = 'IQAC - GIET University | Odisha | Gunupur';
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
          IQAC
          <span className="underline"></span>
        </h2>
      </div>
      <div className="iqac-container">
        <div className="iqac-content">
          {/* IQAC Info Section */}
          <div className="iqac-info">
            <p>
              In pursuance of its action plan for performance evaluation, assessment and accreditation and quality up-gradation of institutions of higher education, an Internal Quality Assurance Cell (IQAC) has been established as a quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a vital part of the institution’s quality assurance system and work towards ensuring quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of its institution.
            </p>
            <p>
              The establishment of the IQAC is the first step towards institutionalization and internalization of quality enhancement initiatives. Its success depends on its sense of belongingness and participation in all the activities of the institution. It will not be yet another hierarchical structure or a record-keeping unit of the institution but will be a facilitative and participative unit of the institution. It has the potential to become a vehicle for ushering in quality enhancement through its planned and interventionist strategies to remove deficiencies and enhance quality, as in quality circles in industries.
            </p>

            <h3>Vision:</h3>
            <p>
              To ensure a quality culture as the prime concern of the University through the institutionalization and internationalization of all initiatives taken with internal and external support.
            </p>

            <h3>Objective:</h3>
            <ul>
              <li>To develop a mechanism to promote conscious, consistent and catalytic action plans to improve the academic and administrative performance of the institution.</li>
              <li>To promote institutional quality enhancement and sustenance through the internalization of quality culture and institutionalization of the best practices.</li>
            </ul>

            <h3>Strategies:</h3>
            <ul>
              <li>Ensuring timely, efficient and progressive performance of academic, administrative and financial units;</li>
              <li>Adoption of relevant and quality academic and research programmes;</li>
              <li>Ensuring equitable access to and affordability of academic programmes for various sections of the society;</li>
              <li>Optimization and integration of modern methods of teaching and learning;</li>
              <li>Ensuring credible assessment and evaluation processes;</li>
              <li>Ensuring the proper allocation, adequacy and maintenance of support structure and services; and</li>
              <li>Sharing of research findings and networking with other institutions in India and abroad.</li>
            </ul>

            <h3>Functions:</h3>
            <ul>
              <li>Development and application of quality benchmarks;</li>
              <li>Setting parameters for various academic and administrative activities of the institution;</li>
              <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty development to adopt the required knowledge and technology for participatory teaching and learning process;</li>
              <li>Collection and analysis of feedback from all the stakeholders on quality-related institutional processes;</li>
              <li>Dissemination of information on various quality parameters to all the stakeholders;</li>
              <li>Organization of intra- and inter-institutional workshops and seminars on quality-related themes and promotion of quality circles;</li>
              <li>Documentation of various programmes/activities leading to quality improvement;</li>
              <li>Acting as a nodal agency of the institution for coordinating quality-related activities, including adoption and dissemination of the best practices;</li>
              <li>Development and maintenance of institutional database through MIS for the purpose of maintaining and enhancing institutional quality;</li>
              <li>Periodical conduct of Academic and Administrative Audits along with their follow-up activities;</li>
              <li>Preparation and submission of the Annual Quality Assurance Report (AQAR) as per the guidelines and parameters of NAAC.</li>
            </ul>

            <h3>Benefits:</h3>
            <ul>
              <li>Ensuring clarity and focus in the institution’s march towards quality enhancement;</li>
              <li>Ensuring internalization of the quality culture;</li>
              <li>Ensuring enhancement and coordination among the various units and activities of the institution and institutionalizing all good practices;</li>
              <li>Providing a sound basis for decision-making to improve institutional functioning;</li>
              <li>Acting as a dynamic system for quality changes in HEIs; and</li>
              <li>Building a sound methodology for documentation and internal communication.</li>
            </ul>

            <h3>Operational Features of the IQAC:</h3>
            <p>
              Quality assurance is a by-product of the ongoing efforts of an institution to define its objectives and chalk out a work plan to achieve them and also specify the checks and balances to evaluate the degree to which each of the tasks is fulfilled. Hence devotion and commitment to improvement rather than mere institutional control is the basis for devising procedures and instruments for assuring quality. The IQAC has to ensure that whatever is done in the institution for higher education is done efficiently and effectively. In order to do this, the IQAC will have to first establish procedures and modalities to collect data and information on the various aspects of the functioning of the institution. The IQAC Coordinator has a major role in implementing these functions. The IQAC may derive support from the already existing units and mechanisms that contribute to the functions listed above.
            </p>
          </div>

          {/* PDF Links */}
          <ul className="iqac-links">
            <li><a href={'/pdf/Strategic-plan.pdf'} target="_blank" rel="noopener noreferrer">STRATEGIC PLAN</a></li>
            <li><a href={`/pdf/IQAC-Policy.pdf`} target="_blank" rel="noopener noreferrer">IQAC POLICY</a></li>
            <li><a href={`/pdf/IQAC-QUALITY-INITIATIVES.pdf`} target="_blank" rel="noopener noreferrer">IQAC – QUALITY INITIATIVES</a></li>
          </ul>

          {/* Collapsible Sections */}
          {collapsibleData.map((section, index) => (
            <div className="iqac-card" key={index}>
              <button
                className="iqac-card-header"
                onClick={() => toggleCollapse(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{section.title}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className="iqac-card-body">
                  {section.items.map((item, idx) => (
                    <div className="iqac-subcard" key={idx}>
                      <a
                        href={`/pdf/${item.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iqac-download-link"
                      >
                        <span>{item.name}</span>
                        <span className="iqac-icon">📄</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Iqac;
