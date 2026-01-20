import React from "react";
import MainSlider from "../components/public/MainSlider";
import Categories from "../components/common/Categories";
import NewCollection from "../components/sections/men/Newcollection";
import Filters from "../components/common/Filters";

import Card from "../components/common/Card";
import { products } from "../data/products";

export default function Men() {
  const menProducts = products.filter(
    (p) => p.category === "men"
  );

  return (
    <>
      <MainSlider activeCategory="MEN" />

      <div className="flex flex-wrap gap-4 p-5">
        {menProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
