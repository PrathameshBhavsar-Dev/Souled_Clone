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

const Men = () => {
  return (
    <div>
      <MainSlider activeCategory="MEN" />
      <NewCollection />
       <Categories data={menCategories} />
       <HomegrownBand/>
       <CuratedGrid data={menCurated} />
      <Filters filters={menFilters} />
    </div>
  );
};

export default Men;
