import React from 'react';
import './ProgrammesSection.css';
import backgroundImg from '../../assets/programs-background.jpg';
import { useNavigate } from 'react-router-dom';

const programmes = [
  { title: 'B. Tech.', path: '/programmes/btech' },
  { title: 'B.Sc.(Ag)', path: '/programmes/bsc-ag' },
  { title: 'MBA', path: '/programmes/mba' },
  { title: 'MCA', path: '/programmes/mca' },
  { title: 'M. Tech.', path: '/programmes/mtech' },
  { title: 'M. Sc.', path: '/programmes/msc' },
  { title: 'BBA', path: '/programmes/bba' },
  { title: 'BCA', path: '/programmes/bca' },
  { title: 'Ph. D.', path: '/programmes/phd' },
];

const ProgrammesSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="programmess-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="programmess-header">
        <h2>PROGRAMMES</h2>
      </div>

      <div className="programmess-container">
        <div className="programmess-grid">
          {programmes.map((prog, index) => (
            <div
              key={index}
              className="programmee-box"
              onClick={() => navigate('/school')}
            >
              {prog.title}
            </div>
          ))}
          <div
            className="programmee-box more-programs"
            onClick={() => navigate('/programmes')}
          >
            More Programs →
          </div>
        </div>

        <div className="bottom-buttons">
          <div className="bottom-box" onClick={() => navigate('/brochure-download')}>
            <i className="fas fa-download icon"></i>
            <span>Brochure Download</span>
          </div>
          <div className="separatorr"></div>
          <div className="bottom-box" onClick={() => navigate('/whatsapp')}>
            <i className="fab fa-whatsapp icon"></i>
            <span>WhatsApp</span>
          </div>
          <div className="separatorr"></div>
          <div className="bottom-box" onClick={() => navigate('/footer')}>
            <i className="fas fa-phone icon"></i>
            <span>Request a Call</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammesSection;
