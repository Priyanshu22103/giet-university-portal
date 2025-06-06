import React, { useEffect } from 'react';
import './NewsAndActivities.css';

const activities = [
  {
    title: 'Virtual Placement Drive',
    date: '02 Feb 2021',
    image: '/images/placement1.jpeg',
  },
  {
    title: 'Issues and challenges in the revival...',
    date: '28 Nov 2020',
    image: '/images/placement2.jpeg',
  },
  {
    title: 'Job Opportunities and Future Required Skills',
    date: '07 Nov 2020',
    image: '/images/placement3.jpeg',
  },
  {
    title: 'Webinar on "Bridging Gap Between Industry..."',
    date: '29 Aug 2020',
    image: '/images/placement4.jpg',
  },
  {
    title: 'Webinar on "Relevance of thinking ability..."',
    date: '16 Jun 2020',
    image: '/images/placement5.jpeg',
  },
  {
    title: 'Webinar on "Strategic guidance for the..."',
    date: '13 Jun 2020',
    image: '/images/placement6.png',
  },
  {
    title: 'Handling Challenging Times',
    date: '06 Jun 2020',
    image: '/images/placement7.jpg',
  },
  {
    title: 'Entry Level Market Trend & Best...',
    date: '25 May 2020',
    image: '/images/placement8.jpg',
  },
];

const NewsAndActivities = () => {
  useEffect(() => {
    document.title = 'News And Activities - GIET University | Odisha | Gunupur';
  }, []);
  return (
    <section className="activities-hero">
      <div className="activities-overlay" />
      <div className="activities-container">
        <h1 className="activities-title">
          <span className="activities-gradient">Industry Engagement Activities</span>
        </h1>
        <p className="activities-subtitle">
          Stay updated with our latest placement drives, webinars, and industry engagement events. Explore how we connect students with the best opportunities and skills for the future.
        </p>
        <div className="grid-container">
          {activities.map((activity, index) => (
            <div className="card" key={index} style={{width:'290px'}}>
              <div className="card-image-wrapper">
                <img src={activity.image} alt={activity.title} className="card-image" />
                <div className="date-tag">{activity.date}</div>
              </div>
              <div className="card-title">{activity.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndActivities;