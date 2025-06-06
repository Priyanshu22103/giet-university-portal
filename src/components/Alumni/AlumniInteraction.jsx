import React from 'react';
import './AlumniInteraction.css';
import AboutNavbar from "./Navbar.jsx";
import Footer from "../Home/Footer.jsx";
import TopNavbar from "../Home/Navbar.jsx";
import { Link } from 'react-router-dom';

const videoData = [
  {
    slug: 'pramod-sethi',
    image: '/images/test1.jpeg',
    date: '12/04/2025 - 13/04/2025',
    name: 'Mr. Pramod Sethi, Mr. Animesh...'
  },
  {
    slug: 'susant-kamba',
    image: '/images/test2.jpg',
    date: '14/03/2025 - 14/03/2025',
    name: 'Mr. Susant Kumar Kamba'
  },
  {
    slug: 'sudhir-mohapatra',
    image: '/images/test3.jpeg',
    date: '13/03/2025 - 13/03/2025',
    name: 'Mr. Sudhir Kumar Mohapatra'
  },
  {
    slug: 'neelkamal-rout',
    image: '/images/test4.jpeg',
    date: '21/02/2025 - 21/02/2025',
    name: 'Mr. Neelkamal Rout'
  },
  {
    slug: 'subhashree-satapathy',
    image: '/images/test5.jpeg',
    date: '08/02/2025 - 08/02/2025',
    name: 'Ms. Subhashree Satapathy'
  },
  {
    slug: 'debadarshana-parida',
    image: '/images/test6.jpg',
    date: '20/02/2025 - 21/02/2025',
    name: 'Mr. Debadarshana Parida'
  },
  {
    slug: 'subas-sadangi',
    image: '/images/test7.jpg',
    date: '31/01/2025 - 01/02/2025',
    name: 'Mr. Subas Ch Sadangi (MBA, B...)'
  },
  {
    slug: 'debashis-kamila',
    image: '/images/test8.jpeg',
    date: '30/01/2025 - 30/01/2025',
    name: 'Mr. Debashis Kamila'
  },
  {
    slug: 'sovan-kumar',
    image: '/images/test9.jpeg',
    date: '15/01/2025 - 15/01/2025',
    name: 'Mr. M V Sovan Kumar'
  }
];

const AlumniInteraction = () => {
  return (
    <>
    <div>
        <TopNavbar />
      </div>
      <div>
        <AboutNavbar />
      </div>
    <div className="video-gallery-container">
      <h2 className="aic-title">
         ALUMNI INTERACTION
        <span className="underline"></span>
        </h2>

      <div className="video-gallery">
        {videoData.map((item) => (
          <Link to={`/alumniinteraction/${item.slug}`} key={item.slug} className="video-carder">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
              <div className="date-bar">{item.date}</div>
            </div>
            <div className="name-bar">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default AlumniInteraction;
