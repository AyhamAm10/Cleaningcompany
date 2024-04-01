import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Cardslider from './Cardslider';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Cardslider /></SwiperSlide>
      <SwiperSlide><Cardslider /></SwiperSlide>
      <SwiperSlide><Cardslider /></SwiperSlide>
      <SwiperSlide><Cardslider /></SwiperSlide>
      
    </Swiper>
  )
}

export default Slider
