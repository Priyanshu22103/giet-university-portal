import React, { useState } from "react";
import "./ApplicationForm.css";
import Navbar from "../Home/Navbar.jsx";
import Footer from "../Home/Footer.jsx";
const PROGRAMMES = {
  UG: [
    "B.Tech. (CSE)",
    "B.Tech. (ECE)",
    "B.Tech. (EEE)",
    "B.Tech. (MECH)",
    "B.Tech. (CIVIL)",
    "B.Tech. (AIML)",
    "B.Tech. (LE) CSE",
    "B.Sc. (Agriculture)",
    "B.Sc. (Hons) Chemistry",
    "B.Sc. (Hons) Physics",
    "B.Sc. (Hons) Mathematics",
    "BBA",
    "BCA",
    "B.Com.",
    "B.Pharm.",
    "D.Pharm.",
  ],
  PG: [
    "M.Tech. (CSE)",
    "M.Tech. (VLSI)",
    "M.Tech. (Power Systems)",
    "M.Tech. (Thermal Engineering)",
    "M.Tech. (Structural Engineering)",
    "MBA",
    "MCA",
    "M.Sc. (Biotechnology)",
    "M.Sc. (Chemistry)",
    "M.Sc. (Physics)",
    "M.Sc. (Mathematics)",
    "M.Pharm.",
  ],
  PHD: [
    "Ph.D. (Engineering & Technology)",
    "Ph.D. (Management)",
    "Ph.D. (Sciences)",
    "Ph.D. (Pharmacy)",
    "Ph.D. (Agriculture)",
  ],
};
const academicFields = [
  // [label, board, year, marks, division]
  {
    exam: "10th",
    board: "tenthBoard",
    year: "tenthYear",
    marks: "tenthMarks",
    division: "tenthDivision",
  },
  {
    exam: "12th",
    board: "twelfthBoard",
    year: "twelfthYear",
    marks: "twelfthMarks",
    division: "twelfthDivision",
  },
  {
    exam: "Graduation",
    board: "graduationBoard",
    year: "graduationYear",
    marks: "graduationMarks",
    division: "graduationDivision",
  },
  {
    exam: "Other",
    board: "otherBoard",
    year: "otherYear",
    marks: "otherMarks",
    division: "otherDivision",
  },
];
const AdmissionForm = () => {
  const [success, setSuccess] = useState(false);
  const [programmeType, setProgrammeType] = useState("UG");
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [studentSign, setStudentSign] = useState(null);
  const [studentSignFile, setStudentSignFile] = useState(null);
  const [parentSign, setParentSign] = useState(null);
  const [parentSignFile, setParentSignFile] = useState(null);

  

   // All form fields
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    nationality: "",
    bloodGroup: "",
    category: "",
    religion: "",
    aadhaar: "",
    presentAddress: "",
    permanentAddress: "",
    fatherName: "",
    fatherOccupation: "",
    fatherMobile: "",
    fatherAadhaar: "",
    fatherEmail: "",
    motherName: "",
    motherOccupation: "",
    motherMobile: "",
    motherAadhaar: "",
    motherEmail: "",
    // Academic details
    tenthBoard: "",
    tenthYear: "",
    tenthMarks: "",
    tenthDivision: "",
    twelfthBoard: "",
    twelfthYear: "",
    twelfthMarks: "",
    twelfthDivision: "",
    graduationBoard: "",
    graduationYear: "",
    graduationMarks: "",
    graduationDivision: "",
    otherBoard: "",
    otherYear: "",
    otherMarks: "",
    otherDivision: "",
    // Entrance details
    entranceExam: "",
    entranceYear: "",
    entranceRoll: "",
    entranceScore: "",
    // Declaration
    declarationDate: "",
    declarationPlace: "",
  });
    
    // Helper to handle file input and preview
  const handleFileChange = (e, setter, fileSetter) => {
    if (e.target.files && e.target.files[0]) {
      setter(URL.createObjectURL(e.target.files[0]));
      fileSetter(e.target.files[0]);
    }
    };
    
  // Handle text input changes
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("programmeType", programmeType);
    formData.append("programmeName", selectedProgramme);
    if (photoFile) formData.append("photo", photoFile);
    if (studentSignFile) formData.append("studentSign", studentSignFile);
    if (parentSignFile) formData.append("parentSign", parentSignFile);

    try {
      const res = await fetch("http://localhost:8082/MyProj/submitForm", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      if (res.ok && text.toLowerCase().includes("success")) {
        setSuccess(true);
      } else {
        alert(text);
      }
    } catch (err) {
      alert("Submission failed: " + err.message);
    }
  };

  return (
    <>
      <div>
        <Navbar/>
      </div>
    <div className="form-bg">
      <div className="form-card">
        {success ? (
          <div className="success-message">
            <h2>Success Submitted!</h2>
            <p>Your application has been received.</p>
          </div>
        ) : (
          <>
            <h2 className="form-title">Personal Details</h2>
            <form
              className="container"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label>Photograph *</label>
                  <div
                    className="upload-box"
                    onClick={() =>
                      document.getElementById("photo-upload").click()
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {photo ? (
                      <img
                        src={photo}
                        alt="Photograph"
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginBottom: 8,
                        }}
                      />
                    ) : (
                      <>
                        <span role="img" aria-label="upload">
                          📷
                        </span>
                        <p>Click to upload</p>
                      </>
                    )}
                    <input
                      id="photo-upload"
                      name="photo"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        handleFileChange(e, setPhoto, setPhotoFile)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Phone No. *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile No."
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label>Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <label>Gender *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={form.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Nationality *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nationality"
                    value={form.nationality}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Blood Group *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bloodGroup"
                    value={form.bloodGroup}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Category *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={form.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label>Religion *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="religion"
                    value={form.religion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Aadhaar No. *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="aadhaar"
                    value={form.aadhaar}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Present Address *</label>
                  <textarea
                    className="form-control"
                    name="presentAddress"
                    value={form.presentAddress}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label>Permanent Address *</label>
                  <textarea
                    className="form-control"
                    name="permanentAddress"
                    value={form.permanentAddress}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <h3 className="form-subtitle">Family Details</h3>

              <div className="row">
                <div className="col-md-6">
                  <label>Father's Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fatherName"
                    value={form.fatherName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fatherOccupation"
                    value={form.fatherOccupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Mobile No.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fatherMobile"
                    value={form.fatherMobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <label>Aadhaar No.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fatherAadhaar"
                    value={form.fatherAadhaar}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name="fatherEmail"
                    value={form.fatherEmail}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Mother's Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="motherName"
                    value={form.motherName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    name="motherOccupation"
                    value={form.motherOccupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Mobile No.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="motherMobile"
                    value={form.motherMobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <label>Aadhaar No.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="motherAadhaar"
                    value={form.motherAadhaar}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name="motherEmail"
                    value={form.motherEmail}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <h3 className="form-subtitle">Programme Applying For</h3>

              <div className="program-buttons">
                <button
                  type="button"
                  className={programmeType === "UG" ? "active" : ""}
                  onClick={() => setProgrammeType("UG")}
                >
                  UG PROGRAMME
                </button>
                <button
                  type="button"
                  className={programmeType === "PG" ? "active" : ""}
                  onClick={() => setProgrammeType("PG")}
                >
                  PG PROGRAMME
                </button>
                <button
                  type="button"
                  className={programmeType === "PHD" ? "active" : ""}
                  onClick={() => setProgrammeType("PHD")}
                >
                  PH.D. PROGRAMME
                </button>
              </div>

              <div className="programme-options">
                {PROGRAMMES[programmeType].map((prog, idx) => (
                  <div className="form-check" key={prog}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="programme"
                      id={`programme-${programmeType}-${idx}`}
                      value={prog}
                      checked={selectedProgramme === prog}
                      onChange={() => setSelectedProgramme(prog)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`programme-${programmeType}-${idx}`}
                    >
                      {prog}
                    </label>
                  </div>
                ))}
              </div>
              {/* --- Academic Details Section --- */}
              <h3 className="form-subtitle">Academic Details</h3>
            <div className="academic-details-header">
              <div><label>Examination</label></div>
              <div><label>Board/University</label></div>
              <div><label>Year</label></div>
              <div><label>Percentage/CGPA</label></div>
              <div><label>Division</label></div>
            </div>
            {academicFields.map((field) => (
              <div className="academic-details-row" key={field.exam}>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    value={field.exam}
                    readOnly
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name={field.board}
                    value={form[field.board] || ""}
                    onChange={handleInputChange}
                    placeholder={`${field.exam} Board/University`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name={field.year}
                    value={form[field.year] || ""}
                    onChange={handleInputChange}
                    placeholder={`${field.exam} Year`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name={field.marks}
                    value={form[field.marks] || ""}
                    onChange={handleInputChange}
                    placeholder={`${field.exam} %/CGPA`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name={field.division}
                    value={form[field.division] || ""}
                    onChange={handleInputChange}
                    placeholder={`${field.exam} Division`}
                  />
                </div>
              </div>
            ))}

              {/* --- Entrance Details Section --- */}
              <h3 className="form-subtitle">Entrance Details</h3>
              <div className="row">
                <div className="col-md-3">
                  <label>Exam Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="entranceExam"
                    value={form.entranceExam || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="entranceYear"
                    value={form.entranceYear || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Roll No</label>
                  <input
                    type="text"
                    className="form-control"
                    name="entranceRoll"
                    value={form.entranceRoll || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <label>Score/Rank</label>
                  <input
                    type="text"
                    className="form-control"
                    name="entranceScore"
                    value={form.entranceScore || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* --- Declaration Section --- */}
               <h3 className="form-subtitle">Declaration</h3>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    I hereby declare that all the information provided above is
                    true to the best of my knowledge and belief. If any
                    information is found to be false, my admission may be
                    cancelled.
                  </p>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <div>
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="declarationDate"
                        value={form.declarationDate || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label>Place</label>
                      <input
                        type="text"
                        className="form-control"
                        name="declarationPlace"
                        value={form.declarationPlace || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row signature-section">
                <div className="signature">
                  <label>Signature of Student</label>
                  <div
                    className="signature-box"
                    onClick={() =>
                      document.getElementById("student-sign-upload").click()
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {studentSign ? (
                      <img
                        src={studentSign}
                        alt="Student Signature"
                        style={{
                          width: 120,
                          height: 40,
                          objectFit: "contain",
                          background: "#fff",
                          borderRadius: 4,
                          marginBottom: 8,
                        }}
                      />
                    ) : (
                      <>Click to upload</>
                    )}
                    <input
                      id="student-sign-upload"
                      name="studentSign"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        handleFileChange(e, setStudentSign, setStudentSignFile)
                      }
                    />
                  </div>
                </div>
                <div className="signature">
                  <label>Signature of Parent</label>
                  <div
                    className="signature-box"
                    onClick={() =>
                      document.getElementById("parent-sign-upload").click()
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {parentSign ? (
                      <img
                        src={parentSign}
                        alt="Parent Signature"
                        style={{
                          width: 120,
                          height: 40,
                          objectFit: "contain",
                          background: "#fff",
                          borderRadius: 4,
                          marginBottom: 8,
                        }}
                      />
                    ) : (
                      <>Click to upload</>
                    )}
                    <input
                      id="parent-sign-upload"
                      name="parentSign"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        handleFileChange(e, setParentSign, setParentSignFile)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel">
                  CANCEL
                </button>
                <button type="submit" className="btn-submit">
                  SUBMIT
                </button>
              </div>
            </form>
          </>
        )}
        <footer>
          <p>
            All Rights Reserved by Central Admission Cell. Designed and
            Developed by <span>GIET University, Gunupur.</span>
          </p>
        </footer>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
};

export default AdmissionForm;
