import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sliderData = {
  MEN: [
    "/men_img/men1.avif",
    "/men_img/men2.avif",
    "/men_img/men3.avif",
    "/men_img/men4.avif",
    "/men_img/men5.avif",
    "/men_img/men6.avif",
  ],
  WOMEN: [
    "/women_img/women1.avif",
    "/women_img/women2.avif",
    "/women_img/women3.avif",
    "/women_img/women4.avif",
    "/women_img/women5.avif",
    "/women_img/women6.avif",
  ],
  SNEAKERS: [
    "/sneakers_img/sneakers1.avif",
    "/sneakers_img/sneakers2.avif",
    "/sneakers_img/sneakers3.avif",
    "/sneakers_img/sneakers4.avif",
  ],
};

function MainSlider({ activeCategory }) {
  const images = sliderData[activeCategory] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setCurrentIndex(0), 0);
    return () => clearTimeout(id);
  }, [activeCategory]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
      {/* Slide Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${activeCategory}-${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white text-lg sm:text-xl md:text-2xl p-2 sm:p-3 rounded-full hover:bg-white hover:text-black transition shadow-sm"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-white text-lg sm:text-xl md:text-2xl p-2 sm:p-3 rounded-full hover:bg-white hover:text-black transition shadow-sm"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === idx ? "bg-red-500 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainSlider;
