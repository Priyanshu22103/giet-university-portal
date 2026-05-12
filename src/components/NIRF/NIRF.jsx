import React, { useState, useEffect } from "react";
import "./NIRF.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const NIRF = () => {
  const [nirfOpen, setNirfOpen] = useState(false);
  const [dcsOpen, setDcsOpen] = useState(false);

  useEffect(() => {
    document.title = "NIRF - GIET University | Odisha | Gunupur";
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <br />
      <br />
      <br />

      <div
        className="nirf-container"
        style={{ backgroundColor: "white" }}
      >
        <h2
          className="section-title"
          style={{ color: "black", marginLeft: "310px" }}
        >
          NIRF
        </h2>

        <div
          className="divider"
          style={{ marginLeft: "305px" }}
        >
          <div className="blue-bar"></div>
          <div className="orange-bar"></div>
        </div>

        <br />

        {/* NIRF RANKING */}
        <div className={`collapsible${nirfOpen ? " open" : ""}`}>
          <button onClick={() => setNirfOpen(!nirfOpen)}>
            NIRF RANKING {nirfOpen ? "−" : "+"}
          </button>

          <div
            className={`collapsible-content${nirfOpen ? " open" : ""}`}
          >
            <div className="child-links">

              <a
                href="/pdfs/nirf-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2024: Engineering
              </a>

              <a
                href="/pdfs/nirf-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2022: Engineering
              </a>

            </div>
          </div>
        </div>

        {/* DCS */}
        <div className={`collapsible${dcsOpen ? " open" : ""}`}>
          <button onClick={() => setDcsOpen(!dcsOpen)}>
            DATA CAPTURING SYSTEM (DCS){" "}
            {dcsOpen ? "−" : "+"}
          </button>

          <div
            className={`collapsible-content${dcsOpen ? " open" : ""}`}
          >
            <div className="child-links">

              <a
                href="https://www.nirfindia.org/Rankings/2024/EngineeringRanking300.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2025: Engineering
              </a>

              <a
                href="/pdfs/nirf-2025-agriculture.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2025: AGRICULTURE
              </a>

              <a
                href="/pdfs/nirf-2025-management.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2025: MANAGEMENT
              </a>

              <a
                href="/pdfs/nirf-2025-overall.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2025: OVERALL
              </a>

              <a
                href="/pdfs/nirf-2024-management.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2024: Management
              </a>

              <a
                href="/pdfs/nirf-2024-agriculture.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIRF India Rankings 2024: AGRICULTURE
              </a>

              <a
                href="/pdfs/nirf-framework-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Institutional Ranking Framework 2023
              </a>

            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default NIRF;