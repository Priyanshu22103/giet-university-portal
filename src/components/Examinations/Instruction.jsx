import React,{useEffect} from 'react';
import './Instruction.css';
import Footer from "../Home/Footer";
import Navbar from "./Navbar";
const Instructions = [
  {
    title: 'Instructions to Invigilators during Examination',
    link: '/pdf/Instruction1.pdf',
  },
  {
    title: 'Guidelines for Squad during Examination',
    link: '/pdf/Instruction2.pdf',
  },
  {
    title: 'Instructions for Students during Examination',
    link: '/pdf/Instruction3.pdf',
  },
];

const Instruction = () => {
  useEffect(() => {
            document.title = 'Instruction - GIET University | Odisha | Gunupur';
      }, []);
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="downloads-container">
      <h1 className="notices-title">INSTRUCTION</h1>
      <div className="about-heading-underline"></div>
      {Instructions.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      ))}
    </div>
    <div>
      <Footer/>
    </div>
  </>
    
  );
};

export default Instruction;