import React from 'react';
import './NavbarOne.css';
import { Link } from 'react-router-dom';
const NavbarOne = () => (
  <>
    <div className="top-banner" style={{width:'1594px',marginTop:'-40px',paddingBottom:'40px'}}>
      
      <p style={{ paddingLeft: '0px' }}>
        <strong>
          GANDHI INSTITUTE OF ENGINEERING AND TECHNOLOGY UNIVERSITY, ODISHA, GUNUPUR
        </strong>
      </p>
    </div>
    <div className="info-strip" style={{width:'1699px',marginTop:'-100px',marginLeft:'-100px',paddingBottom:'13px',paddingTop:'13px'}}>
      {/* width:'1700px' */}
      <Link to='/applynow' className="apply-now">
        Apply Now <b style={{color:'red'}}>GIETEE 2025</b>
      </Link>
      <div className="info-links">
        <Link to='/naac'>NAAC</Link>
        <Link to='/nirf'>NIRF</Link>
        <Link to='/research/'>Research</Link>
        <Link to='/contactus'>Contact Us</Link>
      </div>
    </div>
  </>
);

export default NavbarOne;