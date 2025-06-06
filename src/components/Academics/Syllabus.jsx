import React,{useEffect} from 'react';
import './Syllabus.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const syllabusLinks = [
  { title: 'B. TECH SYLLABUS 1ST YEAR (2022-26)', url: 'https://www.giet.edu/wp-content/uploads/2022/08/2022-26-B.-TECH-SYLLABUS-1ST-YEAR.pdf' },
  { title: 'B.Tech CSE Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CSE-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech CSE Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CSE-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech CSE Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CSE-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech CST Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CST-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech IT Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-IT-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech IT Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-IT-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech Mech Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-Mech-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech Mech Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-Mech-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech Mech Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2019/06/B.Tech-Mech-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech BIOTECH Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-BIOTECH-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech BIOTECH Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-BIOTECH-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech BIOTECH Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-BIOTECH-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech Chem Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-Chem-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech Chem Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-Chem-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech Chem Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-Chem-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech Chem Regulation 2020 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2019/06/R-20-CHEMICAL.pdf' },
  { title: 'B.Tech Petrochem and Petroeum Refinery Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-Petro-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech Civil Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CIVIL-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech Civil Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-CIVIL-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech Civil Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-Civil-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech EE Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EE-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech EE Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EE-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech EE Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EE-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech EEE Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EEE-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech EEE Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EEE-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech EEE Regulation 2019 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/01/B.Tech-EEE-Regulation-2019-Syllabus.pdf' },
  { title: 'B.Tech ECE Regulation 2017 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-ECE-Regulation-2017-Syllabus.pdf' },
  { title: 'B.Tech ECE Regulation 2018 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-ECE-Regulation-2018-Syllabus.pdf' },
  { title: 'B.Tech ECE Regulation 2019-20 Syllabus', url: 'https://www.giet.edu/wp-content/uploads/2020/02/B.Tech-ECE-Regulation-2019-Syllabus.pdf' },
  { title: 'Agriculture syllabus (GIETU) 2017-18', url: 'https://www.giet.edu/wp-content/uploads/2020/02/Agriculture-syllabus-GIETU.pdf' },
  { title: 'BBA Syllabus for 2020-2021 final', url: 'https://www.giet.edu/wp-content/uploads/2020/09/BBA-Syllabus-for-2020-2021-final.pdf' },
  { title: 'BCA Regulation 2020 Syllabus 2A', url: 'https://www.giet.edu/wp-content/uploads/2020/08/BCA-R20_ANNEXURE-2A.pdf' },
  { title: 'BCA Regulation 2020 Syllabus 3A', url: 'https://www.giet.edu/wp-content/uploads/2020/08/BCA-R20_ANNEXURE-3A.pdf' },
  { title: 'BSc Nursing Syllabus 2022-23', url: 'https://www.giet.edu/wp-content/uploads/2022/09/BSc-Nursing-Syllabus-2022-23.pdf' }
];

const Syllabus = () => {
  useEffect(() => {
         document.title = 'Syllabus - GIET University | Odisha | Gunupur'
  }, []);
  return (
    
    <>
      <div>
          <Navbar/>
      </div>
      <div className="syllabus-container">
        <h2 className="aic-title">
         SYLLABUS
        <span className="underline"></span>
      </h2>
      {syllabusLinks.map((item, index) => (
        <div
          key={index}
          className="syllabus-card"
          onClick={() => window.open(item.url, '_blank')}
        >
          {item.title}
        </div>
      ))}
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default Syllabus;
