import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";

import {sneakerCategories} from "../data/sneakerCategories";

const Women = () => {
  return (
    <div>
      <MainSlider activeCategory="SNEAKERS" />
      <Categories data={sneakerCategories}  />
     
    </div>
  );
};

export default Women;