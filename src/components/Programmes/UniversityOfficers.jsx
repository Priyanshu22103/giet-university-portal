import React from 'react';
import './UniversityOfficers.css';

const officers = [
  {
    name: 'Dr. Lalit Mohan Patnaik',
    title: 'PRO-CHANCELLOR',
    image: '/images/officer1.jpg',
  },
  {
    name: 'Dr. A. V. N. L. Sharma',
    title: 'VICE CHANCELLOR',
    image: '/images/officer2.jpg',
  },
  {
    name: 'Dr. N. V. Jagannadha Rao',
    title: 'REGISTRAR',
    image: '/images/officer3.jpg',
  },
{
        name: 'Dr. S. K. Patnaik',
        title: 'DEAN ACADEMIC',
        image: '/images/officer4.jpg',
    },
    {
        name: 'Dr. P. K. Mohapatra',
        title: 'DEAN ADMINISTRATION',
        image: '/images/officer5.jpg',
    },
    {
        name: 'Dr. S. K. Mishra',
        title: 'DEAN RESEARCH & DEVELOPMENT',
        image: '/images/officer6.jpg',
    },
    {
        name: 'Dr. S. K. Mohapatra',
        title: 'DEAN STUDENTS WELFARE',
        image: '/images/officer7.jpg',
    },
    {
        name: 'Dr. S. K. Patnaik',
        title: 'DEAN PLACEMENT',
        image: '/images/officer8.jpg',
    },
    {
        name: 'Dr. Rohan Hota',
        title: 'DEAN EXAMINATION',
        image: '/images/officer9.jpg',
    },
    {
        name: 'Dr. P. K. Jena',
        title: 'DEAN INDUSTRY INSTITUTE INTERACTION',
        image: '/images/officer10.jpg',
    },
    {
        name: 'Dr. Hrashikesh Panda',
        title: 'DEAN INTERNATIONAL RELATIONS',
        image: '/images/officer11.jpg',
    },
    {
        name: 'Dr. R. K. Sahoo',
        title: 'DEAN OF STUDENT AFFAIRS',
        image: '/images/officer12.jpg',
    },
    
];

const OfficerCard = ({ name, title, image }) => (
  <div className="officer-card">
    <img src={image} alt={name} className="officer-image" />
    <h3>{name}</h3>
    <p>{title}</p>
  </div>
);

const UniversityOfficers = () => {
  return (
    <div className="about-gietu">
      <h1 className='main-heading'>UNIVERSITY OFFICERS</h1>
      <div className="about-heading-underline"></div>
      <div className="officer-container">
        {officers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            title={officer.title}
            image={officer.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityOfficers;