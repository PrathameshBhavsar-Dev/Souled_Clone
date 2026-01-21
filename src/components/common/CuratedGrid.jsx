import React from "react";

const CuratedGrid = ({ data }) => {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="mb-4 -mt-15 text-[28px] font-bold  text-[#282C3F] uppercase text-center">
          curated for you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedGrid;
