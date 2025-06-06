import React,{useEffect} from "react";
import "./AcademicIntegrityCommittee.css";
import Footer from "../Home/Footer";
const UserCard = ({ name }) => (
  <div className="aic-usercard">
    <h4>{name}</h4>
  </div>
);

export default function AcademicIntegrityCommittee() {
  useEffect(() => {
            document.title='Academic Integrity Committee - GIET University | Odisha | Gunupur'
      },[])
  return (
    <>
      <br/>
      <div>
        <h2 className="aic-title">
         ACADEMIC INTEGRITY COMMITTEE (AIC)
        <span className="underline"></span>
        </h2>
      </div>
      <div className="aic-container">
        <p>
          The Academic Integrity Committee (AIC) ensures that the core values of
          honesty, trust, fairness, respect, and responsibility are upheld
          throughout the institution. It plays a vital role in fostering an
          ethical academic culture for students, faculty, and staff.
        </p>

        <h3>Purpose</h3>
        <p>
          The AIC is dedicated to promoting academic honesty, preventing
          misconduct, and handling violations with fairness and transparency.
          The committee educates the community on best practices in academic
          writing, assessments, and research conduct.
        </p>

        <h3>Key Responsibilities</h3>
        <ul className="aic-list">
          <li>Reviewing and investigating academic misconduct cases</li>
          <li>Conducting hearings and recommending fair actions</li>
          <li>Promoting awareness of academic integrity policies</li>
          <li>Organizing workshops, seminars, and training sessions</li>
          <li>Supporting faculty in designing ethical assessments</li>
        </ul>

        <h3>Committee Members</h3>
        <div className="aic-usercards">
          <UserCard name="Rohan Hota" />
          <UserCard name="Harsh Kumar" />
          <UserCard name="Awadhesh Mahto" />
          <UserCard name="Priyanshu Jena" />
          <UserCard name="Rahul Sahoo" />
        </div>

        <h3>Contact</h3>
        <p>
          For inquiries, concerns, or to report academic dishonesty, contact us
          via email at{" "}
          <a href="mailto:aic@university.edu">aic@university.edu</a> or visit
          the Academic Integrity Office during working hours.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
