import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style/swiper.css";

export default function MySwiper() {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideone general-swipe">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto"></div>
                <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto p-5 h-100">
                  <div className="p-5 str">
                    <div>
                      <h3></h3>
                    </div>
                    <div>
                      <h3>Enjoy This Offer Today</h3>
                    </div>
                    <div>
                      <h1>New Clothes Collection Sale 20%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slidetwo general-swipe">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto"></div>
                <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto p-5 h-100">
                  <div className="p-5 str">
                    <div>
                      <h3></h3>
                    </div>
                    <div>
                      <h3>Enjoy This Offer Today</h3>
                    </div>
                    <div>
                      <h1>New Accessories Collection Sale 40%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
