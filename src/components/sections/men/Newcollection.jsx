import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../../assets/new-collection1.png";
import slide2 from "../../../assets/new-collection2.png";
import slide3 from "../../../assets/new-collection3.png";

const NewCollection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full pt-8 pb-5">
      <h2 className="mt-5 mb-6 text-[20px] sm:text-[24px] md:text-[28px] 
        leading-[28px] sm:leading-[32px] md:leading-[34px] 
        font-bold tracking-[0.08em] text-[#282C3F] uppercase text-center">
        NEW IN: COLLECTIONS
      </h2>

      {/* Slider Container with fixed height */}
      <div className="w-full h-[260px] sm:h-[380px] md:h-[520px] relative bg-white">

        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 
          text-white text-sm sm:text-lg md:text-2xl 
          p-2 sm:p-3 
          bg-transparent 
          filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] 
          z-20"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 
          text-white text-sm sm:text-lg md:text-2xl 
          p-2 sm:p-3 
          bg-transparent 
          filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] 
          z-20"
        >
          <FaChevronRight />
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          loop
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src={slide1}
              className="w-full h-full object-cover object-left"
              alt="Collection 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={slide2}
              className="w-full h-full object-cover object-left"
              alt="Collection 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={slide3}
              className="w-full h-full object-cover object-left"
              alt="Collection 3"
            />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
};

export default NewCollection;
