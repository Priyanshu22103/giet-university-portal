/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect} from "react";
import "./Events.css";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
const Events = () => {
  useEffect(() => {
           document.title = 'Events - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <>
        <div>
          <Navbar/>
        </div>
        <div className="events-section">
      <h2 className="aic-title">
         EVENTS
        <span className="underline"></span>
        </h2>

      <div className="events-container">
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/09/IMG_4120.jpg" alt="Event 1" />
          </div>
          <div className="event-content">
            <p className="event-meta">April 4, 2024</p>
            <h3 className="event-heading">Gandhi Institute of Engineering and Technology University, Gunupur celebrated its 25th Foundation Day</h3>
            <a className="event-readmore" href="https://www.giet.edu/gandhi-institute-of-engineering-and-technology-university-gunupur-celebrated-its-25th-foundation-day/">Read More</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2019/07/2-Akshya-Tritiya-2024.jpg" alt="Akshya Tritiya 2024" />

          </div>
          <div className="event-content">
            <p className="event-meta">February 10, 2024</p>
            <h3 className="event-heading">GIET University in association with Atal Incubation Centre-GIETU organized a Startup Conclave</h3>
            <a className="event-readmore" href="https://www.giet.edu/giet-university-in-association-with-atal-incubation-centre-gietu-organized-a-startup-conclave/">Read More</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/05/WORKSHOP-1.jpg" alt="Workshop Event" />
          </div>
          <div className="event-content">
            <p className="event-meta">April 20, 2024</p>
            <h3 className="event-heading">RDFMSA 2024 INTERNATIONAL CONFERENCE</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-image">
        <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/04/2-5.jpg" alt="GIET Image" />
          </div>
          <div className="event-content">
            <p className="event-meta">January 26, 2024</p>
            <h3 className="event-heading">75th Republic Day celebrated at GIET University</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2023/09/Updated-Hackathon-Banner-scaled.jpg"/>         
               </div>
          <div className="event-content">
            <p className="event-meta">10 February 2023- 12 February 2023</p>
            <h3 className="event-heading">INTERNA SMART INDIA HACKATHON</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/04/7715320e-e70f-4c99-9c60-30f4b80c35f2-scaled.jpeg"/>        
              </div>
          <div className="event-content">
            <p className="event-meta">30 March 2024 - 31 March 2024</p>
            <h3 className="event-heading">ICMIB 2024</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
<img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2023/08/GIET-UNIVERSITY-welcomes-the-Innovation-Yatra-Van-1.jpeg"/>          
   </div>
          <div className="event-content">
            <p className="event-meta">06 August 2023</p>
            <h3 className="event-heading">GIET UNIVERSITY WELCOMES</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/01/EASMTA-2024.jpg"/>         
             </div>
          <div className="event-content">
            <p className="event-meta">27 January 2024 - 28 January 2024</p>
            <h3 className="event-heading">EASMTA 2024</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/01/con12-1.jpg"/>         
             </div>
          <div className="event-content">
            <p className="event-meta">January 26, 2024</p>
            <h3 className="event-heading">75th Republic Day celebrated at GIET University</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
            <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2024/05/WORKSHOP-1.jpg" alt="Workshop Event" />
          </div>
          <div className="event-content">
            <p className="event-meta">April 29, 2023</p>
            <h3 className="event-heading">FOOD PROCESSING SECTOR IN ODISHA</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
        <img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2023/12/Ag-Education-Day-7-scaled.jpg"/>          
</div>
          <div className="event-content">
            <p className="event-meta">03 December 2023</p>
            <h3 className="event-heading">AGRICULTURE EDUCATION</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">
<img className="img-fluid" src="https://www.giet.edu/wp-content/uploads/2023/09/2022-26-Batch-B.-Tech.-CSE-2nd-Year-Orientation-Program-2.jpeg"/>         
 </div>
          <div className="event-content">
            <p className="event-meta">06 September 2023</p>
            <h3 className="event-heading">2022-2026  Batch B.tech Inaguration</h3>
            <a className="event-readmore" href="https://www.giet.edu/75th-republic-day-celebrated-at-giet-university/">Read More</a>
          </div>
        </div>
      </div>
    </div>
        <div>
            <Footer/>
        </div>
    </>
    
  );
};

export default Events;
