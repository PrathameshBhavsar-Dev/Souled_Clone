import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import shirtImg from "../../assets/Shirts.png";
import tshirtImg from "../../assets/T-Shirts.png";
import winterImg from "../../assets/Winter-edit.png";
import joggersImg from "../../assets/Joggers.png";
import jeansImg from "../../assets/Jeans.png";
import polosImg from "../../assets/Polos.png";
import pantImg from "../../assets/Pants.png";
import sneakersImg from "../../assets/Sneakers.png";
import backpacksImg from "../../assets/Backpacks.png";
import accessoriesImg from "../../assets/All_accessories.png";
import socks from "../../assets/Sockes-laces.png";
import shorts from "../../assets/Shorts-boxers.png";

const Categoriesdata = [
  { name: "T-shirt", img: tshirtImg },
  { name: "Shirts", img: shirtImg },
  { name: "Winter Wear", img: winterImg },
  { name: "Joggers", img: joggersImg },
  { name: "Jeans", img: jeansImg },
  { name: "Polos", img: polosImg },
  { name: "Pants", img: pantImg },
  { name: "Sneakers", img: sneakersImg },
  { name: "Backpacks", img: backpacksImg },
  { name: "Accessories", img: accessoriesImg },
  { name: "Socks", img: socks },
  { name: "Shorts & Boxers", img: shorts },
];

function Categories() {
  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < Categoriesdata.length; i += chunkSize) {
    slides.push(Categoriesdata.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full py-10">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="text-[24px] font-bold tracking-[0.05em] text-[#1f2a44] text-center uppercase mb-6 mt-2">
          Categories
        </h2>

        {/* DESKTOP GRID (unchanged) */}
        <div className="hidden md:flex flex-wrap -mx-2 -mt-2">
          {Categoriesdata.map((item, index) => (
            <div key={index} className="w-1/4 px-2 mb-6">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full object-contain transform transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER (2x2 with dots) */}
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
                        className="w-full object-contain transform transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
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
}

export default Categories;
