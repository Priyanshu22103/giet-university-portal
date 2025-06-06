import React,{useEffect} from 'react';
import './CSR.css';

const images = [
  '/images/csr3.jpg',
  '/images/csr2.jpg',
  '/images/csr4.jpg',
  '/images/csr1.jpg',
];

const CSR = () => {
  useEffect(() => {
          document.title='CSR - GIET University | Odisha | Gunupur'
    },[])
  return (
    <div className="csr-container">
      <h2 className="aic-title">
         CORPORATE SOCIAL RESPONSIBILITY
        <span className="underline"></span>
        </h2>
      <div className="csr-content">
        <div className="csr-images">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`CSR ${idx + 1}`} className="csr-image" />
          ))}
        </div>

        <div className="csr-text">
          <p>
            GIET University, as an educational institution, plays an essential role in developing
            society and contributing to the welfare of the citizens. The University has an ethical,
            social responsibility, considering its association with the students, other affiliated
            institutions, local and central government, employees, different companies, and the local
            community.
          </p>
          <p>
            GIETU, in its regular functioning, is also an active corporate entity and has specified
            strategic plans and practices that aim for the betterment of society and extending corporate
            social responsibilities for the masses.
          </p>
          <p>
            GIETU has a long and continued history of working in the service of the public good. Its
            exemplary role in uplifting the nearby underdeveloped areas is an example in itself. The
            top priority of GIETU has always been civic engagement and social empowerment and educates
            students, helps discover new knowledge, and develops students' character and intention.
          </p>
          <p>
            The University has taken numerous initiatives for the cause of healthy development to uplift
            the community life.
          </p>
          <p>
            The variety of roles and responsibilities of the students of GIETU is extended to a range of
            public services sectors. For this reason, GIETU earned many laurels and several awards,
            applause, and appreciation by Honorable CM of Odisha Shri Naveen Patnaik himself.
          </p>
        </div>
        <div className="outreach-divider"></div>
      </div>
      <div className="blood-donation-container">
      <div className="blood-left">
        <h1>BLOOD DONATION CAMP</h1>
        <p>
          Blood Donation is a common practice at GIET University. With an intention of "Giving back to the society",
          GIET University, Gunupur organizes blood donation and awareness programs throughout the year.
          Every month a good number of blood units are collected and donated to the hospitals for their ready use.
        </p>

        <h3>Awareness Program</h3>
        <p>
          The students, staff & general public are made aware of the beneficial aspects of blood donation &
          the precautionary measures while donating blood and encouraged to be a volunteer blood donor to bring
          a life back to power.
        </p>

        <p>
          The university has received numerous awards and continues to receive accolades for its CSR activities.
          Applauding the commitment & dedication, Hon'ble Chief Minister of Odisha Shri Naveen Patnaik
          awarded GIETU for its lifesaving mission.
        </p>   
      </div>

      <div className="blood-right">
        <img src="/images/Blood.jpg" alt="Mega Camp" className="mega-image" />
        <div className="mega-title">Mega Blood Donation Camp</div>
      </div>
    </div>

    <div className="outreach-divider"></div>
           <div className="community-container">
      <div className="community-images">
        <img src="/images/community1.jpg" alt="Community Event 1" />
        <img src="/images/community2.jpg" alt="Community Event 2" />
        <img src="/images/community3.jpg" alt="Community Event 3" />
        <img src="/images/community4.jpg" alt="Community Event 4" />
        <img src="/images/community5.jpg" alt="Community Event 5" />
        <img src="/images/community.jpg" alt="Community Event 6" />
      </div>
      

      <div className="community-text">
        <h1>CREATION OF COMMUNITY HEALTH</h1>
        <p>
          <strong>GIET University</strong> conducts different awareness programs throughout the year
          on social and environmental issues like cleanliness, literacy, malnutrition and save forest.
          The aim is to improve quality of life of the villagers in the surrounding areas and to
          sensitize the society towards building a healthier and happier nation.
        </p>
        <p className="quote">Let’s work together to build a better future…"</p>
      </div>
      <div className="outreach-divider"></div>
    </div>

    <div className="vastradaan-container">
      <div className="vastradaan-text">
        <h2>VASTRADAAN</h2>
        <hr className="vastradaan-line" />
        <p>
          To touch someone's life, to feel the joy in giving, GIET University runs a <strong>"Vastradaan"</strong>
          initiative and distributes clothes to the poor & needy villagers every year during Daan Utsav week.
        </p>
      </div>

      
      <div className="vastradaan-images">
        <img src="/images/bastra4.jpg" alt="Vastradaan 4" />
        <img src="/images/bastra2.jpg" alt="Vastradaan 2" />
        <img src="/images/bastra1.jpg" alt="Vastradaan 1" />
        <img src="/images/bastra3.jpg" alt="Vastradaan 3" />
        
      </div>
      <div className="outreach-divider"></div>
    </div>
  

     <div className="outreach-container">
        <h2 className="outreach-heading">GIETU REACHES OUT TO THE COMMUNITY</h2>
        <div className="outreach-content">
          <div className="outreach-images">
            <img src="./images/img1.jpg" alt="Outreach 1" />
            <img src="./images/img2.jpg" alt="Outreach 2" />
            <img src="./images/img3.jpg" alt="Outreach 3" />
            <img src="./images/img4.jpg" alt="Outreach 4" />
            <img src="./images/img5.jpg" alt="Outreach 5" />
            <img src="./images/img6.jpg" alt="Outreach 6" />
          </div>
          <div className="outreach-text">
            <p>
              In the tough times of the COVID-19 pandemic, GIETU reaches out to the community to help fight the virus, stay safe and healthy. The University designed, donated and installed auto hand sanitizers, full-body sanitizers, and dry vapor steamers in public places.
            </p>
            <p>
              The University has advanced research tools and technologies to conceptualize and develop the sanitization and steamer devices. GIETU is doing its best by helping the masses to prevent the spread of the deadly virus and protecting each individual in the process.
            </p>
            <p>
              We at GIETU would dedicatedly lead the community with our technological developments to fight the pandemic!
            </p>
            <h3>Stay Safe & Healthy</h3>
          </div>
        </div>
       
      </div>
          <div className="outreach-divider"></div>
    <div className="divyangjan-section">
         
      <h2 className="last-title">RESOURCES FOR DIVYANGJAN</h2>
      <div className="divyangjan-container">
        <div className="divyangjan-text-box">
          <h3>SOCIAL INCLUSION</h3>
          <hr />
          <p>
            As a leading university and one of the country’s higher education institutions, GIETU has taken proactive measures and responsibilities to tackle the social inequalities and prejudices in the campus and beyond. We strive to tackle the barriers that affect thousands of people—their lives and choices on a local, national as well as a global scale.
            GIET University has a social inclusive environment with people from different communities from around the world coming together and collaborating on an academic level. We aim to foster the understanding of social inclusion through methodical and inclusive solutions.
            GIET University stands against discrimination and believes each individual is equal. The University believes in empowering divyangjan and treating them as equal individuals/regular students and offer equal opportunities to engage them in the mainstream.
          </p>
        </div>

        <div className="divyangjan-images">
            <div className="image-card">
            <img src="/images/lift.jpg" alt="Provision for Lift" />
            <div className="caption">Provision for Lift</div>
          </div>
          <div className="image-card">
            <img src="/images/rest-room2.jpg" alt="Rest Rooms" />
            <div className="caption">Rest Rooms</div>
          </div>
          <div className="image-card">
            <img src="/images/wheel-chair.jpg" alt="Wheel chair facility" />
            <div className="caption">Wheel chair facility</div>
          </div>
          <div className="image-card">
            <img src="/images/ramp-rails2.jpg" alt="Ramp/Rails" />
            <div className="caption">Ramp/Rails</div>
          </div>
        </div>
      </div>
    </div>
 
    </div>
    
  );
};

export default CSR;
