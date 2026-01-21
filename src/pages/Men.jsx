import React from "react";
import MainSlider from "../components/public/MainSlider";
import Categories from "../components/common/Categories";
import NewCollection from "../components/sections/men/Newcollection";
import Filters from "../components/common/Filters";
import { menFilters } from "../data/menFilters";
import { menCategories } from "../data/menCategories";
import Card from "../components/common/Card";
import { products } from "../data/products";

const menProducts = products.filter(
  (p) => p.category === "men"
);
const Men = () => {
  return (
    <div>
      <MainSlider activeCategory="MEN" />
      <NewCollection />
      <Categories data={menCategories} />
      <Filters filters={menFilters} />
      <div className="flex flex-wrap gap-4 p-5">
        {menProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Men;




