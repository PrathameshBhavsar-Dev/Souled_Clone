import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/sections/productDetails/ProductInfo";
import OthersBought from "../components/sections/productDetails/OthersBought";
import { products } from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <h2 className="p-10 text-center">Product Not Found</h2>;
  }

  return (
    <div className="p-5">
      <ProductInfo product={product} />
      <OthersBought />
    </div>
  );
}
