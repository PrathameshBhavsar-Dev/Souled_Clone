import React from "react";

import img1 from "../../../assets/Homegrown/1.png";
import img2 from "../../../assets/Homegrown/2.png";
import img3 from "../../../assets/Homegrown/3.png";
import img4 from "../../../assets/Homegrown/4.png";

const data = [
  { img: img1, text: "WE'VE COLLABORATED WITH TRILOK" },
  { img: img2, text: "TSS ORIGINALS: TRILOK" },
  { img: img3, text: "DESIGNED WITH INTENT" },
  { img: img4, text: "SUPPORT A HOMEGROWN BAND" },
];

const HomegrownBand = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1700px] mx-auto px-6">
        <h2 className="mb-4 -mt-20 text-[28px] font-bold  text-[#282C3F] uppercase text-center">
          HOMEGROWN BRAND X HOMEGROWN BAND
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer">
              <img
                src={item.img}
                alt=""
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomegrownBand;
