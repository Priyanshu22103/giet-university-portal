import React,{useEffect} from "react";
import "./GIETEE.css";
import libImage from "../../assets/lib.png";
import { Link } from "react-router-dom";
const GIETEE = () => {
  useEffect(() => {
      document.title = 'GIETEE - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
           GIETEE
        <span className="underline"></span>
        </h2>
      </div>
      <div className="gietee-wrapper">
        <div className="gietee-container">
          <p className="gietee-intro">
            <strong>GIETEE (GIET UNIVERSITY ENTRANCE EXAMINATION)</strong> (An
            exclusive entrance examination which is conducted for admission to
            the B.Tech, M.Tech, MBA, MCA and B.Sc Agriculture Programmes of the
            university)
          </p>

          <div className="gietee-top">
            <div className="gietee-image">
              <img src={libImage} alt="Library Students" />
            </div>
            <div className="gietee-yellow-card">
              <h3>GIET UNIVERSITY</h3>
              <p>Apply Online</p>
              {/* <a href="https://gietee.gietu.in/" target="_blank" rel="noopener noreferrer" className="apply-btn">
              APPLY NOW
            </a> */}
              <Link to="/applynow" className="apply-btn">
                APPLY NOW
              </Link>
              <div style={{ textAlign: "right", marginTop: "10px" }}>
                <div className="query-style">
                  For Queries Contact: +91-7735745535
                </div>
              </div>
            </div>
          </div>

          <div className="gietee-bottom">
            <div className="gietee-card blue-card">
              <h4>GIETEE 2025</h4>
              <ul>
                <li>
                  <a
                    href="https://www.giet.edu/wp-content/uploads/2020/04/Prospectus-2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GIETEE Prospectus
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.giet.edu/wp-content/uploads/2020/03/CGHB-2020-for-wsap.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Career Guidance Handbook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.giet.edu/wp-content/uploads/2025/03/GIETU-Application-form-2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Application Form
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.giet.edu/wp-content/uploads/2021/04/2021-Eligibility-Criteria.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eligibility Criteria
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.giet.edu/wp-content/uploads/2020/03/digital-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GIETU Digital Brochure
                  </a>
                </li>
              </ul>
            </div>

            <div className="gietee-card blue-card center-card">
              <h4>
                GIETEE 2025
                <br />
                <span>STUDENT LOGIN</span>
              </h4>
              <p>Online Examination 2025</p>
              {/* <a href="https://gietee.gietu.in/" target="_blank" rel="noopener noreferrer" className="login-btn">LOGIN</a> */}
              <Link to="/applynow" className="login-btn">
                LOGIN
              </Link>
            </div>

            <div className="gietee-card blue-card">
              <h4>
                ADMISSION
                <br />
                2025-2026
              </h4>
            
              <Link to="/applynow" className="admission-btn">
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GIETEE;
