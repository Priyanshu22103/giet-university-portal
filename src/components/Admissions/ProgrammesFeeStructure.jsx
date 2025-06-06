import React,{useEffect} from 'react';
import './ProgrammesFeeStructure.css';

const ProgrammesFeeStructure = () => {
   useEffect(() => {
        document.title = 'Programmes & Fee Structure - GIET University | Odisha | Gunupur'
      }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
         PROGRAMMES & FEE STRUCTURE
        <span className="underline"></span>
        </h2>
      </div>
      <div className="programmes-fee-container">
      <div className="cardx">
        <h2>GIET UNIVERSITY</h2>
        <h1>Programmes</h1>
        <a
          className="btn blue"
          href="https://www.giet.edu/programmes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          VIEW ALL
        </a>
      </div>

      <div className="cardx">
        <h2>GIET UNIVERSITY</h2>
        <h1>Fees Structure</h1>
        <p className="year">(2024-2025)</p>
        <a
          className="btn outline-yellow"
          href="https://www.giet.edu/wp-content/uploads/2025/05/FEES-STRUCTRUCTURE-FOR-2024-OF-GIETU-GUNUPUR.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD NOW
        </a>
      </div>
    </div>
    </>
    
  );
};

export default ProgrammesFeeStructure;
