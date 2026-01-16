import { useRef } from "react";

export default function ImageScroller() {

  const scrollRef = useRef(null);

  const images = [
    {
      normal: "/images/b-img1.avif",
      hover: "/images/b-img11.avif",
      title: "One Piece: Mugiwara",
      subtitle: "Oversized T-Shirts",
      price: 799,
      oldPrice: 999,
      off: "₹200 OFF",
    },
    {
      normal: "/images/b-img2.avif",
      hover: "/images/b-img22.avif",
      title: "TSS original:Kurukshetra",
      subtitle: "Super Oversized T-Shirts",
      price: 1799,

    },
    {
      normal: "/images/b-img3.avif",
      hover: "/images/b-img33.avif",
      title: "Linkin Park:Crawling",
      subtitle: "Oversized T-Shirts",
      price: 999,
    },
    {
      normal: "/images/b-img4.avif",
      hover: "/images/b-img44.avif",
      title: "Popeye:Spinach Power",
      subtitle: "Oversized T-Shirts",
      price: 1049,
    },
    {
      normal: "/images/b-img5.avif",
      hover: "/images/b-img55.avif",
      title: "Nomad:Compass",
      subtitle: "Super Oversized T-Shirts",
      price: 2299,
    },
    {
      normal: "/images/b-img6.avif",
      hover: "/images/b-img66.avif",
      title: "Marvel:Universe",
      subtitle: "Oversized T-Shirts",
      price: 1049,
    },
    {
      normal: "/images/b-img7.avif",
      hover: "/images/b-img77.avif",
      title: "Oversized T-Shirt:Bear Minimum",
      subtitle: "Oversized T-Shirts",
      price: 1199,
    },
    {
      normal: "/images/b-img8.avif",
      hover: "/images/b-img88.avif",
      title: "Looney Tunes:Angry Daffy",
      subtitle: "Oversized T-Shirts",
      price: 999,
    },
    {
      normal: "/images/b-img9.avif",
      hover: "/images/b-img99.avif",
      title: "TSS Originals : Acid Drip",
      subtitle: "Oversized T-Shirts",
      price: 1299,
    },
    {
      normal: "/images/b-img10.avif",
      hover: "/images/b-img101.avif",
      title: "Oversized Polo:Grunge",
      subtitle: "Oversized T-Shirts",
      price: 1199,
    },
    {
      normal: "/images/b-img11.avif",
      hover: "/images/b-img111.avif",
      title: "Disney:No Worries",
      subtitle: "Oversized T-Shirts",
      price: 999,
    },
    {
      normal: "/images/b-img12.avif",
      hover: "/images/b-img121.avif",
      title: "Spider-Man:Neighbourhood Hero",
      subtitle: "Super Oversized T-Shirts",
      price: 1299,
    },
    {
      normal: "/images/b-img13.avif",
      hover: "/images/b-img131.avif",
      title: "Popeye:Bring Em On",
      subtitle: "Oversized T-Shirts",
      price: 949,
    },
    {
      normal: "/images/b-img14.avif",
      hover: "/images/b-img141.avif",
      title: "Harry Potter:Sorted",
      subtitle: "Oversized T-Shirts",
      price: 1099,
    },
    {
      normal: "/images/b-img15.avif",
      hover: "/images/b-img151.avif",
      title: "Freedom :Brahmashra",
      subtitle: "Oversized T-Shirts",
      price: 999,
    },
    {
      normal: "/images/b-img16.avif",
      hover: "/images/b-img161.avif",
      title: "Welcome:Manju Bhai Painting",
      subtitle: "Oversized T-Shirts",
      price: 1049,
    },
    {
      normal: "/images/b-img17.avif",
      hover: "/images/b-img171.avif",
      title: "TSS Original:Fades Blue",
      subtitle: "Oversized T-Shirts",
      price: 1399,
    },
    {
      normal: "/images/b-img18.avif",
      hover: "/images/b-img181.avif",
      title: "Tom & Jerry:Chill Jerry",
      subtitle: "Oversized T-Shirts",
      price: 899,
    },
    {
      normal: "/images/b-img19.avif",
      hover: "/images/b-img191.avif",
      title: "TSS Original:The King",
      subtitle: "Oversized T-Shirts",
      price: 1299,
    },
    {
      normal: "/images/b-img201.avif",
      hover: "/images/b-img20.avif",
      title: "Daredevil:No Fear",
      subtitle: "Oversized T-Shirts",
      price: 1399,
    },
    {
      normal: "/images/b-img24.avif",
      hover: "/images/b-img241.avif",
      title: "Daredevil:No Fear",
      subtitle: "Oversized T-Shirts",
      price: 1399,
    },
    {
      normal: "/images/b-img22a.avif",
      hover: "/images/b-img22a1.avif",
      title: "Popcorn Texture:Caviar",
      subtitle: "Oversized T-Shirts",
      price: 799,
    },
    {
      normal: "/images/b-img23.avif",
      hover: "/images/b-img231.avif",
      title: "TSS Original :Let's Sail",
      subtitle: "Oversized T-Shirts",
      price: 1099,
    },
    {
      normal: "/images/b-img20.avif",
      hover: "/images/b-img201.avif",
      title: "Spider-Man:Midnight",
      subtitle: "Oversized T-Shirts",
      price: 1499,
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full px-4 md:px-8 py-6 md:py-10">

      <h2 className="text-lg md:text-1xl font-bold mb-4 md:mb-6">
        Other Also Bought
      </h2>
      <hr className="text-black-500 "></hr>

      <div className="relative">

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

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >


          {images.map((img, index) => (
            <div
              key={index}
              className="
    sm:w-1/2
    lg:w-1/4
    flex-shrink-0
    text-center
    px-[5px]
  "
            >

              <div className="mx-[5px]">
                <img
                  src={img.normal}
                  onMouseOver={e => e.currentTarget.src = img.hover}
                  onMouseOut={e => e.currentTarget.src = img.normal}
                  className="
      w-[300px] 
      h-[420px]
      object-cover
     
      cursor-pointer
transition-all duration-700 ease-in-out
    "
                />
              </div>


              <div className="mt-3 text-left px-5">
                <p className="text-xs md:text-sm font-semibold text-gray-900">
                  {img.title}
                </p>

                <p className="text-xs md:text-sm text-gray-500">
                  {img.subtitle}
                </p>

                <div className="flex items-center gap-2 mt-1 text-xs md:text-sm">
                  <span className="font-semibold text-gray-900">
                    ₹ {img.price}
                  </span>

                  {img.oldPrice && (
                    <span className="text-gray-400 line-through">
                      ₹ {img.oldPrice}
                    </span>
                  )}

                  {img.off && (
                    <span className="font-semibold text-orange-600">
                      {img.off}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>

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
