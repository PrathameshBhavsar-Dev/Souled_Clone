import React, { useState } from "react";
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
    <section className="w-full bg-white">

      {/* Top Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Manage Your Orders Easily
        </h2>
        <p className="mt-2 text-gray-700 text-lg sm:text-xl">
          Track, Return / Exchange or Cancel your orders hassle-free.
        </p>
        <button className="mt-6 bg-teal-700 text-white px-8 py-3 rounded-md font-semibold">
          MY ORDERS
        </button>
      </div>

      {/* Red Help Bar */}
      <div className="bg-red-600 py-10">
        <h3 className="text-2xl sm:text-3xl text-white font-semibold text-center mb-4">
          What can we help you with today?
        </h3>
        <div className="max-w-md mx-auto bg-white p-3 rounded-md shadow">
          <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
            <option>Please select your query.</option>
            <option>Order Status</option>
            <option>Return / Exchange</option>
            <option>Cancel Order</option>
            <option>Other Queries</option>
          </select>
        </div>
      </div>

      {/* FAQ Title */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">FAQs</h2>
        <div className="mt-3 border-b border-gray-300"></div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mt-10 flex gap-10 px-4">

        {/* Left Menu */}
        <div className="w-[25%] border-r border-gray-300 pr-6 space-y-4 text-sm uppercase tracking-wide">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                activeIndex === index
                  ? "text-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-[75%] text-sm text-gray-700 leading-relaxed">
          <h3 className="font-semibold mb-3">{menuItems[activeIndex]}</h3>

          <p className="mb-3">
            TSS Points are given to The Souled Store users as part of promotional
            activities and loyalty programs.
          </p>

          <ul className="list-disc pl-5 space-y-2 marker:text-red-600">
            <li>Points are valid only till the mentioned expiry date.</li>
            <li>Maximum 10% of the order value can be redeemed.</li>
            <li>Points are non-transferable and cannot be encashed.</li>
            <li>Points cannot be combined with certain offers.</li>
            <li>Misuse of points may lead to account suspension.</li>
          </ul>
        </div>
      </div>

      {/* Stay in Touch */}
      <div className="max-w-6xl mb-12 mx-auto mt-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Stay in touch</h3>

        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <FaFacebook />
            </div>
            <span className="mt-2 text-sm">Facebook</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-pink-500 text-white p-3 rounded-full">
              <FaInstagram />
            </div>
            <span className="mt-2 text-sm">Instagram</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <TiSocialYoutubeCircular />
            </div>
            <span className="mt-2 text-sm">YouTube</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-black text-white p-3 rounded-full">
              <FaTwitter />
            </div>
            <span className="mt-2 text-sm">X</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
