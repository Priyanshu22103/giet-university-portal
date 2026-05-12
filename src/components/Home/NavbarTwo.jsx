import React, { useEffect, useState } from 'react';
import './NavbarTwo.css';
import gietlogo from '../../assets/gietlogo.png'
import gietsmalllogo from '../../assets/gietlogo2.png';
import { Link } from "react-router-dom";
const NavbarTwo = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <nav className={`main-nav ${isSticky ? 'sticky-nav' : ''}`}>
        <ul className="nav-menu">
          <li>
            <Link to='/about-gietu'>About GIETU</Link>
          </li>
          <li>
            <Link to='/student-clubs'>Academics</Link>
          </li>
          <li>
            <Link to='/school'>Programmes</Link>
          </li>
          <li >
              <Link to='/acad-overview'>Admissions</Link>
          </li>
          
          <li className={`nav-logo ${isSticky ? 'logo-sticky' : ''}`}>
            <div className={`logo-container ${isSticky ? 'logo-small' : ''}`}>
              <img src={isSticky ? gietsmalllogo : gietlogo} alt="GIET Logo" />
            </div>
          </li>
          <li>
            <Link to='/Notice'>Examinations</Link>
          </li>

          <li>
            <Link to='/placements'>Placements</Link>
          </li>
          <li><Link to='/overview'>Alumni</Link></li>
          <li>
            <Link to='/events'>Happenings</Link>
          </li>
        </ul>
      </nav>
      {isSticky && <div style={{ height: '60px' }}></div>}
    </>
  );
};

export default NavbarTwo;