import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../../assets/new-collection1.png";
import slide2 from "../../../assets/new-collection2.png";
import slide3 from "../../../assets/new-collection3.png";

const NewCollection = () => {
  return (
    <section className="w-full pt-10 pb-5">
      <h2 className="mt-5 mb-8 text-[28px] leading-[34px] font-bold tracking-[0.08em] text-[#282C3F] uppercase text-center">
        NEW IN: COLLECTIONS
      </h2>

      <div className="max-w-[1700px] mx-auto px-6">
        <div className="w-full h-[520px] relative">

          <Swiper
            modules={[Navigation]}
            navigation
            loop
            style={{
               "--swiper-navigation-color": "#ffffff",
    "--swiper-navigation-size": "30px",
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src={slide1} className="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide2} className="w-full h-full object-cover" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide3} className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>

          {/* Arrow shadow overlay */}
          <style>
            {`
               .swiper-button-next,
    .swiper-button-prev {
      filter: drop-shadow(0 0 10px rgba(0,0,0,0.9))
              drop-shadow(0 0 4px rgba(0,0,0,0.8));
    }
            `}
          </style>

        </div>
      </div>
    </section>
  );
};

export default NewCollection;
