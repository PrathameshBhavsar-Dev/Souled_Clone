import React from "react";
import MainSlider from "../components/public/MainSlider";
import Categories from "../components/common/Categories";
import NewCollection from "../components/sections/men/Newcollection";
import Filters from "../components/common/Filters";
import { menFilters } from "../data/menFilters";
import { menCategories } from "../data/menCategories";

const Men = () => {
  return (
    <div>
      <MainSlider activeCategory="MEN" />
      <NewCollection />
       <Categories data={menCategories} />
      <Filters filters={menFilters} />
    </div>
  );
};

export default Men;

//men page