import { Link } from "react-router-dom";

export default function Card({ product }) {
  if (!product) return null;

  return (
<Link to={`/product/${product.category}/${product.id}`}>
      <div className="w-full cursor-pointer">

        <div className="relative w-full h-[500px] overflow-hidden group">
          <img
            src={product.normal}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />

          <img
            src={product.hover}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="mt-3">
          <p className="text-sm font-semibold">{product.title}</p>
          <p className="text-sm text-gray-500">{product.subtitle}</p>
          <p className="mt-1 text-sm font-semibold">₹ {product.price}</p>
        </div>

      </div>
    </Link>
  );
}
