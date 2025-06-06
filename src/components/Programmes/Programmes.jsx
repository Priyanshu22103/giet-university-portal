import React from 'react';
import { Link } from 'react-router-dom';
import './Programmes.css';

const ugProgrammes = [
  { name: 'B. Tech in Computer Science & Engineering', path: '/ug/cse' },
  { name: 'B. Tech in Computer Science and Engineering (Data Science)', path: '/ug/cse-ds' },
  { name: 'B. Tech in Mechanical Engineering', path: '/ug/me' },
  { name: 'B. Tech in Civil Engineering', path: '/ug/ce' },
  { name: 'B. Tech in Electronics and Communication Engineering', path: '/ug/ece' },
  { name: 'B. Sc. (Hons) Agriculture', path: '/ug/agriculture' },
  { name: 'B.Sc in Nursing', path: '/ug/nursing' },
  { name: 'B. Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)', path: '/ug/aiml' },
  { name: 'B. Tech in Computer Science and Technology', path: '/ug/cst' },
  { name: 'B. Tech in Biotechnology', path: '/ug/biotech' },
  { name: 'B. Tech in Electrical Engineering', path: '/ug/eee' },
  { name: 'B. Tech in Electronics Engineering (VLSI Design and Technology)', path: '/ug/vlsi' },
  { name: 'Bachelor of Business Administration ( BBA )', path: '/ug/bba' },
  { name: 'B. Tech in Computer Science and Engineering (IoT)', path: '/ug/iot' },
  { name: 'B. Tech in Agricultural Engineering', path: '/ug/agri-engg' },
  { name: 'B. Tech in Chemical Engineering', path: '/ug/chemical' },
  { name: 'B. Tech in Electrical and Electronics Engineering', path: '/ug/eee2' },
  { name: 'B. Tech in Electronics & Communication (Advanced Communication Technology)', path: '/ug/ece-advanced' },
  { name: 'Bachelor of Computer Applications ( BCA )', path: '/ug/bca' },
];

const pgProgrammes = [
  { name: 'Master of Business Administration (MBA)', path: '/pg/mba' },
  { name: 'M. Tech in Heat Power and Thermal Engineering', path: '/pg/heatpower' },
  { name: 'M. Tech in Chemical Engineering', path: '/pg/chemical' },
  { name: 'M. Tech in Power Electronics', path: '/pg/power' },
  { name: 'M. Tech. in Electronics & Communication (VLSI Design)', path: '/pg/vlsi' },
  { name: 'M.Sc in Chemistry', path: '/pg/chemistry' },
  { name: 'M.Sc in Biotechnology', path: '/pg/biotech' },
  { name: 'M. Tech in Computer Science & Engineering', path: '/pg/cse' },
  { name: 'M. Tech in Machine Design', path: '/pg/machine' },
  { name: 'M. Tech in Structural Engineering', path: '/pg/structural' },
  { name: 'M. Tech in Electronics & Communication Engineering', path: '/pg/ece' },
  { name: 'Master of Computer Applications (MCA)', path: '/pg/mca' },
  { name: 'M.Sc in Mathematics', path: '/pg/math' },
  { name: 'M.A. in English', path: '/pg/english' },
  { name: 'M. Tech in Manufacturing Technology', path: '/pg/manufacturing' },
  { name: 'M. Tech in Biotechnology', path: '/pg/biotech-mtech' },
  { name: 'M. Tech in Construction Technology & Management', path: '/pg/construction' },
  { name: 'M. Tech in Electronics & Communication (Advanced Communication Technology)', path: '/pg/ece-advanced' },
  { name: 'M.Sc in Physics', path: '/pg/physics' },
  { name: 'M.Sc in Life Science', path: '/pg/lifescience' },
  { name: 'M.A. in Economics', path: '/pg/economics' },
];

const doctoralProgrammes = [
  { name: 'Physics', path: '/phd/physics' },
  { name: 'Biotechnology', path: '/phd/biotech' },
  { name: 'Mechanical Engineering', path: '/phd/me' },
  { name: 'Civil Engineering', path: '/phd/ce' },
  { name: 'Ph.D (Agriculture)', path: '/phd/agriculture' },
  { name: 'Botany', path: '/phd/botany' },
  { name: 'Chemistry', path: '/phd/chemistry' },
  { name: 'Computer Science and Engineering', path: '/phd/cse' },
  { name: 'Chemical Engineering', path: '/phd/chemical' },
  { name: 'Electrical and Electronics Engineering', path: '/phd/eee' },
  { name: 'Biotechnology (SOS)', path: '/phd/biotech-sos' },
  { name: 'Mathematics', path: '/phd/mathematics' },
  { name: 'Computer Science and Application', path: '/phd/csa' },
  { name: 'Electronics & Communication Engineering', path: '/phd/ece' },
  { name: 'Management', path: '/phd/management' },
  { name: 'Zoology', path: '/phd/zoology' },
];


const Programmes = () => {
  return (
    <div className="programmes-wrapper">
      <h2 className="ug-title">UG Programmes</h2>
      <div className="underline"></div>
      <div className="programmes-grid">
        {ugProgrammes.map((programme, index) => (
          <Link key={index} to={programme.path} className="programme-link">
            {programme.name}
          </Link>
        ))}
      </div>

      <h2 className="ug-title">PG Programmes</h2>
      <div className="underline"></div>
      <div className="programmes-grid">
        {pgProgrammes.map((programme, index) => (
          <Link key={index} to={programme.path} className="programme-link">
            {programme.name}
          </Link>
        ))}
      </div>

      <h2 className="ug-title">Doctoral Programmes</h2>
      <div className="underline"></div>
      <div className="programmes-grid">
      {doctoralProgrammes.map((programme, index) => (
     <Link key={index} to={programme.path} className="programme-link">
      {programme.name}
    </Link>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
