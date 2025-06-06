// AdmissionAssistance.jsx
import React,{useEffect} from 'react';
import './AdmissionAssistance.css';

// import images from assets folder
import ratanPatra from '../../assets/ratan-patra1.jpg';
import gkMohanty from '../../assets/gk-mohanty.jpg';
import subratMohanty from '../../assets/prof-subrat-s-mohanty.jpg';
import bijaySahoo from '../../assets/bijay-sir.jpg';
import parijatSatapathy from '../../assets/parijat-satapathy.jpg';
import sitaramRay from '../../assets/sitaram.jpg';
import ashokSahu from '../../assets/ashok-sahu.jpg';
import sujitPanda from '../../assets/sujit-panda.jpg';
import pkBehera from '../../assets/pk-behera.jpg';
import sumitMantu from '../../assets/sumitk-mantu.jpg';
import abirBhusan from '../../assets/abir-bhusan.jpg';
import ashishNegi from '../../assets/ashish-kumar-negi.jpg';
import amiyaKumar from '../../assets/amiya-kumar.jpg';
import tapasRanjan from '../../assets/tapas-ranjan.jpg';
import rajendraPanigrahi from '../../assets/rajendra-panigrahi-scaled.jpg';
import sambhuBabu from '../../assets/sambhu-prasad-babu-scaled.jpg';

const teamMembers = [
  { name: 'PROF. G. K. MOHANTY', designation: 'Dean, Admissions', phone: '+91-8118053001', email: 'deanadmission[at]giet[dot]edu', image: gkMohanty },
  { name: 'PROF. RATAN PATRA', designation: 'HOD, Digital Marketing & Communication', phone: '+91-7735745535', email: 'admission[at]giet[dot]edu', image: ratanPatra },
  { name: 'PROF. SUBRAT S MOHANTY', designation: 'Asst.Prof (MBA), Zonal Manager', phone: '+91-9556591954', email: 'subratedit[at]giet[dot]edu', image: subratMohanty },
  { name: 'MR. BIJAY KUMAR SAHOO', designation: 'Regional Manager', phone: '+91-9438995202', email: 'bksahoo[at]giet[dot]edu', image: bijaySahoo },
  { name: 'MR. PARIJAT SATAPATHY', designation: 'Regional Manager (North East Odisha)', phone: '+91-9437755019', email: 'parijat[at]giet[dot]edu', image: parijatSatapathy },
  { name: 'MR. SITARAM RAY', designation: 'Regional Manager', phone: '+91-8118053008', email: 'sitaram[at]giet[dot]edu', image: sitaramRay },
  { name: 'MR. ASHOK KUMAR SAHOO', designation: 'Zonal Manager', phone: '+91-9777794198', email: 'aksahoo[at]giet[dot]edu', image: ashokSahu },
  { name: 'MR. SUJIT KUMAR PANDA', designation: 'Zonal Manager', phone: '+91-9776995373', email: 'sujitpanda[at]giet[dot]edu', image: sujitPanda },
  { name: 'MR. PRASANT KUMAR BEHERA', designation: 'Zonal Manager', phone: '+91-9040402278', email: 'prasantkumar[at]giet[dot]edu', image: pkBehera },
  { name: 'MR. SUMIT KUMAR MANTU', designation: 'Zonal Manager', phone: '+91-9548311311', email: 'sumitkumar[at]giet[dot]edu', image: sumitMantu },
  { name: 'MR. ABIR BHUSAN PANDA', designation: 'Admission Officer', phone: '+91-6371598828', email: 'abirbhusan[at]giet[dot]edu', image: abirBhusan },
  { name: 'MR. ASHISH KUMAR NEGI', designation: 'Admission Officer', phone: '+91-9777710586', email: 'ashishk[at]giet[dot]edu', image: ashishNegi },
  { name: 'MR. AMIYA KUMAR MAHAPATRA', designation: 'Admission Officer', phone: '+91-9078305992', email: 'akmahapatra[at]giet[dot]edu', image: amiyaKumar },
  { name: 'MR. TAPAS RANJAN PRADHAN', designation: 'Admission Officer', phone: '+91-9438322226', email: 'tapas[at]giet[dot]edu', image: tapasRanjan },
  { name: 'MR. RAJENDRA PANIGRAHI', designation: 'Admission Officer', phone: '+91-7860629930', email: 'rajendrapanigrahi92[at]gmail[dot]com', image: rajendraPanigrahi },
  { name: 'MR. SAMBHU PRASAD BABU', designation: 'Zonal Manager', phone: '+91-9556072231', email: 'sambhuprasad[at]giet[dot]edu', image: sambhuBabu },
];

const AdmissionAssistance = () => {
   useEffect(() => {
        document.title = 'Admission Assistance - GIET University | Odisha | Gunupur'
   }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
         ADMISSION ASSISTANCE
        <span className="underline"></span>
        </h2>
      </div>
      <div className="admission-container">
      {teamMembers.map((member, idx) => (
        <div className="card1" key={idx}>
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p className="designation">{member.designation}</p>
          <p>Mobile: {member.phone}</p>
          <p>Email: {member.email}</p>
        </div>
      ))}
    </div>
    </>    
  );
};

export default AdmissionAssistance;