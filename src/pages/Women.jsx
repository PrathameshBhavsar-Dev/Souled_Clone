import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import CuratedGrid from "../components/common/CuratedGrid";
import { womenFilters } from "../data/womenFilters";
import {womenCategories} from "../data/womenCategories";
import { womenCurated } from "../data/womenCurated";
import Card from "../components/common/Card";
import { products } from "../data/products";

const Women = () => {
  console.log(products);

  const womenProducts = products.filter(
    (p) => p.category === "women"
  );

  console.log("Filtered:", womenProducts);

  return (
    <div>
      <MainSlider activeCategory="WOMEN" />
          <Categories data={womenCategories} columns={3} />
          <CuratedGrid data={womenCurated} />
      <Filters filters={womenFilters}  />
    
      <h1 className="text-xl p-5">
        Total Products: {womenProducts.length}
      </h1>

      <div className="flex flex-wrap gap-4 p-5">
        {womenProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Women; 