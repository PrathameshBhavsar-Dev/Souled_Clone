import MainSlider from "../components/public/MainSlider";

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
