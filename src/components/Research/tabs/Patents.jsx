import { useEffect } from "react";
import Table from "../table/Table";
const Patents = () => {
    const colData = [
  'Sl.No', 'Patent Application No.',
  'Status of Patent', 'Inventor/s Name', 'Title of the Patent',
  'Patent Filed Date (DD/MM/YYYY)', 'Patent Published Date (DD/MM/YYYY)'
];

const projectData = [
  {
    'Sl.No': 1,
    'Patent Application No.': '202421048012',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Raghvendra Sahu\n2. Prakash Ranjan Sahoo\n3. V. Madhava Rao',
    'Title of the Patent': 'WALL-MOUNTED INCENSE STICK STAND WITH DETACHABLE ASHTRAY',
    'Patent Filed Date (DD/MM/YYYY)': '22-06-2024',
    'Patent Published Date (DD/MM/YYYY)': '19-07-2024'
  },
  {
    'Sl.No': 2,
    'Patent Application No.': '202431049820',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Dr. Pritikrishna Majhi\n2. Er. Suraj Kumar Samal\n3. Dr. Sudipta Maity\n4. Dr. Subhendu Chakroborty',
    'Title of the Patent': 'A METHOD FOR PRODUCING A FOOD SUPPLEMENT FROM MICROALGAE FOR ELDERLY AND ICU PATIENTS',
    'Patent Filed Date (DD/MM/YYYY)': '28-06-2024',
    'Patent Published Date (DD/MM/YYYY)': '05-07-2024'
  },
  {
    'Sl.No': 3,
    'Patent Application No.': '202441050583',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Dr. A.V.S. Pavan Kumar\n2. Dr. Sachinkumar\n3. G. Ramesh Reddy',
    'Title of the Patent': 'IMAGE FORGERY DETECTION BASED ON FUSION OF LIGHTWEIGHT DEEP LEARNING MODELS',
    'Patent Filed Date (DD/MM/YYYY)': '02-07-2024',
    'Patent Published Date (DD/MM/YYYY)': '05-07-2024'
  },
  {
    'Sl.No': 4,
    'Patent Application No.': '202441050591',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Sandiri Swetha\n2. T Appa Rao\n3. Dr. Sachinkumar\n4. Dr. T. Anuradha\n5. Mr. Harshawardhan P. Ahire\n6. Dr. K. Rasadurai\n7. S M K Sukumar Reddy\n8. Kesani Niranjan Kumar\n9. Dr. Sanjay Kumar Suman',
    'Title of the Patent': 'IMPLEMENTATION OF MULTI-BIT ERROR DETECTION AND CORRECTION USING LOW-DENSITY PARITY-CHECK CODES',
    'Patent Filed Date (DD/MM/YYYY)': '02-07-2024',
    'Patent Published Date (DD/MM/YYYY)': '05-07-2024'
  },
  {
    'Sl.No': 5,
    'Patent Application No.': '202441050596',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Sibo Prasad Patro\n2. Thatikonda Somashekar\n3. Ravi Regulagadda\n4. Dr. Neethu Asokan\n5. Ranjan Kumar Pradhan\n6. R. Gayathri\n7. Dr. Dibya Jyoti Bora\n8. Dr. G Venkateswara Rao\n9. K. Ganapathi Babu',
    'Title of the Patent': 'DEVELOPMENT OF MALARIA PARASITE DETECTION SYSTEM USING DEEP LEARNING TECHNIQUES',
    'Patent Filed Date (DD/MM/YYYY)': '02-07-2024',
    'Patent Published Date (DD/MM/YYYY)': '05-07-2024'
  },
  {
    'Sl.No': 6,
    'Patent Application No.': '202431042731',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Priyadarsan Parida\n2. Manoj Kumar Panda\n3. Bibhu Prasad\n4. Ranjita Rout\n5. Bandana Mallick\n6. Ajit Kumar Patro\n7. Priyabrata Dash\n8. Vikash Kumar Mahanta\n9. Biswajit Mishra\n10. Dharmendra Kumar Nayak',
    'Title of the Patent': 'AN IoT-BASED FALL DETECTION SYSTEM WITHIN A WASHROOM',
    'Patent Filed Date (DD/MM/YYYY)': '01-06-2024',
    'Patent Published Date (DD/MM/YYYY)': '21-06-2024'
  },
  {
    'Sl.No': 7,
    'Patent Application No.': '202441044779',
    'Status of Patent': 'Published',
    'Inventor/s Name': '1. Dr. A. Pramila\n2. Dr. Bhramara Bar Biswal\n3. Mr. Bhavani Sankar Panda\n4. Mr. Kedarnath Panda\n5. R. Srikanth\n6. P. Vijaya Bhaskara Reddy\n7. Dr. Ravindra Sudam Bhagat\n8. Dr. Kannan K',
    'Title of the Patent': 'WHEAT PRODUCTION USING ARTIFICIAL INTELLIGENCE MODELS AND ITS COMPARATIVE ANALYSIS FOR BETTER RESULTS',
    'Patent Filed Date (DD/MM/YYYY)': '10-06-2024',
    'Patent Published Date (DD/MM/YYYY)': '21-06-2024'
  }
];
useEffect(() => {
    document.title = 'Patents-GIET University | Odisha | Gunupur';    
},[])

  return (
    <div className="p-4" style={{ marginLeft: "50px", marginRight: "50px" }}>
      <h1 className="text-xl font-bold mb-4" style={{ marginLeft: "33px" }}>
        Patents
      </h1>
      <div className="divider" style={{ marginLeft: "760px" }}>
        <div className="blue-bar"></div>
        <div className="orange-bar"></div>
      </div>
      <div
        style={{ lineHeight: "30px", fontSize: "18px", textAlign: "justify" }}
      >
        Research and innovation have been the hallmark of GIET University. This emphasis on original research and thinking has led to a number of inventions originating from our university. Our researchers have put in years of hard work and dedication to come up with such ground-breaking discoveries and innovation. So, the need arises to safeguard our researcher’s invention from duplication. And thus, arises the necessity for patents and other legal safeguards.

A patent is a protection granted by a national government for an invention. This protection excludes others from making, utilising, or selling an invention. Most of the researchers at GIET University seek patent protection to recover research and development cost. The ingenuity and genius of our researchers have led to them being awarded a patent for several inventions and discoveries. Some of the significant ones are mentioned below:
          </div>
          <br/>
      <Table data={projectData} columnData={colData} />
    </div>
  );
};

export default Patents;
