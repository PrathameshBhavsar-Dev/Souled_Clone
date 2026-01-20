import React, { useState, useEffect } from "react";

const Filters = ({ filters }) => {
  const [active, setActive] = useState(filters[0] || "All");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full bg-white ${isSticky ? "sticky top-0 z-40 shadow-sm" : ""}`}>
      <div className="max-w-[1700px] mx-auto px-6 py-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-[14px] font-semibold transition-all
                ${
                  active === item
                    ? "bg-black text-white"
                    : "bg-white text-[#5e5e5f] border border-[#d1d5db]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
