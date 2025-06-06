import React,{useEffect} from 'react';
import './ApplyOnline.css';
import { Link } from "react-router-dom";
export default function ApplyOnline() {
  useEffect(() => {
      document.title = 'Apply Online - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
         APPLY ONLINE
        <span className="underline"></span>
        </h2>
      </div>
      <div className="apply-container">
      <div className="apply-card">
        <h2 className="apply-title">GIET UNIVERSITY</h2>
        <h3 className="apply-subtitle">Admissions Open 2025</h3>
        <p className="apply-online-text">Apply Online</p>
        {/* <a href="https://admission.giet.edu/" target="_blank" rel="noopener noreferrer">
          <button className="apply-button">APPLY NOW</button>
        </a> */}
          <Link to='/applynow'>
              <button className="apply-button">APPLY NOW</button>
          </Link>
        <div className="apply-contact">
          <p><span role="img" aria-label="email">📧</span> admission[at]giet[dot]edu</p>
          <p><span role="img" aria-label="phone">📞</span> +91-7735745535</p>
        </div>
      </div>
    </div>
    </>
    
  );
}
