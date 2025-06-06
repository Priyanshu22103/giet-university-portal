import './LearningAndPedagogy.css';
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
import { useEffect } from 'react';
function LearningAndPedagogy() {
  useEffect(() => {
         document.title = 'Learning & Pedagogy - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div className="academics-page">
      <Navbar />
      <h1 className="section-heading">LEARNING AND PEDAGOGY</h1>
      
      <p><em>“Tell me, and I forget. Teach me, and I remember. Involve me, and I learn.” – Benjamin Franklin.</em></p>

      <p>Learning and Pedagogy go hand in hand. Efficient pedagogy includes several advanced learning techniques like entire-class experience and structured group collaboration. Pedagogy caters to a diverse range of learners and gives equality in education techniques to the students.</p>

      <h2>Curriculum and Pedagogy</h2>
      <p>GIET University aims at establishing an environment of learning with the 3Es- Equity, Efficiency, and Excellence. The University Grants Commission (UGC) has introduced “Choice Based Credit System (CBCS)” with the hope that all Universities will adopt these measures to enhance academic standards. To encourage and boost an equitable learning experience for its students, GIETU partially adopted the CBCS policy. A select committee for a comprehensive action plan was also formulated to provide for its students a wholesome experience of learning and growing in a platform that is ‘just’ and ‘non-partisan.’ The community learning at GIETU connects fellow students and alumni across different interests and courses. It also helps boost learning and growing personally and intellectually, leading to deeper bonds that last a lifetime.</p>

      <h2>Innovative Curriculum</h2>
      <p>The innovative curriculum that forms the very basis for GIETU is infused with theory and practice to instill experiential learning. With case studies and examples from various domains like policy-making and governance, and frequent evaluations by external academicians, the curriculum emerges as an ever-evolving program. It strives to increase the chances of opportunity by incorporating technologies in classrooms with an enhanced faculty set. The center for teaching and learning, in its heart, is the innovative educational technologies into academic experiences with advanced exploration. The council of science and technology and research and development prepares or hones the students to be scientifically and technologically equipped students. The interdisciplinary approach helps to fuse different viewpoints like scientific, engineering, technological and mathematical.</p>

      <h2>Teaching Pedagogy</h2>
      <p>GIETU’s pedagogy is induced with an interactive session to create an intuitive ambiance and stands apart as it encourages communication and activity-based learning for better learning outcomes among students. The faculty at GIETU are driven and motivated to continually create an atmosphere to assist and evaluate learning through Gap Analysis. The faculty emphasizes special attention to the background, parents’ support, counseling, communication, and aptitude verification of students. It provides feedback analysis of students to magnify its transparency and authenticity. The use of arts and innovative ways soar all expectations. The extra co-curricular activities include sporting events that develop a teamwork spirit and leadership by cheering and winning together towards victory. Other campus recreational activities at GIETU include fitness, wellness opportunities for students like intramural sports, club sports, instructional programming fitness center, comprehensive counseling, fitness, and medical services.</p>
      <ul>
        <li>Creating an encouraging environment in which students are supported in their learning</li>
        <li>Evaluating each student by performing Gap Analysis with respect to educational background, Parents support, career goal setting, level of communication skills, attitude and experiences etc.</li>
        <li>Feedback, sustained attention. Teaching with technology engages students with different kinds of stimuli-involve in activity based learning.</li>
      </ul>

      <h2>Experimental Learning</h2>
      <p>The University continually strives to cultivate substantial learning depth by associating it with industry. It encourages “learning by doing” for a first-hand experience at learning that transcends the mere classroom learning. Consequently, the very cornerstone of GIETU has been hands-on training to produce smart business graduates. It is coupled with frequent on-field learning like visits to industries and compulsory internships. Most of all, good public services are infused in GIETU through a range of initiatives and programs. Involving students in an environment of giving and sharing has helped the students a great deal to shape their lives. It infuses the students with a better understanding of the current scenario, develops a sense of compassion and the urge to develop the latest technology, and opportunity for everyone to grow and develop together.</p>

      <p>The principles of pedagogy in GIETU stand for:</p>
      <ul>
        <li>Productive collaboration between teachers and students who come together for productive learning.</li>
        <li>Language development at the levels of academic and professional for the students.</li>
        <li>Comprehensive curriculum and effective utilization of students’ skills and knowledge that connects school and educational center to the students.</li>
        <li>Educating complex thinking methods to students and preparing them for any situation in future.</li>
        <li>Teaching through communication and conversation with educators.</li>
      </ul>
    </div>
        <Footer/>
    </> 
  );
}

export default LearningAndPedagogy;
