import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "./sliderData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeSlider = () => {
  const data = sliderData;

  return (
    <div className="pt-56">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="lg:w-9/12 w-11/12 mx-auto py-5"
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="grid md:grid-cols-2 grid-cols-1 items-center"
            >
              <div>
                <h1 className="xl:text-6xl lg:text-5xl py-5 text-5xl font-bold">
                  {item.title}
                </h1>
                <h6 className="py-3 text-2xl font-bold">
                  Trusted by <span className="text-pink-500">12000+</span> happy
                  customers
                </h6>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
