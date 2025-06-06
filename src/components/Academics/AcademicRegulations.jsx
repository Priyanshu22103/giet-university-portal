import React,{useEffect} from 'react';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
export default function AcademicRegulations() {
  const regulations = [
    {
      title: "Ammendment to Regulations Notification No-1680, Dated-07/07/2021",
      link: "https://www.giet.edu/wp-content/uploads/2021/07/Ammendment-to-Regulations-Notification-No-1680.pdf"
    },
    {
      title: "Ch-1 Consolidated Regulations AcademicMatters R-19",
      link: "https://www.giet.edu/wp-content/uploads/2020/01/Ch-1-Consolidated-Regulations-AcademicMatters-R-19.pdf"
    },
    {
      title: "Ch-2 Consolidated Regulations AcademicMatters R-19",
      link: "https://www.giet.edu/wp-content/uploads/2020/01/Ch-2Consolidated-Regulations-AcademicMatters-R-19.pdf"
    },
    {
      title: "Ch-3 Evaluation Procedures [R19]",
      link: "https://www.giet.edu/wp-content/uploads/2020/01/Ch-3-Evaluation-Procedures-R19.pdf"
    }
  ];
  useEffect(() => {
         document.title = 'Academic Regulations - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section style={{ padding: '40px 0', backgroundColor: '#fff' }}>
        <h2 className="aic-title">
         ACADEMIC REGULATIONS
        <span className="underline"></span>
        </h2>
    

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '0 20px'
      }}>
        {regulations.map((reg, idx) => (
          <a
            key={idx}
            href={reg.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#ff6600',
              color: '#fff',
              textDecoration: 'none',
              padding: '20px',
              width: '80%',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              textAlign: 'center',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {reg.title}
          </a>
        ))}
        </div>
        <div>
        
      </div>
      </section>
      <div>
        <Footer/>
      </div>
      
    </>
    
  );
}
