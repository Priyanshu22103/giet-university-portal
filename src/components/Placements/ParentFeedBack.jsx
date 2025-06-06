import React,{useEffect} from 'react';
import './ParentFeedBack.css';
const feedbackVideos = [
  {
    thumbnail: '/images/im1.jpg',
    videoUrl: 'https://www.youtube.com/embed/quBoKOHT2RA',
  },
  {
    thumbnail: '/images/im2.jpg',
    videoUrl: 'https://www.youtube.com/embed/bDerbqM68s8',
  },
  {
    thumbnail: '/images/im3.jpg',
    videoUrl: 'https://www.youtube.com/embed/jJ1FE9DHtz0',
  },
  {
    thumbnail: '/images/im4.jpg',
    videoUrl: 'https://www.youtube.com/embed/Y_knttvF9Pk',
  },
  {
    thumbnail: '/images/im5.jpg',
    videoUrl: 'https://www.youtube.com/embed/l_uBQAYH7rQ',
  },
  {
    thumbnail: '/images/im6.jpg',
    videoUrl: 'https://www.youtube.com/embed/PVsfrDuzFn8',
  },
  {
    thumbnail: '/images/im7.jpg',
    videoUrl: 'https://www.youtube.com/embed/QOdKw7MH_g0',
  },
  {
    thumbnail: '/images/im8.jpg',
    videoUrl: 'https://www.youtube.com/embed/QNU_YSo_n6w',
  },
  {
    thumbnail: '/images/im9.jpg',
    videoUrl: 'https://www.youtube.com/embed/4nURsqAOG44',
  },
  {
    thumbnail: '/images/im10.jpg',
    videoUrl: 'https://www.youtube.com/embed/CnzZHFbBIB8',
  },
];

const ParentFeedback = () => {
  useEffect(() => {
        document.title='Parent Feedback - GIET University | Odisha | Gunupur'
      },[])
  return (
    <section className="feedback-section">
      <div className="feedback-title">Parents Feedback</div>
      <div className="feedback-grid">
        {feedbackVideos.map((video, index) => (
          <a
            key={index}
            className="feedback-card"
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.thumbnail}
              alt="Parent Feedback"
              className="feedback-thumbnail"
            />
            <span className="play-icon" style={{marginLeft: '176px',marginTop:'177px'}}>
              <svg viewBox="0 0 64 64" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="none" />
                <polygon points="26,20 48,32 26,44" fill="#fff" />
              </svg>
            </span>
            <div className="overlay">
              <div className="feedback-text">PARENTS FEEDBACK</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ParentFeedback;
