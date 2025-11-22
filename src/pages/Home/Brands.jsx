import React from "react";
import amazon from "../../assets/brands/amazon.png";
import amazon1 from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonStar from "../../assets/brands/moonstar.png";
import crandStad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import startPeople from "../../assets/brands/start_people.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const brandLogos = [
  amazon,
  amazon1,
  casio,
  moonStar,
  crandStad,
  star,
  startPeople,
];

const Brands = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-secondary font-bold text-3xl pb-10">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        // loop={true}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 },
          640: { slidesPerView: 3, spaceBetween: 0 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brandLogos.map((logos, i) => (
          <SwiperSlide key={i}>
            <img src={logos} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
