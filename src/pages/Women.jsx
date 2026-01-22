import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import CuratedGrid from "../components/common/CuratedGrid";
import { womenFilters } from "../data/womenFilters";
import { womenCategories } from "../data/womenCategories";
import { womenCurated } from "../data/womenCurated";
import Card from "../components/common/Card";
import WomenData from "../assets/Data/women/womenData/WomenData";

const Women = () => {
  return (
    <div>
      <MainSlider activeCategory="WOMEN" />
      <Categories data={womenCategories} columns={3} />
      <CuratedGrid data={womenCurated} />
      <Filters filters={womenFilters} />


      <div className="w-full">
        <div className="grid grid-cols-4 gap-5 p-5">
          {WomenData.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women; 