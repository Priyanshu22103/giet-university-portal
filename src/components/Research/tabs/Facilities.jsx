// src/components/tabs/ResearchOverview.jsx
import React from "react";
// import "./ResearchOverview.css";
import { useEffect } from "react";
const Facilities = () => {
  useEffect(() => {
        document.title = 'Facilities-GIET University | Odisha | Gunupur'; 
    },[])
  return (
    <div className="overview">
      <h2 className="heading" style={{ marginLeft: "402px",color:'black' }}>
        Facilities
      </h2>
      <br />
      <div className="divider" style={{ marginLeft: "423px",width:'88px' }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div style={{textAlign:'justify',fontSize:'18px',lineHeight:'30px'}}>
        We at GIET University, provides a magnificent and comprehensive range of
        facilities within the campus for our students. At GIET University there
        is a well-established system for optimum use of available research
        facilities and their regular maintenance. For this very purpose, a
        transparent SOP or Standard Operating Procedure is followed to have
        clarity about the respective sense of duties and responsibilities among
        the staff members. An effective distribution of work is carried out
        through the comprehensive system of committees to ensure that each and
        every staff is actively participating and an overall efficiency in
        carried out to perform varied tasks. The different teaching departments
        are in charge of taking care of the matters related to their respective
        fields. In addition to this, there are different committees that work
        independently for their allotted work under the supervision of the
        Principle. The work so distributed among the committee members and
        teaching faculty and staffs are well understood and there are
        unambiguous channels that supervises the college facilities for
        maintenance, utilization, upgradation and other vital requirements.
        <h3>Classrooms</h3>
        The classrooms at GIET University are an excellent place for learning
        and develop overall developmental skills. Each and every classroom is
        equipped with proper sitting arrangements, well-designed furnishings,
        power supply and LCD projector. The teaching and learning pedagogy
        practiced inside every classroom at our University is IT-enabled. The
        classrooms are designed to support a total strength of 200 students and
        the tutorial classes are designed for strength of over 30 students. We
        are delighted to inform that our university campus is fully LAN-enabled
        with a Learning Management System or LMS that allows students to discuss
        important academic topics, submit projects and assignments online,
        access the library digitally for academic research and download and
        upload class notes. The classrooms are regularly upkeep and the cleaning
        staff ensures daily sweeping of the classrooms and even the cleaning of
        benches and boards.
        <h3>E-learning room (Swayam/ MOOCs)</h3>
        Along with the traditional mode of learning, E-learning rooms have also
        been developed to support students in their studies. We strive to
        promote and expand the use of e-learning all across the University to
        enhance the overall student experience. The focus throughout the leaning
        module is to ensure that our facilities can reflect excellence in
        teaching, research and learning that is expected of a world-class
        institution. We have adopted the use of state-of-art technological
        innovations which enables the university staff, members and community to
        realize their potential in academic excellence for a lifetime learning
        culture.
        <h3>Library</h3>
        Library is one of the most crucial facilities that are frequently used
        by students and faculty members to support different learning and
        teaching needs. That’s why a prima facie separate block of library is
        built within the main building of the college. The university library
        consists of well stocked two stories book space, well equipped
        E-Resource Centre and an extended reading lounge for students and staffs
        to read their read comfortably. New books are added every year after
        getting recommendations from the concerned faculty members.
        <h3>Laboratories</h3>
        GIET University provides state of art laboratories and laboratory
        facilities to the teachers, students and staff to carry out learning,
        teaching and practical activities uninterrupted. There are separate labs
        for each department to carry our practical skills and learning which
        forms the core of our prescribed syllabus and pedagogy. Our libraries
        provide practical exposure to multiple subjects and give the students an
        opportunity to experiment with what they have been taught in the
        classrooms.
        <h3>Seminar Rooms</h3>
        There are multiple seminar rooms at the GIET University well equipped
        with the latest audio-visual facilities to act as a common ground for
        students and faculty member. The seminar rooms are extensively setup for
        conducting regular interfaces, guest lectures, conferences,
        presentations, cultural events, and other academic and co-curriculum
        activities. These seminar rooms are easily accessible and they provide
        an excellent environment to support learning and teaching with complete
        audio-visual support, sound and lighting clarity and stadium-style
        seating arrangements.
        <h3>Computers and other ICT Facilities</h3>A rich and vibrant
        infrastructure of computer labs and other ICT facilities throughout the
        college is provided for optimum exposure to students in the need of the
        hour. To provide a highly effective leading and research experience for
        students and staff we have facilitated a compulsory computer lab,
        English language lab, E-Research center in the library, computer science
        department lab, computer labs in the departments of economics,
        mathematics, physics and education etc. These are supported by various
        VPN broadband connections and there are also some key empowered
        committees to access, upgrade, maintain and modify computers and IT
        infrastructure of the University.
      </div>
    </div>
  );
};
export default Facilities;
