import React,{useEffect} from 'react';
import './FAQ.css';

export default function FAQ() {
  useEffect(() => {
      document.title = 'FAQ - GIET University | Odisha | Gunupur'
    }, []);
  return (
    <>
      <br />
      <div>
        <h2 className="aic-title">
          FREQUENTLY ASKED QUESTIONS
        <span className="underline"></span>
        </h2>
      </div>
      <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions related to B.Tech admissions</h2>
      <hr className="faq-line" />
      <div className="faq-content">
        <p><strong>1. What is the medium of instruction in the class?</strong><br />
          Ans: <em>English only</em></p>

        <p><strong>2. What are the advantages being a University?</strong><br />
          Ans: <em>We have our own fully flexible curriculum, designed to suit the present need of the industry. Soft skills and industrial training are part of the curriculum. Few courses will be taught by industry experts.</em></p>

        <p><strong>3. What are the eligibility requirements for admission?</strong><br />
          Ans: <em>You can visit our website, admission section for the admission eligibility in detail.</em></p>

        <p><strong>4. When do I apply?</strong><br />
          Ans: <em>Students can start registering from the last week of March.</em></p>

        <p><strong>5. How to register and from where do I get the application?</strong><br />
          Ans: <em>You can apply online through Admissions/Online Registration page.</em></p>

        <p><strong>6. Do you have any officials through whom we can apply?</strong><br />
          Ans: <em>Yes we have Zonal Managers, Admissions officers for admission assistance. The detail of such officers are available on website. Once you are assured from our website you may apply through them.</em></p>

        <p><strong>7. Do I apply before the class 12 results?</strong><br />
          Ans: <em>Yes. You can apply with available documents for preliminary registration.</em></p>

        <p><strong>8. Where is Gunupur located?</strong><br />
          Ans: <em>Gunupur is sub divisional head quarter of Rayagada district... Visakhapatnam which is 180 KM from Gunupur.</em></p>

        <p><strong>9. What type of hostel accommodation do you provide to students?</strong><br />
          Ans: <em>Hostel accommodation is available with 2/3 member room... GIETU also has hostel for international students.</em></p>

        <p><strong>10. Is the hostel attached to college?</strong><br />
          Ans: <em>Yes, the Boys hostel are attached to campus.</em></p>

        <p><strong>11. Do you have internet facilities at the college?</strong><br />
          Ans: <em>Yes. The whole campus is connected through wi-fi.</em></p>

        <p><strong>12. How are the placement opportunities provided to the students?</strong><br />
          Ans: <em>Placement percentage is excellent. It is always above 90%... best Placement University in Eastern India in the recently held Asian summit.</em></p>

        <p><strong>13. How are the Research & Development facilities in the University?</strong><br />
          Ans: <em>GIETU has 15 R&D centres... great opportunity for students at the UG and PG level.</em></p>

        <p><strong>14. What are the scholarship schemes available?</strong><br />
          Ans: <em>Apart from Government scholarship schemes... toppers of JEE Main and GIETEE also considered for scholarships.</em></p>

        <p><strong>15. Will the documents for Bank Loans be given?</strong><br />
          Ans: <em>Yes, documents for Bank Loans will be issued after the confirmation of the admission.</em></p>

        <p><strong>16. Do college have clubs?</strong><br />
          Ans: <em>Yes, GIETU have 30+ various technical, cultural and social clubs for garnishing the talent of the students besides curriculum.</em></p>

        <p><strong>17. How are the teachers in the college?</strong><br />
          Ans: <em>The teachers are very well qualified and dedicated. Among 300+ Teachers, half of them are PhD degree holders.</em></p>
      </div>
    </div>
    </>
    
  );
}
