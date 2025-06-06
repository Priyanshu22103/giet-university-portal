import React from 'react';
import './AboutGIETU.css';

const AboutGIETU = () => {
  return (
    <div className="about-gietu">
        <h2 className="aic-title">
         ABOUT GIETU
        <span className="underline"></span>
        </h2>
      <section className="about-section">
        <h2>GIET University - An Amalgamation of Academics and Research Based Learning</h2>
        <p>
          GIET University, Gunupur (formerly known as Gandhi Institute of Engineering and Technology)
          was established by <strong>"Vidya Bharati Educational Trust,"</strong> Gunupur, Odisha, India in the
          year 1997. UGC approved GIET University is one of the leading universities in Odisha, located
          amongst the lush greenery and foothills of the Eastern Ghats of India with the scenic
          Bansadhara River flowing through its territory.
        </p>
        <p>
          Since its establishment, GIET University has emerged at the forefront with its advanced technological
          developments and teaching methods. The University has made a mark in the global scenario with its
          state-of-the-art infrastructure, quality education and world-class facilities. The University strives
          to provide a disciplined and progressive education system to all.
        </p>
        <img src="/images/campus1.jpg" alt="GIET Campus Aerial View" className="campus-image" />

        <div className="milestones">
          <h3>MILESTONES OF GIETU</h3>
          <ul>
            <li>Conferred the University status in 2018 through an act of Odisha Legislative Assembly (approved by UGC, New Delhi)</li>
            <li>Incorporated in the list of Universities in 2019 under the UGC Act, 1956</li>
            <li>Six B-Tech branches of GIETU accredited five times by the National Board of Accreditation (NBA) from 2017-2022 for their first-rate technical education methods.</li>
            <li>Accredited by the National Assessment and Accreditation Council (NAAC), UGC has a high point grade for 2015-2020.</li>
            <li>Recognized by the Department of Scientific and Industrial Research (DSIR) as an institution of high-quality research.</li>
            <li>Approved by the All India Council for Technical Education (AICTE), New Delhi, since 1997.</li>
            <li>Obtained approval from Indian Nursing Council, New Delhi for B.Sc. Nursing course with 60 seats.</li>
            <li>B.Sc. Agriculture course has got approval from ICAR-New Delhi for a period of 5 years.</li>
          </ul>
        </div>
      </section>

      <section className="campus-section">
        <h2>GIETU CAMPUS</h2>
        <div className="campus-content">
          <div className="campus-text">
            <p>
              GIET University is home to many national and international students. The campus boasts of modern marvel
              infrastructure with every construction equipped with the modern facilities. GIETU is a peaceful paradise,
              far away from the noise & bustle of an urban area. The GIETU campus is a high-tech oriented territory at
              par with the world’s leading global educational institutions.
            </p>
            <p>
              It is strategically the perfect fit for the students who want to pursue world-class education in India.
              The campus is filled with acres of spectacular greenery and views of the hills around. GIETU also offers
              students an abundant scope of recreational and outdoor activities for overall development.
            </p>
          </div>
          <img src="/images/campus2.jpg" alt="GIET Campus Building" className="campus-image" />
        </div>
      </section>
    </div>
  );
};

export default AboutGIETU;
