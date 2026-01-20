import React from "react";
import { useNavigate } from "react-router-dom";

const WishlistDefault = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        
        {/* Image */}
      <img
        src="/wishList-empty-icon.png"
        alt="Empty Wishlist"
        className="w-56 mb-8"
      />

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2">
        Your wishlist is lonely and looking for love.
      </h2>

      {/* Sub text */}
      <p className="text-sm md:text-base text-gray-600 text-center max-w-md mb-8">
        Add products to your wishlist, review them anytime and easily move to cart.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          
          className="px-6 py-3 border border-teal-700 text-teal-700 font-semibold text-sm rounded hover:bg-teal-50 transition"
        >
          CONTINUE SHOPPING
        </button>

        <button
          
          className="px-8 py-3 bg-teal-700 text-white font-semibold text-sm rounded hover:bg-teal-800 transition"
        >
          LOGIN
        </button>
      </div>

    </div>
  );
};

export default WishlistDefault;
