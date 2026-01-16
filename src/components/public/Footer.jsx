// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 pt-10 ">
      {/* Top Red Banner */}
      <div className="bg-red-600 text-white text-center py-2 font-semibold">
        HOMEGROWN INDIAN BRAND
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto ml-14 px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* NEED HELP */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">NEED HELP</h3>
          <ul className="space-y-2">
            {[
              "Contact Us",
              "Track Order",
              "Returns & Refunds",
              "FAQs",
              "My Account",
            ].map((item) => (
              <li
                key={item}
                className="hover:underline cursor-pointer hover:text-red-500"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-5 h-5 flex items-center justify-center 
                   border border-black rounded-full text-xs"
                >
                  ₹
                </span>
                COD Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <span
                  className="w-5 h-5 flex items-center justify-center 
                   border border-black rounded-full text-xs"
                >
                  ⟳
                </span>
                30 Days Easy Returns & Exchanges
              </span>
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Investor Relation",
              "Careers",
              "Gift Vouchers",
              "Community Initiatives",
            ].map((item) => (
              <li
                key={item}
                className="hover:underline cursor-pointer  hover:text-red-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* MORE INFO */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">MORE INFO</h3>
          <ul className="space-y-2">
            {["T&C", "Privacy Policy", "Sitemap", "Get Notified", "Blogs"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:underline cursor-pointer hover:text-red-500"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* STORE NEAR ME */}
        <div>
          <h3 className="text-red-600 font-bold mb-4">STORE NEAR ME</h3>
          <ul className="space-y-2">
            {["Mumbai", "Pune", "Bangalore", "Hubballi"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
            <li className="text-blue-700 font-semibold cursor-pointer">
              View More
            </li>
          </ul>
        </div>
      </div>

      {/* App Download */}
      <div className="text-center my-6">
        <p className="flex items-center gap-2 font-semibold mb-3 justify-center">
          <FaMobileAlt />
          EXPERIENCE THE SOULED STORE APP
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <img
            src="/footer_img/googleplay.png"
            alt="appstore.jpg"
            className="h-12"
          />
          <img
            src="/footer_img/app.png"
            alt="App Store"
            className="h-6 mt-3 "
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end gap-4 max-w-5xl mx-auto px-4 mb-6 items-center md:hid">
        <span className="text-gray-700">Follow Us:</span>

        {/* Facebook */}
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer">
          <FaFacebookF className="text-white text-lg" />
        </div>

        {/* Instagram */}
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-400 cursor-pointer">
          <FaInstagram className="text-white text-lg" />
        </div>

        {/* Snapchat */}
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-yellow-400 cursor-pointer">
          <FaSnapchatGhost className="text-white text-lg" />
        </div>

        {/* Twitter */}
        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black cursor-pointer">
          <FaTwitter className="text-white text-lg" />
        </div>
      </div>

      {/* Bottom Payment & Shipping */}
      <div className="border-t border-gray-300 pt-4 pb-6 text-sm text-gray-600 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-5 flex-wrap mx-12">
          <span>100% Secure Payment:</span>
          <img src="/footer_img/phonepay.png" className="h-8" />
          <img src="/footer_img/gpay.png" className="h-8" />
          <img src="/footer_img/paytm.png" className="h-8" />

          <img src="/footer_img/Amazon.png" className="h-8" />
          <img src="/footer_img/cash.png" className="h-8" />
          <img src="/footer_img/mobi.png" className="h-8" />
        </div>

        <div className="flex items-center gap-2 flex-wrap mx-12">
          <span>Shipping Partners:</span>
          <img src="/footer_img/ecom.png" className="h-8" />
          <img src="/footer_img/dtdc.png" className="h-5 w-10" />
          <img src="/footer_img/del.png" className="h-8" />
          <img src="/footer_img/xpress.png" className="h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
