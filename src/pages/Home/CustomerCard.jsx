import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import pic from "../../assets/customer-top.png";

const CustomerCard = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);

  return (
    <div className="my-15">
      <div className="flex flex-col justify-center gap-5 items-center text-center">
        <img src={pic} alt="" />
        <h2 className="font-bold text-4xl text-secondary">
          What our customers are sayings
        </h2>
        <p className="font-medium text-base-content">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mt-10"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="flex items-center justify-center  bg-gray-50 p-4">
              <div className="max-w-[550px] w-full bg-white p-8 md:p-10 rounded-xl">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"
                      fill="#CDE3E6"
                    />
                  </svg>
                </div>
                <p className="text-[#555555] text-[17px] leading-[1.6] font-normal mb-8">
                  {review.review}
                </p>
                <div className="w-full border-t border-dashed border-[#155B62] mb-8 opacity-80"></div>
                <div className="flex items-center gap-5">
                  <div className="w-[72px] h-[72px] bg-[#034752] rounded-full shrink-0"></div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#034752] font-bold text-[22px] leading-tight">
                      {review.userName}
                    </h3>
                    <p className="text-[#666666] text-[17px] font-light mt-1">
                      {review.user_email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerCard;
