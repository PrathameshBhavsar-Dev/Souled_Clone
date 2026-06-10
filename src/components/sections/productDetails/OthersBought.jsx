import { useRef } from "react";
import MenData from "../../../assets/Data/men/menData/MenData";
import WomenData from "../../../assets/Data/women/womenData/WomenData";
import SneakerData from "../../../assets/Data/sneakers/sneakerData/SneakerData";


export default function ImageScroller({ category = "men" }) {
  const scrollRef = useRef(null);

  let data = [];
  if (category === "men") data = MenData;
  else if (category === "women") data = WomenData;
  else if (category === "sneakers") data = SneakerData;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 md:px-8 py-6 md:py-10">
      <h2 className="text-lg md:text-1xl font-bold mb-4 md:mb-6">
        Other Also Bought
      </h2>
      <hr className="text-black-500" />

      <div className="relative">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 z-10 
          text-black opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            className="md:w-[42px] md:h-[42px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Image Scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {data.map((img, index) => (
            <div
              key={index}
              className="w-1/4 flex-shrink-0 text-center px-2"
            >
              <div className="mx-auto relative w-[300px] h-[420px] group">
                <img
                  src={img.normal}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={img.hover}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>

              <div className="mt-3 text-left px-5">
                <p className="text-xs md:text-sm font-semibold text-gray-900">
                  {img.title}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{img.subtitle}</p>
                <div className="flex items-center gap-2 mt-1 text-xs md:text-sm">
                  <span className="font-semibold text-gray-900">₹ {img.price}</span>
                  {img.oldPrice && <span className="text-gray-400 line-through">₹ {img.oldPrice}</span>}
                  {img.off && <span className="font-semibold text-orange-600">{img.off}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 p-2 md:p-4 z-10 
          text-black opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            className="md:w-[42px] md:h-[42px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
