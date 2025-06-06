import React,{useEffect} from "react";
import "./AcademicIntegrity.css";
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const AcademicIntegrity = () => {
  useEffect(() => {
         document.title = 'Academic Integrity - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div><Navbar/></div>
      <div className="aic-container">
      <h2 className="aic-title">
        ACADEMIC INTEGRITY COMMITTEE (AIC)
        <span className="underline"></span>
      </h2>


      <div className='totally-div'>
        <div className='contents-div'>
          <div className="aic-content">
            <p>
              This Committee is constituted to maintain the standards of academics, and prevent suspected violations of academic integrity such as plagiarism, among students and faculty within educational institutions. As per the Minutes of Academic Council meeting dt:17-07-2021, the Academic Integrity Committee of Gandhi Institute of Engineering and Technology University, Odisha, Gunupur (GIET University) was reconstituted on 27-07-2021.
            </p>

            <h3>Statutory Composition:</h3>
            <p>The Academic Integrity Committee of GIET University shall consist of</p>
            <ul>
              <li>i. Registrar –Chairman of the Committee</li>
              <li>ii. Assistant Registrar, IQAC – Member Secretary</li>
              <li>iii. Librarian- Coordinator</li>
            </ul>

            <h3>Current Composition:</h3>
            <table className="aic-table">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name and Designation</th>
                  <th>Position in the Committee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Prof (Dr.) N. V. Jagannadha Rao, Registrar</td>
                  <td>Chairperson</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. Nikunja Kishor Patro, Librarian, Central Library</td>
                  <td>Coordinator</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mr. Shakti Prasanna Khadanga, Assistant Registrar, IQAC</td>
                  <td>Member Secretary</td>
                </tr>
              </tbody>
            </table>

            <h3>Meeting Frequency</h3>
            <p>Quarterly in a year</p>

            <h3>Terms of References:</h3>
            <p>The primary objectives of the Academic Integrity Committee include:</p>
            <ul>
              <li>Encourage morality and Ethical Behaviour in Academic Work: Establish a culture of integrity and ethics in academic work.</li>
              <li>Examine Misconduct: Look into claims of plagiarism and cheating in-depth when it comes to academic dishonesty.</li>
              <li>Create Policies: To guarantee fairness and clarity, create and revise policies about academic integrity in research.</li>
              <li>Give instructors and students access to resources and instruction on the values and procedures of academic integrity.</li>
              <li>Encourage Faculty and Students to adhere to integrity standards: Provide direction and assistance to help avert academic misconduct in research.</li>
            </ul>

            <p>The following flow chart which is self-explanatory and it can be treated as SoP:</p>

            <div className="aic-image-wrapper">
      <img
        src="https://www.giet.edu/wp-content/uploads/2025/05/AIC.jpg"
        alt="Academic Integrity Committee Flow Chart"
        className="aic-image"
      />
    </div>

            <h3>Confidentiality:</h3>
            <p>
              All material revealed during academic integrity proceedings involving academic integrity violations, including the fact that the case review occurred, must be treated as confidential by faculty, administrators, and students involved. Only after signing a nondisclosure agreement that restricts case discussions to committee members and college deans with a need-to-know basis will those appointed to the Academic Integrity Committee be allowed to serve.
            </p>

            <h3>The three primary forms of inappropriate academic conduct that will be taken into account are:</h3>
            <ul>
              <li>Plagiarism</li>
              <li>Cheating</li>
              <li>Conflict of interest</li>
            </ul>

            <h4>Plagiarism:</h4>
            <p>
              The use of information, concepts, figures, code, or data without proper attribution or, in certain situations, consent from the original source is known as plagiarism. This could entail submitting content that has been written by someone else or previously published by oneself, either literally or paraphrased.For instance:
            </p>
            <ul>
              <li>Reproducing text or sentences from a report, book, thesis, newspaper, or the internet, in whole or in part.</li>
              <li>Reproducing one’s own data, figures, photos, graphics, previously published data, etc.</li>
              <li>Including information from class notes or websites in one’s class reports, presentations, papers, or theses without giving credit to the original source.</li>
              <li>Copying verbatim from one’s own previously published work in a journal or conference proceedings without properly citing it is known as self-plagiarism.</li>
            </ul>

            <h4>Cheating:</h4>
            <p>
              It is another form of unacceptable academic behaviour and may be classified into different categories:
            </p>
            <ul>
              <li>Copying term papers, or manuscripts, as well as during tests. creating a paper or test for someone else, or permitting or assisting with copying.</li>
              <li>Using unapproved content, making copies, working together without permission, and buying or borrowing documents or information from other sources.</li>
              <li>Making up or modifying data, then reporting the results in papers and theses.</li>
            </ul>
            <p>Some guidelines for academic conduct are provided below to guard against negligence as well as deliberate dishonesty:</p>
            <ul>
              <li>Conduct experiments and computational work according to the correct approach. Describe and gather facts accurately.</li>
              <li>Take great care to document and preserve primary and secondary data, including computer folders, lab notebooks, instrument data readouts, and original photographs. Images and photos should be digitally altered as little as possible; the original should be preserved for future review if necessary, and the modifications should be properly explained.</li>
              <li>Assure statistical analysis and strong reproducibility of simulations and experiments. In order to create an impressive figure, it is crucial to be honest about the data and avoid cherry-picking.</li>
              <li>To allow for future inspection during publications or patents, lab notes must be kept in good condition in bound notebooks with written page numbers. Every page should have the date.</li>
              <li>Use your own language and write clearly. For papers, and theses, one must avoid the temptation to “copy and paste” from the Internet or other sources.</li>
              <li>Provide proper citations for earlier studies, techniques, computer programs, etc. As previously stated, any content that is copied from your own published work must also be cited; otherwise, it will be deemed self-plagiarism.</li>
            </ul>

            <h4>Conflict of Interest:</h4>
            <p>
              Conflicts of interest can arise in a variety of activities, including teaching, research, publishing, serving on committees, research financing, and consulting, when personal or private interests collide with professional pursuits. Protecting genuine professional independence, objectivity, and dedication is essential, as is avoiding the appearance of any improper behaviour brought on by conflicts of interest. Conflict of interest encompasses a wide range of professional academic activities, such as peer review, serving on committees that may, for instance, monitor funding or award recognition, and influencing public policy, and is not limited to personal financial gain. Potential conflicts of interest must be reported in writing to the proper authorities in order to foster transparency and increase credibility. This allows for a thoughtful choice to be made on an individual basis. There is some more information available in the resources section below as well.
            </p>
          </div>
      </div>
      </div>
    </div>
      <div><Footer/></div>
    </> 
  );
};

export default AcademicIntegrity;
