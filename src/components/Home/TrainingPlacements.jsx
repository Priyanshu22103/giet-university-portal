import React from 'react';
import './TrainingPlacements.css';
import pieChart from '../../assets/comp_logo/piechart.png';
import { useNavigate } from 'react-router-dom';

const companyLogos = [
  'logo1.png', 'logo2.png', 'logo3.png',
  'logo4.png', 'logo5.png', 'logo6.png',
  'logo7.png', 'logo8.png', 'logo9.png',
  'logo10.png', 'logo11.png', 'logo12.png',
  'logo13.png', 'logo14.png'
];

const TrainingPlacements = () => {
  const navigate = useNavigate();

  return (
    <div className="training-section">
      <h2 className="training-title">TRAINING & PLACEMENTS</h2>

      <div className="training-content">
        {/* Left Block: Description + Pie Chart */}
        <div className="left-block">
          <p className="training-desc">
            Since inception of GIETU, the placement records of the Institution have been close to 90%.
            Our students occupy premier positions in Industry in India and abroad due to sufficient training.
          </p>
          <div className="piechart">
            <img src={pieChart} alt="Placement Chart" />
          </div>
        </div>

        {/* Right Block: Recruiters */}
        <div className="recruiters">
          <h3 className="recruiters-title">ASSOCIATED RECRUITERS</h3>
          <div className="recruiters-grid">
            {companyLogos.map((logo, i) => (
              <div key={i} className="recruiter-card">
                <img
                  src={require(`../../assets/comp_logo/${logo}`)}
                  alt={`Recruiter ${i}`}
                />
              </div>
            ))}
            <div className="recruiter-card read-more-card" onClick={() => navigate('/training-placements')}>
              Read More →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlacements;
