import React,{useEffect} from 'react';
import './LifeAtGIETU.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const lifeItems = [
  {
    title: "Cultural Events",
    image: "https://www.giet.edu/wp-content/uploads/2020/06/techno-cultural-fest.jpg",
    description: "Annual fests and cultural programs that showcase student talent.",
  },
 
  {	
    title: "Campus Life",
    image: "https://www.giet.edu/wp-content/uploads/2021/03/temple-main-banner.jpg",
    description: "Green and spacious campus with modern amenities and Wi-Fi.",
  },
  {
    title: "Sports",
    image: "https://www.giet.edu/wp-content/uploads/2019/08/extra-curricular-opt.jpg",
    description: "Cricket, football, volleyball, and athletic tournaments all year round.",
  },
  {
    title: "Tech Fests",
    image: "https://www.giet.edu/wp-content/uploads/2020/06/techno-cultural-fest.jpg",
    description: "Exciting competitions and expos organized by student clubs.",
  },
  {
    title: "Hostel Life",
        image: "https://www.giet.edu/wp-content/uploads/2019/08/accomodation-building.jpg",

    description: "Comfortable and secure hostel facilities with mess and recreation.",
  },
  {
    title: "Clubs & Societies",
    image: "https://www.giet.edu/wp-content/uploads/2020/06/wifi-facility.jpg",
    description: "From coding to dramatics—there’s a club for everyone.",
  }, 
];

const LifeAtGIETU = () => {
  useEffect(() => {
             document.title = 'Life At GIETU - GIET University | Odisha | Gunupur'
      }, []);
  return (
    <div className="life-container">
      <h2 className="aic-title">
         LIFE AT GIET UNIVERSITY
        <span className="underline"></span>
        </h2>
      <p className="description">
        The GIET University has a thriving and vibrant population of students from across the Globe. The university has created a unique community atmosphere by breaking down the barriers that would uncustomarily reinforce the use of excellent lifestyle & highly quality education in order to round out the study experiences for all students. If you study at GIET University be guaranteed to receive world education, principles and memories that would last a lifetime. With the wealth of GIET's extraordinary opportunities to develop personality mix with diverse cultures and learn from the leaders at GIET University, there are few special students life after graduation goes out with rich knowledge and self-belief to become whatever they want to and purchase whatever dreams they come to GIET with.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {lifeItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
    </div>
  );
};

export default LifeAtGIETU;
