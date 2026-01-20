import React from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

    const menuItems = [
  "Gift Card FAQ",
  "Sale Terms & Conditions",
  "Miscellaneous",
  "Exclusive Membership",
  "Returns, Exchange & Refund",
  "Shipping & Tracking",
  "Orders & Payment"
];

const Contact = () => {

 const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className=" px-3">
      {/* Top Section */}
      <div className="bg-gray-100 text-center py-12  px-4 sm:px-6 lg:px-8 my-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Manage Your Orders Easily
        </h2>
        <p className="mt-2 text-gray-700 text-base sm:text-lg">
          Track, Return/ Exchange or Cancel your orders hassle-free.
        </p>
        <button className="mt-6 bg-teal-700 text-white font-bold py-3 px-6 rounded-md hover:bg-teal-800 transition-transform duration-300 hover:-translate-y-1">
          MY ORDERS
        </button>
      </div>

      {/* Bottom Section */}
      <div className="bg-red-500 text-white text-center py-2 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold">
          What can we help you with today?
        </h3>
        <div className="mt-6 max-w-sm mx-auto">
          <select className="w-full p-3 rounded-md text-gray-700 bg-white">
            <option>Please select your query.</option>
            <option>Order Status</option>
            <option>Return/Exchange</option>
            <option>Cancel Order</option>
            <option>Other Queries</option>
          </select>
        </div>
      </div>

      <div className="flex max-w-6xl mx-auto mt-10 p-4 gap-6 justify-center">
      {/* Left Menu */}
      <div className="w-1/4 border-r border-gray-300">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 cursor-pointer hover:text-blue-600 ${
              activeIndex === index ? "text-blue-600 font-semibold" : "text-gray-700"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-4 justify-center">
        {/* This is where you can add your text for each menu */}
        {activeIndex === 0 && (
          <div>
            {/* Add Gift Card FAQ content here */}
            <h2 className="font-bold text-lg mb-2">Gift Card FAQ</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 1 && (
          <div>
            {/* Add Sale Terms content here */}
            <h2 className="font-bold text-lg mb-2">Sale Terms & Conditions</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 2 && (
          <div>
            {/* Add Miscellaneous content here */}
            <h2 className="font-bold text-lg mb-2">Miscellaneous</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 3 && (
          <div>
            {/* Add Exclusive Membership content here */}
            <h2 className="font-bold text-lg mb-2">Exclusive Membership</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 4 && (
          <div>
            {/* Add Returns/Exchange/Refund content here */}
            <h2 className="font-bold text-lg mb-2">Returns, Exchange & Refund</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 5 && (
          <div>
            {/* Add Shipping & Tracking content here */}
            <h2 className="font-bold text-lg mb-2">Shipping & Tracking</h2>
            <p>Space to add your content...</p>
          </div>
        )}
        {activeIndex === 6 && (
          <div>
            {/* Add Orders & Payment content here */}
            <h2 className="font-bold text-lg mb-2">Orders & Payment</h2>
            <p>Space to add your content...</p>
          </div>
        )}
      </div>
    </div>

      {/* Footer / Social */}
      <div className="bg-white py-8 text-center">
        <h4 className="font-semibold mb-4">Stay in touch</h4>
        <div className="flex justify-center gap-6 text-2xl">
          <span className="cursor-pointer text-blue-600 transform transition duration-300 hover:-translate-y-1">
            <FaFacebook />
          </span>
          <span className="cursor-pointer text-pink-500 transform transition duration-300 hover:-translate-y-1">
            <FaInstagram />
          </span>
          <span className="cursor-pointer text-red-600 transform transition duration-300 hover:-translate-y-1">
            <TiSocialYoutubeCircular />
          </span>
          <span className="cursor-pointer text-black transform transition duration-300 hover:-translate-y-1">
            <FaTwitter />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;



