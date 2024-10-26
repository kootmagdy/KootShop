import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// // import required modules
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style/swiper.css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper imgwidth"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1553984658-d17e19aa281a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i1.sndcdn.com/avatars-000338003146-z13m56-t500x500.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1579101098070-c3f50dcbd312?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/originals/f6/9d/50/f69d50c3b00245a20cfde6f83ad88b84.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://64.media.tumblr.com/8a4d21a7592e1fe1087f7207cf3f50ca/246c43cacbf2da91-e8/s512x512u_c1/f383e1fdc5d0d6d2c45fd9ef19821f40681c20f2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://iv1.lisimg.com/image/22603635/740full-jessy-hartel.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/d1/04/23/d10423d33f9f230557bb5c755492c251.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/R.f2666fef164de84a5ed8d031f28fd9a6?rik=LtKYUqK16DA9wg&riu=http%3a%2f%2fgiladlab.iq.msu.edu%2fwp-content%2fuploads%2f2020%2f02%2fIMG_1724-768x986.jpg&ehk=IApOvZp4zN4CjsFhqs642MbSHFLQUQlSvQXPFhm%2bqgM%3d&risl=&pid=ImgRaw&r=0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1563993297290-609c9406efcd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://plus.unsplash.com/premium_photo-1668485967915-5b5ddd065a78?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// // Import Swiper styles
// import "swiper/css";

// import "./style/swiper.css";

// export default function MySwiper() {
//   return (
//     <div>
//       <Swiper
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         slidesPerView={2}
//         spaceBetween={20}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//           },
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>sad</SwiperSlide>
//         <SwiperSlide>dsa</SwiperSlide>
//         <SwiperSlide>ds23a</SwiperSlide>
//         <SwiperSlide>d1s1a</SwiperSlide>
//         <SwiperSlide>s1a</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
