/* eslint-disable react/jsx-no-target-blank */
import React,{useEffect} from 'react';
import './CampusFlash.css';
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const campusFlashData = [
  {
    title: 'Campus Flash Issue -118, January 2025',
    link: 'https://www.giet.edu/wp-content/uploads/2025/03/Campus-Flash-News_GIETU_Jan25.pdf',
  },
  {
    title: 'Campus Flash VOL -X, 2024',
    link: 'https://www.giet.edu/wp-content/uploads/2024/08/Prayas-Magazin-2024.pdf',
  },
  {
    title: 'Campus Flash March 2022',
    link: 'https://www.giet.edu/wp-content/uploads/2023/08/Campus-Flash-News_Issue-102_.pdf',
  },
  {
    title: 'Campus Flash February 2020',
    link: 'https://www.giet.edu/wp-content/uploads/2020/05/campus-flash-feb-2020.pdf',
  },
  {
    title: 'Campus Flash January 2020',
    link: 'https://www.giet.edu/wp-content/uploads/2020/03/campus-flash-jan-2020.pdf',
  },
  {
    title: 'Campus Flash December 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/02/CAMPUS-FLASH-DEC-2019.pdf',
  },
  {
    title: 'Campus Flash November 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/01/Campus-Flash-Nov-1.pdf',
  },
  {
    title: 'Campus Flash October 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/01/CAMPUS-FLASH-OCTOBER-2019.pdf',
  },
  {
    title: 'Campus Flash September 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/01/Campus-Flash-September-2019.pdf',
  },
  {
    title: 'Campus Flash August 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/01/Campus-Flash-August-2019.pdf',
  },
  {
    title: 'Campus Flash July 2019',
    link: 'https://www.giet.edu/wp-content/uploads/2020/01/Campus-Flash-JULY1.pdf',
  },
];

const CampusFlash = () => {
  useEffect(() => {
       document.title = 'Campus Flash - GIET University | Odisha | Gunupur'
     }, []);
  return (
    <>
        <div>
            <Navbar/>
        </div>
        <div className="campus-flash-container">
      <h2 className="aic-title">
         CAMPUS FLASH
        <span className="underline"></span>
        </h2>
      <div className="campus-flash-list">
        {campusFlashData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener"
            className="campus-flash-card"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default CampusFlash;
