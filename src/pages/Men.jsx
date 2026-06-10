import React from "react";
import MainSlider from "../components/public/MainSlider";
import Categories from "../components/common/Categories";
import NewCollection from "../components/sections/men/Newcollection";
import Filters from "../components/common/Filters";
import { menFilters } from "../data/menFilters";
import { menCategories } from "../data/menCategories";
import HomegrownBand from "../components/sections/men/HomegrownBand";
import CuratedGrid from "../components/common/CuratedGrid";
import { menCurated } from "../data/menCurated";
import Card from "../components/common/Card";
import MenData from "../assets/Data/men/menData/MenData";

const Men = () => {
  return (
    <div>
      <MainSlider activeCategory="MEN" />
      <NewCollection />
       <Categories data={menCategories} categoryType="men" />
       <HomegrownBand/>
       <CuratedGrid data={menCurated} />
      <Filters filters={menFilters} />


<div className="w-full">
  <div className="grid grid-cols-4 gap-5 p-5">
    {MenData.map(product => (
      <Card key={product.id} product={product} />
    ))}
  </div>
</div>   
    </div>
  );
};

export default Men;



