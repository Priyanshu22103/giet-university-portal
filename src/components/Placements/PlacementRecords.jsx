import React,{useEffect} from 'react';
import './PlacementRecords.css';
const records = [
  {
    year: '2023 – 24',
    link: '/pdfs/placement-2023-24.pdf',
  },
  {
    year: '2022 – 23',
    link: '/pdfs/placement-2022-23.pdf',
  },
  {
    year: '2021 – 22',
    link: '/pdfs/placement-2021-22.pdf',
  },
  {
    year: '2020 – 21',
    link: '/pdfs/placement-2020-21.pdf',
  },
];

const PlacementRecords = () => {
  useEffect(() => {
      document.title='Placement Records - GIET University | Odisha | Gunupur'
    },[])
  return (
    <div className="placement-wrapper">
      <div className="placement-title">Placement Records</div>
      <div className="placement-list">
        {records.map((record, index) => (
          <a
            key={index}
            className="record-container"
            href={record.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="record-content">Placement Records – {record.year}</span>
            <span className="record-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                alt="PDF"
                className="pdf-icon"
              />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlacementRecords;
