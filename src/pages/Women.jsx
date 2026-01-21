import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import CuratedGrid from "../components/common/CuratedGrid";
import { womenFilters } from "../data/womenFilters";
import {womenCategories} from "../data/womenCategories";
import { womenCurated } from "../data/womenCurated";

const Women = () => {
  return (
    <div>
      <MainSlider activeCategory="WOMEN" />
          <Categories data={womenCategories} columns={3} />
          <CuratedGrid data={womenCurated} />
      <Filters filters={womenFilters}  />
    </div>
  );
};

export default Women;
