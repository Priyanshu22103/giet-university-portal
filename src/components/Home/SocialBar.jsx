import React from 'react';
import { Link } from 'react-router-dom';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <Link to="/online-payment" className="pay-online">Pay</Link>
      <a href="https://www.facebook.com/gietuniversitygunupur"><i className="fab fa-facebook-f"></i></a>
      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fgietuniversity"><i className="fab fa-twitter"></i></a>
      <a href="https://www.youtube.com/gietuniversitygunupur"><i className="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com/school/gietuniversitygunupur/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/gietuniversitygunupur/#"><i className="fab fa-instagram"></i></a>
      <a href="https://api.whatsapp.com/send/?phone=917735745535&text&type=phone_number&app_absent=0"><i className="fab fa-whatsapp"></i></a>
      <a href="https://360virtualtour.giet.edu/"><i className="fas fa-vr-cardboard"></i>
</a>
    </div>
  );
};

export default SocialBar;
