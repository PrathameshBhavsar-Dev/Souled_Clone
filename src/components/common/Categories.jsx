import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Categories = ({ data = [], columns = 4 }) => {
  const chunkSize = 4; // mobile stays 2x2 per slide
  const slides = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    slides.push(data.slice(i, i + chunkSize));
  }

  const colClass = columns === 3 ? "w-1/3" : "w-1/4";

  return (
    <div className="w-full pt-5 pb-10">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="mt-0 mb-8 text-[28px] leading-[34.7px] font-bold text-[#282C3F] uppercase text-center">
          CATEGORIES
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:flex flex-wrap -mx-2 -mt-2">
          {data.map((item, index) => (
            <div key={index} className={`${colClass} px-2 mb-6`}>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full object-contain transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            className="categories-swiper pb-6"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {slides.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 gap-3">
                  {group.map((item, index) => (
                    <div key={index} className="overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full object-contain transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Categories;
