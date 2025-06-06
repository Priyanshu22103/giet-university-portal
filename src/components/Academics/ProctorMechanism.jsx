import React,{useEffect} from 'react';
import './ProctorMechanism.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const ProctorMechanism = () => {
  useEffect(() => {
         document.title = 'Proctor Mechanism - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
    <div><Navbar /></div>
    <div className="proctor-container">
      <h2 className="aic-title">
         PROCTOR MECHANISM
        <span className="underline"></span>
        </h2>
      <div className='top'>
        
        <div className='points-div'>
          <h2 className="subheading">Student Mentoring and Support</h2>
          <ul className="proctor-points">
            <li>Students are counselled by Proctors from date of joining.</li>
            <li>20 students are assigned to the individual faculty members (proctors).</li>
            <li>Regular counselling is provided as per the schedule.</li>
            <li>Proctors will take care of academic deficiency along with personal difficulties if any.</li>
            <li>Slow learners are identified by the proctors and necessary assistance is provided beyond working hours to cope up with the regular students.</li>
            <li>Training and Career guidance cell are functional to provide necessary assistance to all the students from pre-final year onwards by conducting various training and pre-placement classes.</li>
            <li>Grievance redressal cell is functional to address the difficulties experienced by the students and faculty.</li>
            <li>Complaint / Suggestion boxes are provided at various strategic locations to receive complaints and all are solved amicably in the campus.</li>
          </ul>
        </div>
      

       <div className="proctor-image-wrapper">
        <img
          src="https://www.giet.edu/wp-content/uploads/2024/09/CR2-300x274.jpg"
          srcSet="https://www.giet.edu/wp-content/uploads/2024/09/CR2-300x274.jpg 300w, https://www.giet.edu/wp-content/uploads/2024/09/CR2.jpg 720w"
          sizes="(max-width: 477px) 100vw, 477px"
          alt="Proctor Mechanism"
          className="proctor-image"
          width="477"
          height="436"
          loading="lazy"
          decoding="async"
        />
      </div>
      </div>
    </div>
    <div><Footer/></div>
  </>
    
  );
};

export default ProctorMechanism;
