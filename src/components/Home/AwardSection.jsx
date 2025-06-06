import React from 'react';
import './AwardSection.css';
import awardImage from '../../assets/award.jpg';

const AwardSection = () => {
  return (
    <div className="award-container">
      {/* Headline outside the box */}
      <h2 className="award-headline">
        BEST UNIVERSITY IN EASTERN INDIA FOR CAMPUS PLACEMENT
      </h2>

      {/* Yellow-bordered content box */}
      <div className="award-text-box">
        <h3>Asia Education Summit & Awards 2020</h3>
        <p>
          GIET University believes that quality education should be followed by prime placements.
          Over the decades, the relentless effort of GIET University has ingrained a reputation for
          consistent quality placements. It has formed enduring & constructive partnerships with the
          corporate/Industries to provide foot-in-the-door opportunity to all the eligible students,
          enabling them to start off their career just right after they complete their course curriculum
          without facing the real-world job struggle. As a result, GIET University has been crowned
          the “Best University in Eastern India” for Campus placement at the “Asia Education Summit – 2020”.
          GIET University believes that quality education should be followed by prime placements.
          Over the decades, the relentless effort of GIET University has ingrained a reputation for
          consistent quality placements. It has formed enduring & constructive partnerships with the
          corporate/Industries to provide foot-in-the-door opportunity to all the eligible students,
          enabling them to start off their career just right after they complete their course curriculum
          without facing the real-world job struggle.
        </p>
        <p>
          The award has been presented by Shri Pratap Chandra Sarangi, Hon’ble Union Minister, MSME,
          Govt.of India to Dr. N. V. Jagannadha Rao, Registrar, GIET University, Gunupur at Asia Education
          Summit 2020, Vigyan Bhawan, New Delhi.
        </p>
      </div>

      {/* Image */}
      <img src={awardImage} alt="GIET Award" className="award-image" />
    </div>
  );
};

export default AwardSection;
