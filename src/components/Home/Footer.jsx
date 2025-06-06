import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>GIET UNIVERSITY, GUNUPUR</h3>
          <p>Gobriguda, Po- Kharling, Gunupur, Rayagada, Odisha - 765022</p>
          <p>📧 enquiry@giet.edu</p>
          <p>📞 +91-7735745535, 06857-250172</p>

          <div className="social-icons">
            <h4>Follow Us</h4>
            <div className="icons">
              <a href="https://www.facebook.com/gietuniversitygunupur"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fgietuniversity"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/gietuniversitygunupur"><i className="fab fa-youtube"></i></a>
              <a href="https://www.linkedin.com/school/gietuniversitygunupur/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/gietuniversitygunupur/#"><i className="fab fa-instagram"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=917735745535&text&type=phone_number&app_absent=0"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <div className="vertical-line" />

        <div className="footer-right">
          <h3>Quick Links</h3>
          <div className="columns">
            <ul>
              <li>
                <Link to="/about-gietu">About GIETU</Link>
              </li>
              <li>
                <Link to="/academic-calendar">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/authorities">Authorities</Link>
              </li>
              <li>
                <Link to="/about-gietu">Awards & Ranking</Link>
              </li>
              <li>
                <Link to="/about-gietu">CSR</Link>
              </li>
              <li>
                <Link to="/">Facilities for Physically Challenged</Link>
              </li>
              <li>
                <Link to="/iqac">IQAC</Link>
              </li>
              <li>
                <Link to="/mous">MoUs</Link>
              </li>
              <li>
                <a href={'/pdf/MANDATORY-DISCLOSURES.pdf'} target="_blank" rel="noopener noreferrer">Mandatory Disclosures</a>
              </li>
              <li>
                <Link to="/about-gietu">NCC Unit</Link>
              </li>
              <li>
                <a href={'/pdf/r&d.pdf'} target="_blank" rel="noopener noreferrer">R & D</a>
              </li>
              <li>
                <Link to="/about-gietu">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/">Anti-Ragging Committee</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.aicte-india.org/">AICTE</a>
              </li>
              <li>
                <a href={'/pdf/ARIIA.pdf'} target="_blank" rel="noopener noreferrer">ARIIA</a>
              </li>
              <li>
                <a href="https://www.eyuvacentergietu.in/">E-YUVA CENTER</a>
              </li>
              <li>
                <a href="https://icar.org.in/">MoE</a>
              </li>
              <li>
                <a href="https://www.nbaind.org/">NBA</a>
              </li>
              <li>
                <a href="http://naac.gov.in/index.php/en/">NAAC</a>
              </li>
              <li>
                <Link to="/nirf">NIRF</Link>
              </li>
              <li>
                <a href="https://onmrc.in/">ONMRC</a>
              </li>
              <li>
                <a href="https://swayam.gov.in/">Swayam</a>
              </li>
              <li>
                <a href="https://www.ugc.gov.in/">UGC</a>
              </li>
              <li>
                <a href={'/pdf/UniversityAct2018.pdf'} target="_blank" rel="noopener noreferrer">University Act 2018</a>
              </li>  
              <li>
                <a href={'/pdf/University-Statutes.pdf'} target="_blank" rel="noopener noreferrer">University Statutes</a>
              </li>
              <li>
                <a href="https://www.vlab.co.in/">VLab</a>
              </li>
              <li>
                <a href={'/pdf/ip-policy.pdf'} target="_blank" rel="noopener noreferrer">IP Policy</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/acad-overview">Admissions</Link>
              </li>
              <li>
                <Link to="/alumniinteraction">Alumni Network</Link>
              </li>
              <li>
                <Link to="/announcements">Announcements</Link>
              </li>
              <li>
                <Link to="/authorities">Committees</Link>
              </li>
              <li>
                <Link to="/campus-flash">Campus flash</Link>
              </li>
              <li>
                <a href={'/pdf/COVID-CELL2019.pdf'} target="_blank" rel="noopener noreferrer">COVID-19 Cell</a>
              </li>
              <li>
                <Link to="/campus-flash">COVID-19 AWARENESS</Link>
              </li>
              <li>
                <Link to="/campus-flash">Environmental Sustainability</Link>
              </li>
              <li>
                <Link to="/internationalalumni">International Students</Link>
              </li>
              <li>
                <Link to="/online-payment">Online Payment</Link>
              </li>
              <li>
                <Link to="/placements">Placement Records</Link>
              </li>
              <li>
                <Link to="/programmes">Programmes</Link>
              </li>
              <li>
                <a href="https://gietuonline.in/">VLab</a>
              </li>
              <li>
                <a href={'/pdf/Fire-Safety-Certificate.pdf'} target="_blank" rel="noopener noreferrer">Fire Safety Certificate</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <a href="https://360virtualtour.giet.edu/">360° Virtual Tour</a>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Location Map</Link>
              </li>
          
              <li>
                <iframe
                  title="GIETU Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.692781689119!2d83.81660187504178!3d19.091726682121843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c7abf83b08cf9%3A0x826a02053e6b999d!2sGIET%20University!5e0!3m2!1sen!2sin!4v1715761441462!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Privacy Policy | Terms and Conditions</p>
        <p>© 2025 - All Rights Reserved. Developed by <strong>GIET University, Gunupur</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
