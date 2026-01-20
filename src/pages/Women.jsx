import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";

import Card from "../components/common/Card";
import { products } from "../data/products";
export default function Women() {
  console.log(products);

  const womenProducts = products.filter(
    (p) => p.category === "women"
  );

  console.log("Filtered:", womenProducts);

  return (
    <>
      <MainSlider activeCategory="WOMEN" />

      <h1 className="text-xl p-5">
        Total Products: {womenProducts.length}
      </h1>

      <div className="flex flex-wrap gap-4 p-5">
        {womenProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
