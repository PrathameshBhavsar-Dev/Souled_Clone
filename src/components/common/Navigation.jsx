import React, { useState } from "react";
import { useParams } from "react-router-dom";

/* ---------------- DUMMY PRODUCTS ---------------- */
const products = [
  {
    id: 1,
    title: "Black Clover: Black Bulls",
    category: "Hoodies",
    price: 2599,
    size: ["M", "L", "XL"],
    img: "../photos/display1.png",
  },
  {
    id: 2,
    title: "Polar Fleece Jacket: Peanuts",
    category: "Biker Jackets",
    price: 2199,
    oldPrice: 2399,
    size: ["S", "M", "L"],
    img: "../photos/isro2.png",
  },
  {
    id: 3,
    title: "Bomber Jacket: Happy Days",
    category: "Biker Jackets",
    price: 3499,
    oldPrice: 3999,
    size: ["L", "XL"],
    img: "/products/3.jpg",
  },
  {
    id: 4,
    title: "Popeye: Iron Power",
    category: "Hoodies",
    price: 2099,
    oldPrice: 2299,
    size: ["XS", "S", "M"],
    img: "/Navigation_img/img1.avif",
  },
];

/* ---------------- CONSTANTS ---------------- */
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const categories = ["Hoodies", "Biker Jackets"];

const Navigation = () => {
  const { slug } = useParams();
  const title = slug?.replace("-", " ");

  /* ---------------- STATES ---------------- */
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  /* ---------------- SORTING ---------------- */
  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...filteredProducts];

    if (value === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (value === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

  /* ---------------- CATEGORY FILTER ---------------- */
  const handleCategory = (cat) => {
    setSelectedCategory(cat);

    let filtered = products.filter(
      (p) => p.category === cat && (!selectedSize || p.size.includes(selectedSize))
    );

    setFilteredProducts(filtered);
  };

  /* ---------------- SIZE FILTER ---------------- */
  const handleSize = (size) => {
    setSelectedSize(size);

    let filtered = products.filter(
      (p) => p.size.includes(size) && (!selectedCategory || p.category === selectedCategory)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-[1700px] mx-auto px-6 py-6">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-3">
        Home / Men / <span className="capitalize">{title}</span>
      </p>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold capitalize">
          Mens {title} – {filteredProducts.length} items
        </h1>

        <select
          onChange={handleSort}
          className="border px-3 py-2 text-sm rounded"
        >
          <option value="">Select Sorting Options</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="flex gap-8">
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="w-[260px] hidden md:block">
          {/* Categories */}
          <h3 className="font-bold mb-3">CATEGORIES</h3>

          <div className="space-y-2 text-sm mb-6">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  onChange={() => handleCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          <hr className="my-4" />

          {/* Size */}
          <h3 className="font-bold mb-3">SIZE</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSize(size)}
                className="border px-3 py-1 text-xs rounded hover:bg-black hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </aside>

        {/* ---------------- PRODUCTS ---------------- */}
        <section className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="mt-2 font-semibold text-sm">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.category}</p>

                <div className="flex gap-2 items-center">
                  <span className="font-bold text-sm">₹{p.price}</span>
                  {p.oldPrice && (
                    <>
                      <span className="line-through text-gray-400 text-xs">
                        ₹{p.oldPrice}
                      </span>
                      <span className="text-red-500 text-xs font-semibold">
                        ₹{p.oldPrice - p.price} OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navigation;
