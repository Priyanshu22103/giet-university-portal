import React from 'react';
import NavbarOne from './NavbarOne';
import NavbarTwo from './NavbarTwo';

const Navbar = () => (
  <header className="navbar" style={{display:'flex',flexDirection:'column',lineHeight:'10px'}}>
    <NavbarOne />
    <NavbarTwo />
  </header>
);

export default Navbar;
