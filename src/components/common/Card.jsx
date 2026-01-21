import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link to={`/product/${product.id}`}>

      <div className="w-[300px] mx-[5px] cursor-pointer">

        <div className="mx-[5px] relative w-[300px] h-[420px] group">
          <img
            src={product.normal}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0"
          />

          <img
            src={product.hover}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="mt-3 text-left px-2">
          <p className="text-sm font-semibold text-gray-900">
            {product.title}
          </p>

          <p className="text-sm text-gray-500">
            {product.subtitle}
          </p>

          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="font-semibold text-gray-900">
              ₹ {product.price}
            </span>

            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                ₹ {product.oldPrice}
              </span>
            )}

            {product.off && (
              <span className="font-semibold text-orange-600">
                {product.off}
              </span>
            )}
          </div>
        </div>

      </div>

    </Link>
  );
}
