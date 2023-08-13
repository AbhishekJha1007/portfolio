import React from 'react';
import "./testimonials.css";
import Image1 from "../../Assets/avatar1.png";
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: Image1,
    title: "Shrish Ankit",
    subtitle: "Senior Software Developer",
    comment: "Had a great time working together. Good luck! 👍",
  },
  // {
  //   id: 2,
  //   image: Image1,
  //   title: "Edyoda",
  //   subtitle: "EdTech",
  //   comment: "Appreciate the work! Good luck 👍",
  // },  
]
const Testimonial = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clents & Reviews</h2>

      <Swiper className="testimonials__container grid"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial