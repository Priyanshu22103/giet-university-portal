import React, { useState, useEffect } from "react";
import "./ApplyNow.css";
import img from "../../assets/logo-social.png";
import side_image from "../../assets/apply-background.webp";
import { useNavigate } from "react-router-dom";

const ApplyNow = () => {
  useEffect(() => {
    document.title = "Apply Now - GIET University | Odisha | Gunupur";
  }, []);

  const navigate = useNavigate();

  const [signUpStatus, setsignUpStatus] = useState("signup");

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.rePassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:8082/CandidateAuth/SignUpServlet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });

      const data = await res.json();
      setMessage(data.message || "Signup successful!");

      if (data.success) setsignUpStatus("signin");
    } catch (err) {
      setMessage("Signup failed. Try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8082/CandidateAuth/LoginServlet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      setMessage(
        data.message || (data.success ? "Login successful!" : "Login failed!")
      );

      if (data.success) {
        navigate("/application-form");
      }
    } catch (err) {
      setMessage("Login failed. Try again.");
    }
  };

  return (
    <>
      <span id="topnavbar">
        <span style={{ marginLeft: "50px", marginRight: "100px" }}>
          <span style={{ color: "black" }}>For Admission Process</span>
          <br />
          <b style={{ color: "black" }}>
            Call/ WhatsApp: <span style={{ color: "blue" }}>7735745535</span>
          </b>
        </span>

        <span style={{ position: "absolute", paddingLeft: "290px" }}>
          <button id="applynowbutton" onClick={() => setsignUpStatus("signin")}>
            Apply now
          </button>
        </span>
      </span>

      <span id="logo">
        <img
          src={img}
          height="120px"
          width="820px"
          alt="GIET University logo"
          style={{ border: "2px solid darkblue" }}
        />
      </span>

      <div style={{ backgroundColor: "grey", height: "1px", width: "860px" }}></div>

      {message && <div style={{ color: "red", margin: "10px" }}>{message}</div>}

      <div className="form-container">
        <div className="form-content">

          {signUpStatus === "signup" ? (
            <form id="signupform" onSubmit={handleSignup}>
              <h1 style={{ fontSize: "48px" }}>Sign Up</h1>

              <span>
                First Name:
                <span style={{ marginLeft: "270px" }}>Last Name:</span>
                <br /><br />

                <input
                  type="text"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleSignupChange}
                  style={{ height: "30px", width: "240px" }}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleSignupChange}
                  style={{ marginLeft: "100px", height: "30px", width: "240px" }}
                  required
                />
              </span>

              <br /><br /><br />

              <span>
                Email Address:
                <span style={{ marginLeft: "243px" }}>Phone Number:</span>
                <br /><br />

                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  style={{ height: "30px", width: "240px" }}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  style={{ marginLeft: "100px", height: "30px", width: "240px" }}
                  required
                />
              </span>

              <br /><br /><br />

              Address:
              <br /><br />

              <textarea
                name="address"
                value={signupData.address}
                onChange={handleSignupChange}
                style={{ height: "40px", width: "590px" }}
                required
              ></textarea>

              <br /><br /><br />

              <span>
                Password:
                <span style={{ marginLeft: "284px" }}>Re Enter Password:</span>
                <br /><br />

                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  style={{ height: "30px", width: "240px" }}
                  required
                />

                <input
                  type="password"
                  name="rePassword"
                  value={signupData.rePassword}
                  onChange={handleSignupChange}
                  style={{ marginLeft: "100px", height: "30px", width: "240px" }}
                  required
                />
              </span>

              <br /><br /><br />

              <button id="btn-signup" type="submit">
                Sign Up
              </button>

              <br /><br />

              <input type="checkbox" /> Subscribe to our newsletter

              <div style={{ display: "flex", paddingLeft: "195px" }}>
                Have an account?
                <span
                  style={{ marginTop: "25px", color: "darkblue", cursor: "pointer" }}
                  onClick={() => setsignUpStatus("signin")}
                >
                  Sign in
                </span>
              </div>
            </form>
          ) : (
            <form id="signinform" onSubmit={handleLogin}>
              <h1 style={{ fontSize: "50px" }}>Sign in</h1>

              <label style={{ fontSize: "22px" }}>Email address</label>
              <br /><br />

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Type your email"
                style={{ height: "30px", width: "320px" }}
                required
              />

              <br /><br />

              <label style={{ fontSize: "22px" }}>Password</label>
              <br /><br />

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Type your password"
                style={{ height: "30px", width: "320px" }}
                required
              />

              <br /><br />

              <button id="sign-in" type="submit">
                Sign in
              </button>

              <br /><br />

              <div id="dont-have-account">
                Don't have an account?
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setsignUpStatus("signup")}
                >
                  SignUp
                </span>
              </div>
            </form>
          )}
        </div>

        <div className="side-image">
          <img
            src={side_image}
            alt="Apply page side illustration"
          />
        </div>
      </div>
    </>
  );
};

export default ApplyNow;