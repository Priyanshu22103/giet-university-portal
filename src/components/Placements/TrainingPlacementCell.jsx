import React, { useEffect } from "react";
import "./TrainingPlacementCell.css";

const TrainingPlacementCell = () => {
  useEffect(() => {
    document.title='Placement Cell - GIET University | Odisha | Gunupur'
  },[])
  return (
    <div className="tp-container">
      {/* Hero Section */}
      <div className="tp-hero">
        <h1>Training and Placement Cell</h1>
        <p>
          The Training and Placement Cell at GIET University plays a pivotal role
          in counseling and guiding the students for their successful career
          placement. It works as a bridge between students and industry.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="tp-section">
        <h2>Objectives</h2>
        <ul>
          <li>To sharpen the technical and soft skills of students.</li>
          <li>To arrange training programs like aptitude tests, group discussions, and mock interviews.</li>
          <li>To build industry-institute interaction for better placement opportunities.</li>
        </ul>
      </div>

      {/* Activities Section */}
      <div className="tp-section tp-alt-bg">
        <h2>Activities</h2>
        <ul>
          <li>Organizing on-campus and off-campus placement drives.</li>
          <li>Hosting industry talks, expert sessions, and workshops.</li>
          <li>Collaborating with leading training institutes for certification courses.</li>
        </ul>
      </div>
      {/* Placement Team Section */}
      <div className="tp-section tp-alt-bg">
        <h2>Placement Team</h2>
        <table className="tp-team-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Officers Name</th>
              <th>Designation</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Prof. (Dr.) N V J Rao</td>
              <td>Placement Advisor</td>
              <td>
                deanggi@giet.edu<br />
                Mob: 9437044170, 9668259219, 06857-250170
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Prof. (Dr.) Jyotirmaya Mishra</td>
              <td>Prof - In charge, Training and Placement</td>
              <td>
                jyoti@giet.edu<br />
                Mob: 9437207065, 7008318809, 06857-251157
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr. Sumita Padhi</td>
              <td>Deputy Manager – Corporate Relations</td>
              <td>
                Bhubaneswar<br />
                sumita@giet.edu<br />
                Mob: 7978010647
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mr. Sanjaya Kumar Gouda</td>
              <td>Placement Officer</td>
              <td>Gunupur<br />Mob: 9861883320</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mr. B K Karan</td>
              <td>Placement Officer</td>
              <td>
                Sagarika Apartment (ground floor),<br />
                333 A/1, Jessore Road, Kolkata – 700089<br />
                Mob: 9831161536<br />
                bkkaran@giet.edu
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mr. Kashif Ahmad</td>
              <td>Placement Officer</td>
              <td>Aurangabad<br />Mob: 9823888898</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Mr. Manoj Pradhan</td>
              <td>Placement Officer</td>
              <td>New Delhi<br />Mob: 9654549571</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Mr. Sunil Nanda</td>
              <td>Placement Officer</td>
              <td>Gunupur<br />Mob: 8260045040</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Mr. Pritam Majhi</td>
              <td>Placement Officer</td>
              <td>Gunupur<br />Mob: 7381052114</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Ms. Renuka Mandal</td>
              <td>Placement Officer</td>
              <td>Gunupur<br />Mob: 9770808022</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pre-Placement Training Section */}
      <div className="tp-section">
        <h2>Pre-Placement Training Program</h2>
        <p>
          The Pre Placement Training aims at sharpening the skills of individuals for success in placement tests. The program is conducted with experts from the industry, enabling the transition from college life to corporate readiness. A mix of soft skills, technical training, and mock sessions ensure students are confident and placement-ready.
        </p>
        <table className="tp-training-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Academic Year</th>
              <th>Training Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1st Year</td>
              <td>
                Communicative English<br />
                Personality Development techniques, HTML, PHP
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2nd Year</td>
              <td>
                Business English Communication (BEC Vantage)<br />
                Accent Training<br />
                Oracle (SQL / PL SQL), Python, JAVA, .NET<br />
                Visit to Industry
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3rd Year</td>
              <td>
                Pre Placement Training – Arithmetic, Reasoning, General English<br />
                PPT – C, C++, DS, JAVA, DBMS, Linux & OS<br />
                GD, PI Techniques & Soft Skills<br />
                Mock Test / Very Similar Test<br />
                Campus Connect Program<br />
                HR Meet and Interaction session<br />
                Summer Training – AI, Machine Learning, Data Science, Hadoop
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>4th Year</td>
              <td>
                Training GAP Analysis<br />
                Company specific Brush up Sessions<br />
                Recruitment Drives Start
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Placement Highlights */}
      <div className="tp-section tp-alt-bg">
        <h2>Placement Highlights</h2>
        <p>
          Our students have been placed in reputed companies like TCS, Infosys,
          Wipro, Capgemini, Tech Mahindra, and many more. Highest package offered: ₹12 LPA.
        </p>
        <div className="tp-highlight-box">
          <div>
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>Companies Visited</p>
          </div>
          <div>
            <h3>₹12 LPA</h3>
            <p>Highest Package</p>
          </div>
        </div>
      </div>

      {/* Placement Policy Section */}
      <div className="tp-section">
        <h2>Placement Policy</h2>
        <ol>
          <li><strong>Step One:</strong> Companies wishing to visit GIETU, Gunupur for campus placements should communicate to SPOC of GIETU.</li>
          <li><strong>Step Two:</strong> The Training and Placement Cell will send an invitation mail to the company within 24 hrs seeking essential information about the job profile and other relevant details.</li>
          <li><strong>Step Three:</strong> Date of Campus visit will be negotiated with the Training and Placements Cell and a SPOC will be allotted for the purpose.</li>
          <li><strong>Step Four:</strong> Companies’ entire schedule will be managed by the SPOC allotted to them. Companies can organize their placement session as per their convenience using the facilities available at our campus.</li>
          <li><strong>Step Five:</strong> Once the recruitment process is over, the Company needs to declare the final selection list on spot or through e-mail.</li>
          <li><strong>Step Six:</strong> The Company can rollout the offers on spot or can send within a reasonable span of time.</li>
          <li><strong>Step Seven:</strong> The Training and Placement Department will be communicating the acceptance of the offers by the candidates and ensure to make them reach to the company on the date assigned for joining.</li>
        </ol>
      </div>

      {/* Contact Section */}
      <div className="tp-section">
        <h2>Contact Us</h2>
        <p><strong>Prof. (Dr.) Jyotirmaya Mishra</strong><br />Head – Training & Placement Cell</p>
        <p>Email: tpo@giet.edu<br />Phone: +06857-251157</p>
      </div>
    </div>
  );
};

export default TrainingPlacementCell;
