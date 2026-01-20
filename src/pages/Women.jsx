import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import { womenFilters } from "../data/womenFilters";
import {womenCategories} from "../data/womenCategories";

const Women = () => {
  return (
    <div>
      <MainSlider activeCategory="WOMEN" />
          <Categories data={womenCategories} columns={3} />
      <Filters filters={womenFilters}  />
    </div>
  );
};

export default Women;
