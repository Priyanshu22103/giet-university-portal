import React,{useEffect} from 'react';
import './ApplicationProcess.css';
import { Link } from "react-router-dom";
export default function ApplicationProcess() {
   useEffect(() => {
        document.title = 'Application Process - GIET University | Odisha | Gunupur'
      }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
         APPLICATION PROCESS
        <span className="underline"></span>
        </h2>
      </div>
      <div className="application-process-container">
      <h2>Application Procedure</h2>
      <p>
        Application Form and Prospectus for admissions 2024 are available online. Aspirants have to apply online at{' '}
        <a href="https://www.giet.edu/" target="_blank" rel="noopener noreferrer">https://www.giet.edu/</a>
      </p>

      <h3>Steps for Online Applications:</h3>
      <p><strong>STEP 1</strong> – Browse GIET University website <a href="https://www.giet.edu/" target="_blank" rel="noopener noreferrer">https://www.giet.edu/</a></p>
      <p><strong>STEP 2</strong> – Click on Admission Open 2024 “Apply Now”</p>
      <p><strong>STEP 3</strong> – Register on our application portal with your email address. To register <Link to='/applynow'>click here</Link></p>
      <p><strong>STEP 4</strong> – Log-in using your email id and password</p>
      <p><strong>STEP 5</strong> – Fill in the application form online. Please note that a partially filled application form will not be saved.</p>
      <p><strong>STEP 6</strong> – After filling in the application form, click “Submit” and then on the next page, agree to the declaration and click on “Confirm Submission”.</p>
      <p><strong>STEP 7</strong> – Preview your application and print it if you require.</p>

      <h3>CHECK LIST:</h3>
      <div className="a-box">
        <p><strong>Please keep the following handy before starting to apply:</strong></p>
        <ul>
          <li>Scanned copy of photograph / digital photograph (Colour, 3.5 cm X 4.5 cm, 10 KB TO 20 KB)</li>
          <li>Marks of all required academic qualifications. For graduate programme applications, class XII marks may be updated later if results are not yet declared. For post graduate programme applications, graduation marks may be updated later if results are not yet declared</li>
          <li>Roll nos. and scores of entrance tests (as applicable). These may be updated later if results are not yet declared</li>
        </ul>
        <p><strong>Note:</strong></p>
        <ul>
          <li>No Application/ Examination Fees for GIETEE– 2024 are charged. Please refer separate notification for Ph.D.</li>
          <li>If you are paying Initial Admission fee; you can pay online to <strong>ACCOUNT NAME: GIET UNIVERSITY, GUNUPUR. ACCOUNT NO. 38401477840, IFSC CODE: SBIN0017769, BRANCH CODE: 17769.</strong></li>
        </ul>
      </div>

      <p className="email-text">
        YOU CAN MAIL US THE APPLICATION ID, NAME OF THE CANDIDATE AND PAYMENT DETAILS ACROSS <a href="mailto:admission@giet.edu">admission[at]giet[dot]edu</a> or <strong>WhatsApp/Call:</strong> +91 7735745535
      </p>

      <h3>Offline Applications:</h3>
      <ul>
        <li>Download the application form and fill your basic details and download application form in PDF format. <strong><a href="https://www.giet.edu/admissions/application-process/#" target="_blank" rel="noopener noreferrer">Download</a></strong></li>
        <li>Print the application form, fill-in the required details completely, affix recent color passport size photo and send/submit at the following address:</li>
      </ul>

      <address>
        <strong>Office of Dean Admissions</strong><br />
        Central Admission Cell, Admin Block<br />
        GIET University, Gunupur<br />
        At – Gobriguda, Po– Kharling, Gunupur-765022<br />
        Dist – Rayagada, Odisha, India.
      </address>
    </div>
    </>
  );
}
