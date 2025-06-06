import React, { useState,useEffect } from 'react';
import './CGPACalculator.css';
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const CGPACalculator = () => {
  useEffect(() => {
    document.title = 'CGPA Calculator - GIET University | Odisha | Gunupur';
  }, []);
  const [cgpa, setCgpa] = useState('');
  const [percentage, setPercentage] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (cgpa !== '' && !isNaN(cgpa)) {
      setPercentage((parseFloat(cgpa) * 9.5).toFixed(2));
    } else {
      setPercentage(null);
    }
  };

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="cgpa-container">
      <h1 className="notices-title">CGPA-CALCULATOR</h1>
      <div className="about-heading-underline"></div>
      <h2 className="cgpa-title">CGPA to Percentage Calculator</h2>
      <form className="cgpa-form" onSubmit={handleCalculate}>
        <input
          type="number"
          step="0.01"
          min="0"
          max="10"
          value={cgpa}
          onChange={e => setCgpa(e.target.value)}
          placeholder="Enter your CGPA"
          required
        />
        <br />
        <button type="submit">
          Calculate
        </button>
      </form>
      {percentage !== null && (
        <div className="cgpa-result">
          Percentage: <span>{percentage}%</span>
        </div>
      )}
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default CGPACalculator;