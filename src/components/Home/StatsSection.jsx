import React from 'react';
import './StatsSection.css';
import backgroundImg from '../../assets/building.jpg';

const stats = [
  {
    number: '25+',
    title: 'Years',
    description: 'Pioneering Educational Establishment',
    bgColor: 'rgba(0, 78, 121, 0.2)',
  },
  {
    number: '300+',
    title: 'Faculties',
    description: 'Qualified, Experienced & Dedicated Faculty Members',
    bgColor: 'rgba(222, 88, 34, 0.6)',
  },
  {
    number: '4000+',
    title: 'Students',
    description: 'In-Campus At GIET University',
    bgColor: 'rgba(221, 42, 72, 0.6)',
  },
  {
    number: '113+',
    title: 'Acres',
    description: 'Each Building With Rare Architectural Marvel And An International Ambiance',
    bgColor: 'rgba(0, 153, 204, 0.6)',
  },
  {
    number: '100 %',
    title: 'Wi-Fi',
    description: 'Campus With 24X7 Connectivity',
    bgColor: 'rgba(255, 153, 0, 0.6)',
  },
  {
    number: '15000+',
    title: 'Job Offers',
    description: 'Best University For Campus Placement In Eastern India At AESA 2020',
    bgColor: 'rgba(0, 128, 0, 0.6)',
  },
];

const StatsSection = () => {
  return (
    <div
      className="stats-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="stats-left-container">
        <div className="stats-grid-left">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-box"
              style={{ backgroundColor: stat.bgColor }}
            >
              <h2>{stat.number}</h2>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
