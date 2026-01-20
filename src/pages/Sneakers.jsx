import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import Card from "../components/common/Card";
import { products } from "../data/products";
import { sneakerCategories } from "../data/sneakerCategories";

const Women = () => {
  const sneakerProducts = products.filter(
    (p) => p.category === "sneakers"
  );
  return (
    <div>
      <MainSlider activeCategory="SNEAKERS" />
      <Categories data={sneakerCategories} />
      <div className="flex flex-wrap gap-4 p-5">
        {sneakerProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Women;