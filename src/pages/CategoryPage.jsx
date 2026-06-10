import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { menCategoryProducts } from "../data/menCategoryProducts";
import Card from "../components/common/Card";

const CategoryPage = () => {
  const { categoryType } = useParams();
  const [sortOption, setSortOption] = useState("default");

  // Map URL parameter to data key
  const getCategoryKey = (urlCategory) => {
    const keyMap = {
      "t-shirt": "tshirt",
      "tshirt": "tshirt",
      "shirts": "shirts",
      "winter-wear": "winter-wear",
      "winterwear": "winter-wear",
      "joggers": "joggers",
      "jeans": "jeans",
      "polos": "polos",
      "pants": "pants",
      "sneakers": "sneakers",
      "backpacks": "backpacks",
      "accessories": "accessories",
      "socks": "socks",
      "shorts-boxers": "shorts-boxers",
    };
    return keyMap[urlCategory] || urlCategory;
  };

  const dataKey = getCategoryKey(categoryType);
  const rawProducts = menCategoryProducts[dataKey] || [];
  
  // Transform products to match Card component expectations
  const products = rawProducts.map(product => ({
    ...product,
    title: product.name || product.title,
    subtitle: product.category || product.subtitle,
  }));

  // Format category name for display
  const getCategoryDisplayName = (category) => {
    const names = {
      "t-shirt": "T-Shirt",
      "tshirt": "T-Shirt",
      "shirts": "Shirts",
      "winter-wear": "Winter Wear",
      "joggers": "Joggers",
      "jeans": "Jeans",
      "polos": "Polos",
      "pants": "Pants",
      "sneakers": "Sneakers",
      "backpacks": "Backpacks",
      "accessories": "Accessories",
      "socks": "Socks",
      "shorts-boxers": "Shorts & Boxers",
    };
    return names[category] || category;
  };

  // Sort products based on selected option
  const getSortedProducts = () => {
    let sorted = [...products];
    switch (sortOption) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
        return sorted.reverse();
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();
  const categoryName = getCategoryDisplayName(categoryType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-[1700px] mx-auto px-6 py-3">
          <p className="text-sm text-gray-600">
            Home / The Souled Store / Men / {categoryName}
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar Layout */}
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-screen mx-auto max-w-7xl">
          {/* Left Sidebar - Empty for now */}
          <div className="hidden lg:block w-64 border-b lg:border-b-0 lg:border-r border-gray-300 p-5 flex-shrink-0">
            {/* Sidebar content will go here */}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Header Section */}
            <div className="border-b border-gray-300 px-4 lg:px-7 py-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-base md:text-lg font-semibold text-gray-700">
                    Men {categoryName} - {products.length} items
                  </h1>
                </div>
                <div className="w-full md:w-80">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-white text-gray-600 text-sm focus:outline-none focus:border-teal-500"
                  >
                    <option value="default">Select Sorting Options</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>
              
            {/* Products Grid */}
            <div className="flex-1 px-4 md:px-6 py-5 flex justify-center">
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl w-full">
                  {sortedProducts.map((product) => (
                    <div key={product.id} className="flex flex-col max-w-sm p-2">
                      <Card product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
