import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules'
const Banner = () =>{

 return (
    <div className="w-full lg:h-[400px] object-fill">
        <Swiper
                className="h-full"
                modules= {[Autoplay]}
                loop={true}
                autoplay={{
                    enabled: true, 
                }}
                slidesPerView={1}
    >
      <SwiperSlide><img className="h-full w-full p-2" src="./images/Banner.png" /></SwiperSlide>
      <SwiperSlide><img className="h-full w-full p-2" src="./images/Banner2.jpg" /></SwiperSlide>
      {/* <SwiperSlide><img className="h-full w-full p-2" src="./images/Banner1.jpg" /></SwiperSlide> */}
      
      
    </Swiper>
    </div>
 )
}
export default Banner;