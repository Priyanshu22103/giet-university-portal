import React from "react";
import { useParams } from "react-router-dom";
import "./InteractionDetail.css";
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
const videoData = {
  "pramod-sethi": {
    title:
      "Mr. Pramod Sethi, Mr. Animesh Pati, Mr. Samir Kumar Prusty, Mr. Sandeep Pujari",
    image: "/images/test1.jpeg",
    description: `
Mr. Pramod Sethi (IT, 2006-10) working as Project Manager in TCS, Bhubaneswar.

Mr. Animesh Pati (Biotech, 2006-10) working as DGM-IOA in Cognizant.

Mr. Samir Kumar Prusty (AE&I, 2006-10) working as a Sr. Manager in Capgemini, Bangalore.

Mr. Sandeep Pujari (ECE, 2006-10) working as Project Manager in TCS.

Four esteemed Alumni from B.Tech 2006-10 batch spent two days on our university campus. During their visit, they interacted with students, faculty and staff, shared their experiences and insights, and explored the entire campus.

• Interaction with Students: The alumni shared their industry experiences and provided valuable advice to students.

• Departmental Visit: The alumni took a tour of their concerned department, witnessing the latest facilities and infrastructure.

• Faculty Meeting: The alumni met with faculty members, discussing research opportunities and potential collaborations.
    `,
    gallery: [
      "/images/test1.1.jpeg",
      "/images/test1.2.jpeg",
      "/images/test1.3.jpeg",
      "/images/test1.4.jpeg",
      "/images/test1.5.jpeg",
      "/images/test1.6.jpeg",
    ],
  },
  "susant-kamba": {
    title: "Mr. Susant Kumar Kamba",
    image: "/images/test2.jpg",
    description: `
One of our proud Alumni Mr. Susant Kumar Kamba, MBA (2021-23), working as an Assistant Manager at YES Bank, Raipur, Chhattisgarh, visited our University on 14th March 2025. During his visit, he interacted with our MBA 2nd year students.
    `,
    gallery: [
      "/images/test2.1.jpg",
      "/images/test2.2.jpg",
      "/images/test2.3.jpg",
      "/images/test2.4.jpg",
      "/images/test2.5.jpg",
    ],
  },
  "sudhir-mohapatra": {
    title: "Mr. Sudhir Kumar Mohapatra",
    image: "/images/test3.jpeg",
    description: `
Our beloved Alumni Mr. Sudhir Kumar Mohapatra, B. Tech (Biotechnology : 2005-2009) visited our university for a placement drive with his team on 13.03.2025.

He visited his department and addressed our 3rd year and 4th year B. Tech Biotech students on career aspirations. His insights aimed to prepare students for industry expectations and current industry requirements.

Name: Mr. Sudhir Kumar Mohapatra  
Branch: Biotechnology  
Batch: 2005 – 2009  
Working Organization: DIAGEO  
Designation: Manager : Manufacturing Excellence  
Date of Interaction: 13.03.2025
  `,
    gallery: [
      "/images/test3.1.jpeg",
      "/images/test3.2.jpeg",
      "/images/test3.3.jpeg",
      "/images/test3.4.jpeg",
      "/images/test3.5.jpeg",
      "/images/test3.6.jpeg",
    ],
  },
  "neelkamal-rout": {
    title: "Mr. Neelkamal Rout",
    image: "/images/test4.jpeg",
    description: `
Our beloved Alumni Mr. Neelkamal Rout addressed our 2nd year and 3rd year Mechanical Engineering students on the skills and recruitment process in thermal power plants. He emphasized the importance of serious study and encouraged students to refer to standard books in their respective subjects to build a strong foundation. His insights aimed to prepare students for industry expectations and enhance their technical knowledge for better career opportunities in the field.

Name: Mr. Neelkamal Rout  
Branch: Mechanical Engineering  
Batch: 2011 – 2015  
Working Organisation: Odisha Power Generation Corporation Ltd.  
Designation: Asst. Manager Projects  
Date of Interaction: 21.02.2025
  `,
    gallery: [
      "/images/test4.1.jpeg",
      "/images/test4.2.jpeg",
      "/images/test4.3.jpeg",
      "/images/test4.4.jpeg",
      "/images/test4.5.jpeg",
      "/images/test4.6.jpeg",
    ],
  },
  "subhashree-satapathy": {
    title: "Ms. Subhashree Satapathy",
    image: "/images/test5.jpeg",
    description: `
Our beloved Alumni Ms. Subhashree Satapathy from the MBA (2019–2021) batch visited our university and interacted with students on 8th February 2025.

She conducted a physical session on the topic of *Career Enhancement*, sharing valuable insights into the banking sector and professional growth. Her interaction aimed to guide students in understanding current industry expectations and how to align their skills accordingly for better career opportunities.

Name: Ms. Subhashree Satapathy  
Branch: MBA  
Batch: 2019 – 2021  
Working Organisation: ICICI Bank  
Designation: NRI RHS  
Topic: Career Enhancement  
Mode of Interaction: Physical  
Date of Interaction: 8th February 2025
  `,
    gallery: [
      "/images/test5.1.jpeg",
      "/images/test5.2.jpeg",
      "/images/test5.3.jpeg",
      "/images/test5.4.jpeg",
      "/images/test5.5.jpeg",
      "/images/test5.6.jpeg",
    ],
  },
  "debadarshana-parida": {
    title: "Mr. Debadarshana Parida",
    image: "/images/test6.jpg",
    description: `
Our esteemed Alumni Mr. Debadarshana Parida (ECE, Batch 2008–12) visited his Alma Mater on 20.02.2025.

Currently, he is working as Sr. Staff Engineer at Synopsys Inc, Noida.

During his 2-day visit, Mr. Debadarshana shared his experience and delivered a talk on the topic: *“AI Meets Embedded Systems: Driving the Future of Smart Technology”* to our 3rd year ECE students on 20.02.2025 and 2nd year ECE students on 21.02.2025.

He visited the whole campus, including the mega auditorium, and spent time with his department and faculty members, reconnecting with his academic roots and sharing valuable insights with the next generation.

Name: Mr. Debadarshana Parida  
Branch: Electronics and Communication Engineering (ECE)  
Batch: 2008 – 2012  
Working Organisation: Synopsys Inc, Noida  
Designation: Sr. Staff Engineer  
Topic: AI Meets Embedded Systems: Driving the Future of Smart Technology  
Date of Interaction: 20.02.2025 (3rd Year), 21.02.2025 (2nd Year)
  `,
    gallery: [
      "/images/test6.1.jpeg",
      "/images/test6.2.jpeg",
      "/images/test6.3.jpeg",
      "/images/test6.4.jpeg",
      "/images/test6.5.jpeg",
      "/images/test6.6.jpeg",
    ],
  },
  "subas-sadangi": {
    title: "Mr. Subas Ch Sadangi",
    image: "/images/test7.jpg",
    description: `
Our esteemed Alumni Mr. Subas Ch Sadangi (MBA, Batch 2009–11) returned to GIET University under our flagship *Industry to Institute (I2I) Program*.

Currently serving as Sr. Manager HR (Compliance) at Gensol Engineering Ltd., Gurgaon, Mr. Sadangi shared valuable industry insights, career guidance, and real-world experiences with our students—bridging the gap between academia and corporate excellence.

During his 2-day visit, he conducted two insightful sessions:

• On **31st January 2025**, from **5:30 PM to 6:30 PM**, he interacted with **MBA 1st year and 2nd year** students on the topic: *“Talent Management in the Digital Age”*.

• On **1st February 2025**, from **9:00 AM to 10:00 AM**, he addressed **Mechanical, Civil, and EE/EEE Engineering** students on the topic: *“Employability Skills”*.

His interactions were truly inspiring and left a lasting impact on the students.

Name: Mr. Subas Ch Sadangi  
Branch: MBA  
Batch: 2009 – 2011  
Working Organisation: Gensol Engineering Ltd., Gurgaon  
Designation: Sr. Manager HR (Compliance)  
Program: Industry to Institute (I2I)  
Topics:  
• Talent Management in the Digital Age (MBA Session)  
• Employability Skills (Engineering Session)  
Dates of Interaction: 31.01.2025 and 01.02.2025
  `,
    gallery: [
      "/images/test7.1.jpeg",
      "/images/test7.2.jpeg",
      "/images/test7.3.jpeg",
      "/images/test7.4.jpeg",
      "/images/test7.5.jpeg",
      "/images/test7.6.jpeg",
    ],
  },
  "debashis-kamila": {
    title: "Mr. Debashis Kamila",
    image: "/images/test8.jpeg",
    description: `
GIET University’s Mechanical Engineering Department & Alumni Association Cell recently had the honor of hosting its esteemed alumnus, Mr. Debashis Kamila, who currently serves as the **Assistant Division Manager at TATA Steel Pvt. Ltd.**

His visit on **January 30, 2025**, marked a significant occasion for both the faculty and students, fostering a deeper connection between industry and academia.

During his time on campus, Mr. Kamila engaged in a meaningful discussion with the university’s **Registrar, Dr. N V J Rao**, to explore various avenues of collaboration. The discussion focused on strengthening academic support, facilitating internship opportunities, placements, and more. These collaborative efforts aim to provide students with real-world exposure and practical learning experiences that complement their academic curriculum.

In addition to these discussions, Mr. Kamila interacted with **2nd and 3rd-year Mechanical Engineering students**, offering valuable insights into the corporate world. His session covered key aspects such as:
- Placement opportunities in core industries  
- The recruitment process  
- Essential skills required to succeed in the field  

By sharing his professional journey and firsthand experiences, Mr. Kamila provided students with a clearer understanding of industry expectations. His guidance proved to be highly informative and motivational, encouraging students to:
- Enhance their technical expertise  
- Strengthen communication skills  
- Develop problem-solving abilities  

These are the key attributes that industries actively seek in today’s graduates.

Name: Mr. Debashis Kamila  
Branch: Mechanical Engineering  
Batch: [Batch not specified]  
Working Organisation: TATA Steel Pvt. Ltd.  
Designation: Assistant Division Manager  
Date of Interaction: 30.01.2025  
Topics Covered: Collaboration opportunities, Placement preparation, Industry expectations, Skill development
  `,
    gallery: [
      "/images/test8.1.jpg",
      "/images/test8.2.jpg",
      "/images/test8.3.jpg",
    ],
  },
  "sovan-kumar": {
    title: "Mr. M V Sovan Kumar",
    image: "/images/test9.jpeg",
    description: `
We are proud to highlight our distinguished alumnus, **Mr. M V Sovan Kumar**, from the **Chemical Engineering** branch, **Batch 2010–2014**.

Currently serving as **Manager, Production** at **Finor Piplaj Chemicals Ltd., Navi Mumbai**, Mr. Sovan Kumar exemplifies the successful career pathways our graduates pursue in the chemical industry.

His professional journey stands as an inspiration to current students, showcasing how dedication, technical knowledge, and practical experience can lead to significant roles in reputed organizations.

Name: Mr. M V Sovan Kumar  
Branch: Chemical Engineering  
Batch: 2010 – 2014  
Working Organisation: Finor Piplaj Chemicals Ltd., Navi Mumbai  
Designation: Manager, Production
  `,
    gallery: [
      "/images/test9.1.jpeg",
      "/images/test9.2.jpeg",
      "/images/test9.3.jpeg",
    ],
  },
};

const InteractionDetail = () => {
  const { id } = useParams();
  const detail = videoData[id];

  if (!detail) return <div>Not Found</div>;

  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
      <div className="video-detail">
        <div className="video-content">
          <img src={detail.image} alt={detail.title} className="main-image" />

          <div className="description">
            <h1 className="video-title">{detail.title}</h1>
            {detail.description.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {detail.gallery && detail.gallery.length > 0 && (
          <div className="gallery">
            <h2>More Photos</h2>
            <div className="gallery-images">
              {detail.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`gallery-${idx}`} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default InteractionDetail;
