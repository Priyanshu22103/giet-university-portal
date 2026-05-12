import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import logo from "../../assets/giet_logo.png";
import building from "../../assets/contact-us-img.jpg";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - GIET University | Odisha | Gunupur";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/ContactUs/ContactServlet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
console.log("Response from server:", responseText);

if (response.ok) {
  alert("Enquiry submitted successfully!");
  setFormData({ name: "", email: "", phone: "", message: "" });
} else {
  alert("Failed to submit enquiry. Server says: " + responseText);
}

    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2>CONTACT US</h2>
            <div className="underline" />
            <img src={logo} alt="Logo" className="giet-logo" />
            <h3 className="contact-subtitle">GIET UNIVERSITY</h3>
            <p className="contact-text">
              Gunupur, At – Gobriguda, Po – Kharling,<br />
              Dist. – Rayagada, Odisha - India, 765022<br />
              +91-8118053001, +91-7735745535,<br />
              06857-250170, 06857-250172
            </p>
            <h3 className="contact-subtitle">GIETU GUNUPUR CORPORATE OFFICE</h3>
            <p className="contact-text">
              BDA House No. HIG – 42A, Baramunda, Bhubaneswar,<br />
              Dist– Khorda, Odisha – India
            </p>
          </div>

          <div className="contact-right">
            <h2 className="form-title" style={{ color: "#3e3e84" }}>SUBMIT AN ONLINE ENQUIRY</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" className="submitt-btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <img src={building} alt="GIET Building" className="contact-img" />
          <iframe
            title="GIET Map"
            className="contact-map"
            src="https://www.google.com/maps/embed?...(map link)"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
