import React from 'react';
import emptyCart from '../../assets/emptyCart.png';

const CartDefault = () => {
  const categories = [
    "Men's T-shirts",
    "Women's T-Shirts",
    "Joggers",
    "Shorts",
    "Tank Tops",
    "Full Sleeve T-Shirt",
    "Polos"
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-8">
      <div className="flex justify-center items-center gap-3 mb-12 text-xm font-semibold text-gray-400 tracking-wide">
        <span className="text-teal-600">MY BAG</span>
        <span className="text-gray-300">------------</span>
        <span>ADDRESS</span>
        <span className="text-gray-300">------------</span>
        <span>PAYMENT</span>
      </div>

      <div className="text-center max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <img src={emptyCart} alt="Empty Cart" className="mx-auto w-30 h-30 object-contain" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">Your shopping cart is empty.</h2>
        <p className="text-sm text-gray-500 mb-10">Please add something soon, carts have feelings too.</p>

        <div className="mb-8">
          <h3 className="text-base font-bold text-gray-900 mb-4">Popular Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button key={index} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-all">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-8 py-3 text-xs font-bold border-2 border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition-all uppercase tracking-wide">CONTINUE SHOPPING</button>
          <button className="px-8 py-3 text-xs font-bold bg-teal-600 text-white rounded hover:bg-teal-700 transition-all uppercase tracking-wide">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default CartDefault;
