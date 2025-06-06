import React, { useState,useEffect } from 'react';
import './Leadership.css';

const leaders = [
  {
    name: "Dr. Satya Prakash Panda",
    title: "PRESIDENT",
    image: "/images/satya.jpg",
    description: "Over the past 25 years GIET University, Gunupur has achieved many milestones and moving towards fulfilling its vision of transforming the lives of the people by providing comprehensive and qualitative education globally. One man’s sleepless...",
    full: "Over the past 25 years GIET University, Gunupur has achieved many milestones and moving towards fulfilling its vision of transforming the lives of the people by providing comprehensive and qualitative education globally. One man’s sleepless efforts and vision has made this possible; it all started from scratch by Prof. (Dr) Satya Prakash Panda, the venerable founder chairman of the Gandhi Group of Institutions. He is a visionary and an inveterate academician, dared to establish his flagship institution GIET at Gunupur, the tribal hinterland of Odisha, which has acted as the growth engine for this ever-neglected part of the country, leaving an example for others to follow. Recipient of several awards for his services to the nation, Dr. Panda is a humble Gandhian educationalist, philanthropist, social worker who believes and practices excellence in all facets of life. The founder of the legendary Gandhi Group is a multifaceted personality with exceptional qualities as a person as well as scholar. He is the man of intellectual integrity and humanism, a Gandhian, edu-entrepreneur, a human administrator, an ardent advocate, a social worker, a friend to the needy with an open mind and big heart. He has played each of his roles of life with immaculate perfection. A great inspirer and a warm personality have brought colors of rainbow in to the lives of millions.",
  },
  {
    name: "Dr. Chandra Dhwaj Panda",
    title: "VICE PRESIDENT",
    image: "/images/chandra.jpg",
    description: "We live in a world that is driven intensely by knowledge where literally and figuratively, Knowledge is Power. Exercising this power with diligence and dynamism is a formidable task and requires a mindset that is...",
    full: "We live in a world that is driven intensely by knowledge where literally and figuratively, Knowledge is Power. Exercising this power with diligence and dynamism is a formidable task and requires a mindset that is open to new ideas and innovations. The world of education is no exception to this. The GIET University, Gunupur has been at the forefront of this change and has been instrumental in creating a new generation of leaders who are not only academically sound but also socially responsible. The university has been successful in creating an environment that fosters creativity, innovation, and entrepreneurship. The university has also been successful in creating a culture of excellence that is reflected in the achievements of its students and faculty. The university has been successful in creating a brand that is recognized nationally and internationally. The university has been successful in creating a legacy that will be remembered for generations to come.",
  },
  {
    name: "Dr. Jagadish Panda",
    title: "DIRECTOR GENERAL",
    image: "/images/jagadish.jpg",
    description: "The University draws much of its inspiration and strength from its Director General. An energetic and dynamic personality Dr. Jagadish Panda has done M.Tech and Ph.D in Computer Science & Engineering. He demonstrates the qualities of passion,...",
    full: "The University draws much of its inspiration and strength from its Director General. An energetic and dynamic personality Dr. Jagadish Panda has done M.Tech and Ph.D in Computer Science & Engineering. He demonstrates the qualities of passion, energy and commitment with a global vision. Being the trustee as well as a dynamic Director, his contributions towards the growth of the group are commendable. He provides guidance to balance between financial growth and social responsibilities of the university. He is a team oriented individual and invites opinions from all individuals and supports their decisions which are in the best interest of the university. He also emphasizes on quality primary education to all and his love towards children reflects in his passionate association with the Gandhi Public School (GPS), Gunupur.",
  },
  {
    name: "Dr. Lalit Mohan Patnaik",
    title: "PRO-CHANCELLOR",
    image: "/images/officer1.jpg",
    description: "Dr. L M Patnaik is the doyen of modern computer science and engineering of India. During the last 52 years of his long service, his teaching, research, and development interests have been in the broad...",
    full: "Dr. L M Patnaik is the doyen of modern computer science and engineering of India. During the last 52 years of his long service, his teaching, research, and development interests have been in the broad areas of Artificial Intelligence, Soft Computing, VLSI Design, Embedded Systems, and Computer Architecture. He has published more than 500 research papers in reputed journals and conferences. He has guided more than 50 Ph.D. students and has been a member of the editorial board of several international journals. He has received several awards for his contributions to the field of computer science and engineering.",
  },
  {
    name: "Dr. A. V. N. L. Sharma",
    title: "VICE CHANCELLOR",
    image: "/images/officer2.jpg",
    description: "Dr. r. A.V.N.L.Sharma is an academician, a beloved teacher and a focused leader with a vision to improve the overall development of the university to the international standards. He comes with a total of 30 years...",
    full: "Dr. A.V.N.L.Sharma is an academician, a beloved teacher and a focused leader with a vision to improve the overall development of the university to the international standards. He comes with a total of 30 years of experience in industry and academics. He served as Asst. works manager, Erection Engineer, Research & Development, Dean Academics, Board of studies chairman, member of Academic Council, member of Board of Governors. He has an impressive track record of quality teaching, innovation and research in the area of Mechanical Engineering and was instrumental in converting manual operations into semi automatic machines. He is guiding 4 research scholars and guided about 20 M.E/ M.Tech projects. He published 24 papers in various national and international journals, 12 conference proceedings and 1 book chapter. He has also 4 patents published. During his tenure he has established flexible manufacturing cell with AICTE funding to a tune of 75 lakhs, established EDP & IIPC cells with 16 lakhs and Samriddhi for 10 lakhs. He holds professional body membership in institution of engineers (IE) India as a fellow member and also a member in International Accreditation Council of Quality Education",
  },
  {
    name: "Dr. N. V. Jagannadha Rao",
    title: "REGISTRAR",
    image: "/images/officer3.jpg",
    description: "Dr. A.V.N.L.Sharma is an academician, a beloved teacher and a focused leader with a vision to improve the overall development of the university to the international standards. He comes with a total of 30 years...",
    full: "Dr. N. V. J. Rao is a versatile personality and thought leader with more than 25 years of administrative experience across various areas as in addition to the existing profile. He has done MBA and PhD in Management. He served the university dating back to its inception since 1997. He has a strong moral character and integrity in handling university policies and his leadership ability is imperative for effective supervision. Since from the beginning his main motive is to help the students both in academic and non-academic problems and counsel them in shaping to be worthy in the present market conditions which helps both the students as well as the university.",
  },
];

const Leadership = () => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
          document.title='Leadership - GIET University | Odisha | Gunupur'
    },[])
  return (
    <>
      <div className={`leadership-container ${selected ? 'blurred' : ''}`}>
        <h2 className="aic-title">
          LEADERSHIP
        <span className="underline"></span>
        </h2>
        <div className="card-grid">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <img src={leader.image} alt={leader.name} />
              <h3>{leader.name}</h3>
              <h4>{leader.title}</h4>
              <p>{leader.description}</p>
              <button onClick={() => setSelected(leader)}>Read More+</button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-button" onClick={() => setSelected(null)}>×</button>
            <div className="modal-left">
              <img src={selected.image} alt={selected.name} />
              <h3>{selected.name}</h3>
              <h4>{selected.title}</h4>
            </div>
            <div className="modal-right">
              <p>{selected.full}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leadership;
