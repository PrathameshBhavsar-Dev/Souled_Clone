import React from "react";
import MainSlider from "../components/public/MainSlider";
import Filters from "../components/common/Filters";
import Categories from "../components/common/Categories";
import Card from "../components/common/Card";
import { sneakerCategories } from "../data/sneakerCategories";
import SneakerData from "../assets/Data/sneakers/sneakerData/SneakerData"
const Sneakers = () => {
 
  return (
    <div>
      <MainSlider activeCategory="SNEAKERS" />
      <Categories data={sneakerCategories} />
      

       <div className="w-full">
        <div className="grid grid-cols-4 gap-5 p-5">
          {SneakerData.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sneakers;