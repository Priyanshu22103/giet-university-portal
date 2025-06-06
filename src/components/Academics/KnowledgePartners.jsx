/* eslint-disable react/style-prop-object */
import React,{useEffect} from "react";
import './AcademicKnowledgePartners.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const KnowledgePartners = () => {
  useEffect(() => {
         document.title = 'Knowledge Partners - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: 1.6,color:'black' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h2 className="aic-title">
         KNOWLEDGE PARTNERS
        <span className="underline"></span>
        </h2>

      </div>

        <p>
        We at GIET University believe that education is one of the best tools to bring about positive social change. Education can aid economic development and also transform the landscape of the country. To this end, we are keen on providing teachers and students with the best learning resources. It can help both the teachers and the students to reach their full potential. GIETU has collaborated with several universities across the country to transform the way teaching is carried out. Our faculty members regularly attend valuable workshops, courses, and programs with several prestigious universities. These training pieces have helped improve the methodologies and skills necessary to help the students achieve success in their work and life.
      </p>

      <img
        src="https://www.giet.edu/wp-content/uploads/2020/09/nmeictheader.jpg"
        alt="nmeict header"
        style={{ width: '100%', margin: '20px 0' }}
      />

      <p>
        Established in 1958, IIT Bombay is globally-recognized as a worldwide leader in engineering education and research. The institute attracts the country’s best students for its bachelor’s, master’s, and doctoral programs. It has an outstanding faculty, many of whom are reputed for their research internationally. The institute has created a niche for itself through its short-term courses and distance education programs. GIETU has organized several workshops in association with IIT Bombay. Some crucial programs include the Foundation Program in ICT for Education, Pedagogy for online and blended teaching-learning, Moodle-learning management system, Python workshop, ESim workshop, C and C++ workshop, and Arduino workshop, among others.
      </p>

      <h4>Workshop Details</h4>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the Program</th>
            <th>Participants</th>
            <th>Venue</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Day(s)</th>
            <th>No. of Participants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Foundation Program In ICT For Education (FDP101x) Two-Week AICTE approved MOOC based FDP</td>
            <td>Teachers</td>
            <td>GIET – Gunupur</td>
            <td>13-Sep-2018</td>
            <td>18-Oct-2018</td>
            <td>15 Days</td>
            <td>34</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pedagogy For Online And Blended Teaching-Learning (FDP201x) Two-Week AICTE approved MOOC based FDP</td>
            <td>Teachers</td>
            <td>GIET – Gunupur</td>
            <td>30-Oct-2018</td>
            <td>13-Dec-2018</td>
            <td>15 Days</td>
            <td>29</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Koha And Library Automation One day Workshop</td>
            <td>Coordinators</td>
            <td>IIT – Bombay</td>
            <td>08-Feb-2019</td>
            <td>08-Feb-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Koha And Library Automation One day Workshop</td>
            <td>Librarians</td>
            <td>GIET – Gunupur</td>
            <td>09-Mar-2019</td>
            <td>09-Mar-2019</td>
            <td>1 Day</td>
            <td>10</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Moodle – Learning Management System One day Workshop</td>
            <td>Coordinators</td>
            <td>IIT – Bombay</td>
            <td>01-Mar-2019</td>
            <td>01-Mar-2019</td>
            <td>1 Day</td>
            <td>2</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Moodle – Learning Management System One day Workshop</td>
            <td>Teachers</td>
            <td>GIET – Gunupur</td>
            <td>15-Mar-2019</td>
            <td>15-Mar-2019</td>
            <td>1 Day</td>
            <td>54</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Interaction with KV Teachers on Online Admission Portal Half-day Orientation Program by IIT Bomby through A-VIEW</td>
            <td>KV Teachers</td>
            <td>GIET – Gunupur</td>
            <td>17-Mar-2019</td>
            <td>17-Mar-2019</td>
            <td>1/2 Day</td>
            <td>16</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Scilab One day Workshop</td>
            <td>Coordinators</td>
            <td>GIET University – Gunupur</td>
            <td>16-Apr-2019</td>
            <td>16-Apr-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Scilab One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>04-May-2019</td>
            <td>04-May-2019</td>
            <td>1 Day</td>
            <td>30</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Re-run Of Python Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>GIET University – Gunupur</td>
            <td>08-June-2019</td>
            <td>08-June-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Python Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>22-June-2019</td>
            <td>22-June-2019</td>
            <td>1 Day</td>
            <td>37/43</td>
          </tr>
          <tr>
            <td>12</td>
            <td>ESim Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>IIT – Bombay</td>
            <td>27-July-2019</td>
            <td>27-July-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Linux Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>GIET University – Gunupur</td>
            <td>03-Aug-2019</td>
            <td>03-Aug-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Linux Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>23-Aug-2019</td>
            <td>23-Aug-2019</td>
            <td>1 Day</td>
            <td>20</td>
          </tr>
          <tr>
            <td>15</td>
            <td>ESim Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>21-Sep-2019</td>
            <td>21-Sep-2019</td>
            <td>1 Day</td>
            <td>27</td>
          </tr>
          <tr>
            <td>16</td>
            <td>R Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>GIET University – Gunupur</td>
            <td>12-Oct-2019</td>
            <td>12-Oct-2019</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>17</td>
            <td>R Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>09-Nov-2019</td>
            <td>09-Nov-2019</td>
            <td>1 Day</td>
            <td>35</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Arduino Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>IIT – Bombay</td>
            <td>18-Jan-2020</td>
            <td>18-Jan-2020</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Arduino Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>08-Feb-2020</td>
            <td>08-Feb-2020</td>
            <td>1 Day</td>
            <td>23</td>
          </tr>
          <tr>
            <td>20</td>
            <td>C And C++ Workshop One day Workshop</td>
            <td>Coordinators</td>
            <td>GIET University – Gunupur</td>
            <td>15-Feb-2020</td>
            <td>15-Feb-2020</td>
            <td>1 Day</td>
            <td>1</td>
          </tr>
          <tr>
            <td>21</td>
            <td>C And C++ Workshop One day Workshop</td>
            <td>Teachers</td>
            <td>GIET University – Gunupur</td>
            <td>29-Feb-2020</td>
            <td>29-Feb-2020</td>
            <td>1 Day</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>

   <div
  style={{
    backgroundColor: '#003366',
    padding: '15px 20px',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '8px',
    color: 'white',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}
>
  <h5 style={{ margin: 0 }}>Visit to NMEICT IIT Bombay</h5>
  <a
    href="http://www.nmeict.iitb.ac.in/nmeict/wsmng/searchrc.php?search=GIET+University"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: '#f7c948',
      color: '#000',
      padding: '8px 16px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-block',
    }}
  >
    Click Here
  </a>
</div>




      {/* <h3>Visit to NMEICT IIT Bombay</h3> */}

 <img
    decoding="async"
    src="https://www.giet.edu/wp-content/uploads/2020/09/fdp.jpg"
    style={{ width: '100%', marginTop: '10px', borderRadius: '6px' }}
    alt="fdp header"
  />
      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the Program</th>
            <th>Participants</th>
            <th>Venue</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Day(s)</th>
            <th>No. of Participants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Network Security</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>20-05-2019</td>
            <td>24-05-2019</td>
            <td>5 Days</td>
            <td>26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Deep learning and applications</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>27-05-2019</td>
            <td>31-05-2019</td>
            <td>5 Days</td>
            <td>30</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Advancements in Signal Processing and Optimization Techniques</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>03-06-2019</td>
            <td>07-06-2019</td>
            <td>5 Days</td>
            <td>27</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Embedded Systems & Interfacing Hands-on</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>10-06-2019</td>
            <td>14-06-2019</td>
            <td>5 Days</td>
            <td>28</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Robotics & AI</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>24-06-2019</td>
            <td>28-06-2019</td>
            <td>5 Days</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

  <h4
  className="text-center"
  style={{ 
    backgroundColor: 'darkblue', 
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: '1.5rem' 
  }}
>
  Faculty Development Programs&nbsp;from 02nd&nbsp;December, 2019 to 17th&nbsp;January, 2020&nbsp;through NKN Mode Winter Course-2019-2020 under the E &amp; ICT Academy, NIT Patna
</h4>




      <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name of the Program</th>
            <th>Participants</th>
            <th>Venue</th>
            <th>From</th>
            <th>To</th>
            <th>No. of Day(s)</th>
            <th>No. of Participants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Python Programming with Industry perspective</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>02-12-2019</td>
            <td>06-12-2019</td>
            <td>5 Days</td>
            <td>32</td>
          </tr>
          <tr>
            <td>2</td>
            <td>AI with Deep Learning</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>09-12-2019</td>
            <td>13-12-2019</td>
            <td>5 Days</td>
            <td>35</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Machine Learning and Pattern Recognition</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>16-12-2019</td>
            <td>20-12-2019</td>
            <td>5 Days</td>
            <td>32</td>
          </tr>
          <tr>
            <td>4</td>
            <td>IoT</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (CSE)</td>
            <td>23-12-2019</td>
            <td>27-12-2019</td>
            <td>5 Days</td>
            <td>33</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Advance VLSI Design</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>30-12-2019</td>
            <td>03-01-2020</td>
            <td>5 Days</td>
            <td>26</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Machine Learning and Deep Learning</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>06-01-2020</td>
            <td>10-01-2020</td>
            <td>5 Days</td>
            <td>29</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Embedded Systems</td>
            <td>Faculty Members</td>
            <td>GIET University – Gunupur (ECE)</td>
            <td>13-01-2020</td>
            <td>17-01-2020</td>
            <td>5 Days</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

       <div style={{ marginTop: '20px' }}>
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '40px',
      }}
      border="1"
    >
      <thead style={{ backgroundColor: '#f0f0f0' }}>
        <tr>
          <th>Sl. No.</th>
          <th>Name of the Program</th>
          <th>Participants</th>
          <th>Venue</th>
          <th>From</th>
          <th>To</th>
          <th>No. of Day(s)</th>
          <th>No. of Participants</th>
          <th>Date of Examination</th>
          <th>Invigilator</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>C & Cpp</td>
          <td>Students</td>
          <td>GIET University – Gunupur (CSE)</td>
          <td>8/16/2019</td>
          <td>9/17/2019</td>
          <td>60 Days</td>
          <td>179</td>
          <td>11/25/2019</td>
          <td>Mr. Satya Prasanna Tripathy</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Java</td>
          <td>Students</td>
          <td>GIET University – Gunupur (CSE)</td>
          <td>7/1/2019</td>
          <td>9/2/2019</td>
          <td>60 Days</td>
          <td>101</td>
          <td>12/2/2019</td>
          <td>Mr. Bhavani Sankar Panda</td>
        </tr>
        <tr>
          <td>3</td>
          <td>LaTeX Faculty Development Programs (FDPs)(PMMMNMTT)</td>
          <td>Faculties &amp; Research Scholar</td>
          <td>GIET University – Gunupur (CSE)</td>
          <td>4/18/2020</td>
          <td>5/2/2020</td>
          <td>15 Days</td>
          <td>767</td>
          <td>5/2/2020</td>
          <td>Mr. Bhavani Sankar Panda</td>
        </tr>
      </tbody>
    </table>

  <div style={{ marginBottom: '30px', lineHeight: '1.6' }}>
 
  <img
    decoding="async"
    src="https://www.giet.edu/wp-content/uploads/2020/09/isro.jpg"
    alt="nmeict header"
    style={{ width: '100%', marginBottom: '15px' }}
  />
  <p>
    ISRO has a mission of bringing space to the commoner’s service, to the service of the nation. It is one of the six largest space agencies in the world. ISRO has used satellites to deliver several services to the nation like the weather forecast, disaster management tools, telemedicine, and dedicated distance education satellites. GIETU has had the privilege to conduct a learning program with ISRO. The focus areas were Planetary Geosciences, Satellite Photography, and its application- Global Navigation Satellite System.
  </p>
  <p>
    IIRS is a premier institute set up with capacity building in Remote Sensing and Geo-Informatics and their applications. The institute’s training and education programs are designed to meet the requirements of various professionals at working, middle and supervisory levels, graduates, researchers, academia, etc. GIETU, through its collaborative learning program with IIRS, earned valuable insights into courses like the application of Geoinformatics in Ecological Studies, basics of “Remote Sensing, Geographical Information System and Global Navigation Satellite System, Remote Sensing and Digital Image Analysis, and in the Understanding of Coastal ocean processes using Remote Sensing and Numerical Modelling.
  </p>
</div>


    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '40px',
      }}
      border="1"
    >
      <thead style={{ backgroundColor: '#f0f0f0' }}>
        <tr>
          <th>Sl. No.</th>
          <th>Course No.</th>
          <th>Course</th>
          <th>Time Slot</th>
          <th>Duration</th>
          <th>Coordinator</th>
          <th>No of Participants from GIET University, Nodal Center</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>59</td><td>Planetary Geosciences</td><td>June 08-12, 2020</td><td>1 Week</td><td>Dr. R.S. Chatterjee / Dr. Mamta Chauhan</td><td>12</td></tr>
        <tr><td>2</td><td>7001</td><td>“Remote Sensing & GIS Technology and Applications” for University Teachers & Government Officials</td><td>June 13 – July 01,2020</td><td>3 Week</td><td>Dr. A. K. Mishra / Dr. Vandita Srivastava</td><td>4</td></tr>
        <tr><td>3</td><td>9013</td><td>Health GIS</td><td>June 15-19, 2020</td><td>1 Week</td><td>Dr. Sameer Saran</td><td>10</td></tr>
        <tr><td>4</td><td>61</td><td>Satellite Photogrammetry and its Application</td><td>June29- July 03, 2020</td><td>1 Week</td><td>Dr. Anil Kumar / Dr. Hina Pande</td><td>38</td></tr>
        <tr><td>5</td><td>60</td><td>Application of Geoinformatics in Ecological Studies</td><td>July 13-24, 2020</td><td>2 Week</td><td>Dr. Hitendra Padalia / Dr. Subrat Nandy</td><td>22</td></tr>
        <tr><td>6</td><td>62</td><td>Geospatial Inputs for Enabling Master Plan Formulation</td><td>July 27-31, 2020</td><td>1 Week</td><td>Dr. Pramod Kumar</td><td>9</td></tr>
        <tr><td>7</td><td>63</td><td>RS Applications in Agricultural Water Management</td><td>August 03-07, 2020</td><td>1 Week</td><td>Dr. N R Patel / Mr. Abhishek Danodia</td><td>10</td></tr>
        <tr><td>8</td><td>64</td><td>Basics of “Remote Sensing, Geographical Information System and Global Navigation Satellite System”</td><td>August 17 –November 20, 2019</td><td>14 Weeks</td><td>Dr. Poonam S. Tiwari</td><td>33</td></tr>
        <tr><td>9</td><td>65</td><td>Remote Sensing and Digital Image Analysis</td><td>August 17 – September 11, 2020</td><td>4 Weeks</td><td>Ms. Minakshi Kumar</td><td></td></tr>
        <tr><td>10</td><td>66</td><td>Global Navigation Satellite System</td><td>September 14- 25, 2020</td><td>2 Weeks</td><td>Dr. Ashutosh Bhardwaj</td><td></td></tr>
        <tr><td>11</td><td>67</td><td>Understanding of Coastal ocean processes using Remote Sensing and Numerical Modelling</td><td>September 21-25, 2020</td><td>1 Week</td><td>MASD Department</td><td></td></tr>
        <tr><td>12</td><td>68</td><td>Geographical Information System</td><td>September 28-October 23, 2020</td><td>4 Weeks</td><td>Mr. Prasun Kumar</td><td></td></tr>
      </tbody>
    </table>
  </div>

      {/* <h3>Academic Integrity Committee (AIC)</h3>

      <p>
        The Academic Integrity Committee (AIC) at GIET University is responsible for maintaining and promoting academic honesty among the students and faculty. The committee investigates any allegations of academic misconduct, including plagiarism, cheating, and other forms of dishonesty. It ensures that academic standards are upheld and that the reputation of the university is maintained.
      </p>

      <h3>IQAC (Internal Quality Assurance Cell)</h3>

      <p>
        The IQAC at GIET University continuously monitors and enhances the quality of teaching, learning, and research activities. It facilitates quality assurance through internal audits, feedback mechanisms, and development programs for faculty and students. The IQAC aims to foster a culture of excellence and innovation in all academic endeavors.
      </p> */}
    </div>
    <div>
      <Footer/>
    </div>
  </>
    
  );
};

export default KnowledgePartners;
