import React from "react";
import MainSlider from "../components/public/MainSlider";

import Card from "../components/common/Card";
import { products } from "../data/products";

export default function Sneakers() {
  const sneakerProducts = products.filter(
    (p) => p.category === "sneakers"
  );

  return (
    <>
      <MainSlider activeCategory="SNEAKERS" />

      <div className="flex flex-wrap gap-4 p-5">
        {sneakerProducts.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
