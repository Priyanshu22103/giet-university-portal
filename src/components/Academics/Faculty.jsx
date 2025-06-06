import React,{useEffect} from 'react';
import './Faculty.css'
import Navbar from '../AcademicsAdditional/Navbar';
import Footer from '../Home/Footer'
const facultyData = [
  {
    slNo: 1,
    name: "Dr. MANORANJAN MOHAPATRA",
    dob: "22-01-1961",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Professor",
    gender: "M",
    doj: "18-09-2021",
    email: "manoranjanmohapatra@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 2,
    name: "Dr. ANATH BANDHU DAS",
    dob: "20-03-1959",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Professor",
    gender: "M",
    doj: "10-01-2022",
    email: "anath.bandhudas@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 3,
    name: "Dr. V S DEVADAS",
    dob: "01-01-1958",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Professor",
    gender: "M",
    doj: "30-05-2023",
    email: "v.sdevadas@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 4,
    name: "Dr. JAYANT KUMAR PARIDA",
    dob: "25-07-1976",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Professor",
    gender: "M",
    doj: "18-01-2022",
    email: "jayantparida@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 5,
    name: "Dr. RAJESH KUMAR PADHY",
    dob: "03-08-1974",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Professor",
    gender: "M",
    doj: "03-08-2023",
    email: "rajeshpadhy@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 6,
    name: "Dr. DIPTI RANJAN SWAIN",
    dob: "14-06-1968",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Associate Professor",
    gender: "F",
    doj: "05-06-2023",
    email: "diptiswain@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 7,
    name: "Mr. SASHANK PADHY",
    dob: "23-07-1983",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Assistant Professor",
    gender: "M",
    doj: "15-07-2022",
    email: "sashankpadhy@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 8,
    name: "Mr. KAMAL CHANDRA MALLICK",
    dob: "03-08-1977",
    school: "SCHOOL OF AGRICULTURE",
    department: "AGRICULTURE",
    designation: "Assistant Professor",
    gender: "M",
    doj: "25-08-2022",
    email: "kamalmallick@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 9,
    name: "Dr. SAILENDRA KUMAR DASH",
    dob: "14-09-1969",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "18-06-2021",
    email: "sailendradash@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 10,
    name: "Dr. RANJIT KUMAR NANDA",
    dob: "25-07-1970",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "05-01-2023",
    email: "ranjitnanda@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 11,
    name: "Dr. PRASANTA KUMAR SAHOO",
    dob: "03-06-1965",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "12-08-2022",
    email: "prasantasahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 12,
    name: "Dr. DEEPAK KUMAR RATH",
    dob: "10-12-1967",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "30-07-2021",
    email: "deepakrath@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 13,
    name: "Dr. MUKUND RANJAN DAS",
    dob: "01-03-1972",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "17-09-2021",
    email: "mukunddas@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 14,
    name: "Dr. BISWAJIT MOHANTY",
    dob: "11-06-1975",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "03-01-2023",
    email: "biswajitmohanty@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 15,
    name: "Ms. MANASWEE PATNAIK",
    dob: "22-11-1981",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Assistant Professor",
    gender: "F",
    doj: "21-07-2022",
    email: "manasweepatnaik@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 16,
    name: "Mr. SUBASH CHANDRA PATRA",
    dob: "29-03-1980",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "COMPUTER SCIENCE AND ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "12-06-2021",
    email: "subashpatra@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 17,
    name: "Dr. NARENDRA KUMAR SAHOO",
    dob: "05-08-1973",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRICAL ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "10-10-2022",
    email: "narendrasahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 18,
    name: "Dr. SANTOSH KUMAR SAHOO",
    dob: "12-12-1978",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRICAL ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "18-11-2021",
    email: "santoshsahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 19,
    name: "Mr. PRADIP KUMAR MOHAPATRA",
    dob: "09-01-1981",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRICAL ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "15-08-2022",
    email: "pradipmohapatra@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 20,
    name: "Dr. GOURANGA CHARAN SAHOO",
    dob: "24-07-1974",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "MECHANICAL ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "20-09-2021",
    email: "gourangasahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 21,
    name: "Dr. PRADIP KUMAR SAHOO",
    dob: "16-06-1979",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "MECHANICAL ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "11-11-2022",
    email: "pradipsahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 22,
    name: "Mr. PRASHANT KUMAR SAHOO",
    dob: "14-09-1982",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "MECHANICAL ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "10-12-2022",
    email: "prashantsahoo@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 23,
    name: "Ms. POOJA RANI PATRA",
    dob: "27-04-1985",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "MECHANICAL ENGINEERING",
    designation: "Assistant Professor",
    gender: "F",
    doj: "01-09-2022",
    email: "poojapatra@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 24,
    name: "Dr. KALYAN KUMAR SAHOO",
    dob: "18-11-1976",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "CIVIL ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "25-10-2021",
    email: "kalyansahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 25,
    name: "Dr. RAJESH KUMAR BEHERA",
    dob: "09-02-1980",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "CIVIL ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "14-07-2022",
    email: "rajeshbehera@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 26,
    name: "Mr. BIKASH KUMAR NAYAK",
    dob: "03-05-1985",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "CIVIL ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "21-09-2022",
    email: "bikashnayak@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 27,
    name: "Ms. NIBEDITA PATRA",
    dob: "17-07-1988",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "CIVIL ENGINEERING",
    designation: "Assistant Professor",
    gender: "F",
    doj: "12-01-2023",
    email: "nibeditapatra@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 28,
    name: "Dr. AMALENDU MAHAPATRA",
    dob: "10-06-1964",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    designation: "Professor",
    gender: "M",
    doj: "30-05-2021",
    email: "amalendumahaapatra@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 29,
    name: "Dr. BIJAYA KUMAR SAHOO",
    dob: "22-01-1970",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    designation: "Associate Professor",
    gender: "M",
    doj: "08-07-2022",
    email: "bijayasahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 30,
    name: "Mr. AJAYA KUMAR NAYAK",
    dob: "09-09-1983",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    designation: "Assistant Professor",
    gender: "M",
    doj: "10-12-2022",
    email: "ajayanayak@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 31,
    name: "Ms. PRATIBHA DEVI",
    dob: "14-04-1985",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    designation: "Assistant Professor",
    gender: "F",
    doj: "03-01-2023",
    email: "pratibhadevi@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 32,
    name: "Dr. DINESH KUMAR SAHOO",
    dob: "01-12-1975",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "INFORMATION TECHNOLOGY",
    designation: "Professor",
    gender: "M",
    doj: "30-05-2021",
    email: "dineshsahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 33,
    name: "Dr. RAJESH KUMAR NAYAK",
    dob: "05-05-1980",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "INFORMATION TECHNOLOGY",
    designation: "Associate Professor",
    gender: "M",
    doj: "18-06-2022",
    email: "rajeshnayak@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 34,
    name: "Mr. ARUN KUMAR PANDA",
    dob: "12-07-1986",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "INFORMATION TECHNOLOGY",
    designation: "Assistant Professor",
    gender: "M",
    doj: "10-12-2022",
    email: "arunpanda@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 35,
    name: "Ms. SANGITA SAHOO",
    dob: "25-09-1987",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "INFORMATION TECHNOLOGY",
    designation: "Assistant Professor",
    gender: "F",
    doj: "01-01-2023",
    email: "sangitasahoo@giet.edu",
    qualification: "M.Tech",
  },
  {
    slNo: 36,
    name: "Dr. SURESH KUMAR SAHOO",
    dob: "09-10-1970",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "BASIC SCIENCE AND HUMANITIES",
    designation: "Professor",
    gender: "M",
    doj: "05-08-2021",
    email: "sureshsahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 37,
    name: "Dr. RANJIT KUMAR SAHOO",
    dob: "15-06-1975",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "BASIC SCIENCE AND HUMANITIES",
    designation: "Associate Professor",
    gender: "M",
    doj: "12-09-2022",
    email: "ranjitsahoo@giet.edu",
    qualification: "Ph.D",
  },
  {
    slNo: 38,
    name: "Ms. ANJALI PATRA",
    dob: "20-04-1984",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "BASIC SCIENCE AND HUMANITIES",
    designation: "Assistant Professor",
    gender: "F",
    doj: "20-11-2022",
    email: "anjalipatra@giet.edu",
    qualification: "M.A",
  },
  {
    slNo: 39,
    name: "Mr. NILESH KUMAR PANDA",
    dob: "13-05-1980",
    school: "SCHOOL OF ENGINEERING AND TECHNOLOGY",
    department: "BASIC SCIENCE AND HUMANITIES",
    designation: "Assistant Professor",
    gender: "M",
    doj: "18-12-2022",
    email: "anjalipatra@giet.edu",
    qualification: "M.A",
}
];
const Faculty = () => {
  useEffect(() => {
         document.title = 'Faculty - GIET University | Odisha | Gunupur'
  }, []);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="faculty-container" style={{color:'black'}}>
      <h2 className="aic-title">
         FACULTY
        <span className="underline"></span>
        </h2>

      <div className="faculty-content">
        <div className="faculty-images">
          <img src="https://www.giet.edu/wp-content/uploads/2021/03/teaching1.jpg" alt="Faculty 1" />
          <img src="	https://www.giet.edu/wp-content/uploads/2021/03/teaching31.jpg" alt="Faculty 2" />
          <img src="	https://www.giet.edu/wp-content/uploads/2021/03/teaching2.jpg" alt="Faculty 3" />
          <img src="https://www.giet.edu/wp-content/uploads/2021/03/teaching4.jpg" alt="Faculty 4" />
        </div>

        <div className="faculty-text">
          <p>
            GIET University has a highly talented and motivated faculty pool for all departments.
            They are not just capable teachers but also are compassionate mentors to the students.
            The acclaimed group of faculties teach their academic disciplines and inculcate real-world
            experience amongst the students. Most of the faculties are Ph.D. qualified and are ever
            ready to embrace the advanced teaching methods and techniques to educate students about
            the latest advancements in management, science and technology. The University takes the
            onus upon itself to teach the latest in science and technology to its students. To that effect,
            GIETU regularly organizes conferences, workshops, seminars, guest lectures, industry visits,
            and skill training.
          </p>
        </div>
      </div>
        {/* Faculty table */}
      <div className="faculty-table-container">
        <table className="faculty-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name of the Faculty</th>
              <th>DOB</th>
              <th>Name of the School</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Date of Joining</th>
              <th>Email ID</th>
              <th>Highest Qualification</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((faculty) => (
              <tr key={faculty.slNo}>
                <td>{faculty.slNo}</td>
                <td>{faculty.name}</td>
                <td>{faculty.dob}</td>
                <td>{faculty.school}</td>
                <td>{faculty.department}</td>
                <td>{faculty.designation}</td>
                <td>{faculty.gender}</td>
                <td>{faculty.doj}</td>
                <td>{faculty.email}</td>
                <td>{faculty.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
      <div>
        <Footer/>
      </div>
    </>
    
  );
};

export default Faculty;
