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
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 col-12">
                <div>
                  <h3>Smart Products</h3>
                  <h1>Winter Offer 2024 Collection</h1>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="slider-single-img">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-md-6 col-12">
                <div>
                  <h3>Smart Offers</h3>
                  <h1>Get Your Best Offer Now</h1>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="slider-single-img">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// navigation={true}
// modules={[Navigation]}
// className="mySwiper"
// onSlideChange={() => console.log("slide change")}
// onSwiper={(swiper) => console.log(swiper)}

// <Swiper
//   spaceBetween={50}
//   slidesPerView={3}
//   onSlideChange={() => console.log("slide change")}
//   onSwiper={(swiper) => console.log(swiper)}
// >
//   <SwiperSlide>Slide 1</SwiperSlide>
//   <SwiperSlide>Slide 2</SwiperSlide>
//   <SwiperSlide>Slide 3</SwiperSlide>
//   <SwiperSlide>Slide 4</SwiperSlide>
// </Swiper>;

//https://reactjsexample.com/12-best-react-ecommerce-templates/#:~:text=12%20Best%20React%20Ecommerce%20Templates%201%201.Molla%20Molla,7%207.Porto%20...%208%208.Stroyka%20...%20More%20items
//https://preview.themeforest.net/item/flone-react-js-ecommerce-template/full_screen_preview/25554712?_ga=2.214774613.377013752.1621497711-933693064.1600738304&irgwc=1&clickid=y-0RI1wVfxyNULlVgCUkU0pcUkDQ32VE-UKFVg0&iradid=275988&irpid=2305834&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2305834&utm_medium=affiliate&utm_source=impact_radius
//https://preview.themeforest.net/item/flone-react-js-ecommerce-template/full_screen_preview/25554712?_ga=2.214774613.377013752.1621497711-933693064.1600738304&irgwc=1&clickid=y-0RI1wVfxyNULlVgCUkU0pcUkDQ32VE-UKFVg0&iradid=275988&irpid=2305834&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2305834&utm_medium=affiliate&utm_source=impact_radius
