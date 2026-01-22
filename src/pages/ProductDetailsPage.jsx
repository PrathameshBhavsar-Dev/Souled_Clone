import { useParams } from "react-router-dom";
import MenData from "../assets/Data/men/menData/MenData";
import WomenData from "../assets/Data/women/womenData/WomenData";
import SneakerData from "../assets/Data/sneakers/sneakerData/SneakerData";
import ProductInfo from "../components/sections/productDetails/ProductInfo";
import OthersBought from "../components/sections/productDetails/OthersBought";

export default function ProductDetailsPage() {
  const { category, id } = useParams();

  let product = null;

  if (category === "men") {
    product = MenData.find(item => item.id === id);
  } else if (category === "women") {
    product = WomenData.find(item => item.id === id);
  } else if (category === "sneakers") {
    product = SneakerData.find(item => item.id === id);
  }

  if (!product) {
    return <p className="p-10 text-center">Product not found</p>;
  }

  return (
    <div className="p-5">
      <ProductInfo data={product} />
     <OthersBought category={category} />
    </div>
  );
}
