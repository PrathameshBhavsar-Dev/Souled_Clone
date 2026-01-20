import { useState } from "react";

const ArrowIcon = ({ open }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""
      }`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function ProductInfo() {
  const [openSection, setOpenSection] = useState("details");

  return (
    <div className="max-w-10xl mx-8 px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <img src="/images/p-img1.avif" className="w-full" />
          <img src="/images/p-img2.avif" className="w-full" />
          <img src="/images/p-img3.avif" className="w-full" />
          <img src="/images/p-img4.avif" className="w-full" />
          <img src="/images/p-img5.avif" className="w-full" />
          <img src="/images/p-img6.avif" className="w-full" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">TSS Originals: Trilok</h1>
          <p className="text-gray-500">Oversized T-Shirts</p>

          <hr className="my-4" />

          <p className="text-2xl font-bold">₹ 999</p>
          <p className="text-sm text-gray-500 mb-6">
            Price incl. of all taxes
          </p>

          <h3 className="font-semibold mb-2">Shop by Variant/Look</h3>
          <img
            src="/images/p-img1.avif"
            className="w-20 border rounded-md mb-6"
          />

          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Please select a size.</p>
            <span className="text-sm text-teal-600 cursor-pointer">
              SIZE CHART
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded-md text-sm hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>

          <p className="text-sm mb-6">
            Size not available?{" "}
            <span className="text-teal-600 cursor-pointer">Notify Me</span>
          </p>

          <div className="flex items-center gap-4 mb-6">
            <p>Quantity</p>
            <select className="border px-3 py-2 rounded-md">
              {[...Array(10)].map((_, i) => (
                <option key={i}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
              ADD TO CART
            </button>
            <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md font-semibold flex items-center gap-2">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"></path>
              </svg>

              ADD TO WISHLIST
            </button>

          </div>


          <div className="flex items-center gap-5 mt-8 mb-7">
            <span className="text-sm font-medium text-gray-700">Share</span>

            <a href="#" className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2C8.3 2 2 7.7 2 15c0 3.9 1.8 7.5 4.9 10.1L6 30l4.2-2.3c1.8.5 3.7.8 5.8.8 7.7 0 14-5.7 14-13S23.7 2 16 2zm1.2 19.2l-3.4-3.6-6.7 3.6 7.2-7.6 3.4 3.6 6.7-3.6-7.2 7.6z" />
              </svg>
            </a>

            <a href="#" className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8.1v-2.9h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.8l-.4 2.9h-2.4v7C18.3 21.1 22 17 22 12z" />
              </svg>
            </a>

            <a href="#" className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 5.9c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.7 1.1A4.3 4.3 0 0016 4c-2.4 0-4.4 2-4.4 4.4 0 .3 0 .7.1 1C8 9.2 5.1 7.7 3.1 5.3c-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.6 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.4 3.1A8.6 8.6 0 012 19.5 12.1 12.1 0 008.6 21c7.8 0 12.1-6.5 12.1-12.1v-.6c.8-.6 1.5-1.4 1.8-2.4z" />
              </svg>
            </a>

            <a href="#" className="text-gray-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.3-.5-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.9a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm6.8-11.3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </a>
          </div>

          <h3 className="font-semibold mb-2">Delivery Details</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border px-4 py-2 rounded-md w-full"
            />
            <button className="text-teal-600 font-semibold">CHECK</button>
          </div>

          <div className="mt-4 border rounded-md p-4 flex gap-3 text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
              />
            </svg>
            <p>
              This product is eligible for return or exchange under our
              <span className="font-medium">
                {" "}
                30-day return or exchange policy.
              </span>
              <br />
              No questions asked.
            </p>
          </div>

          <div className="mt-4 bg-teal-100 px-4 py-3 rounded-md flex items-center gap-3">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-teal-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v13m-7-9h14M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5M5 12h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8zM12 5a3 3 0 00-3-3c-1.5 0-3 1.5-3 3s1.5 3 3 3h3V5zm0 0a3 3 0 013-3c1.5 0 3 1.5 3 3s-1.5 3-3 3h-3V5z"
              />
            </svg>

            <p className="font-medium">
              You'll earn ₹99.90 as TSS Points on this purchase
            </p>
          </div>


          <div className="mt-6 border rounded-md">
            <button
              onClick={() =>
                setOpenSection(openSection === "details" ? "" : "details")
              }
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Product Details
              <ArrowIcon open={openSection === "details"} />
            </button>

            {openSection === "details" && (
              <div className="px-4 pb-4 text-sm text-gray-700 space-y-4">
                <div>
                  <p className="font-semibold">Material & Care:</p>
                  <p>100% Cotton</p>
                  <p>Machine Wash</p>
                </div>

                <div>
                  <p className="font-semibold">Country of Origin:</p>
                  <p>India (and proud)</p>
                </div>

                <div>
                  <p className="font-semibold">Manufactured & Sold By:</p>
                  <p>The Souled Store Pvt. Ltd.</p>
                  <p>224, Tantia Jogani Industrial Premises</p>
                  <p>J.R. Boricha Marg</p>
                  <p>Lower Parel (E)</p>
                  <p>Mumbai - 400 011</p>
                  <p>tel: +91 22-68493328</p>
                  <p className="underline">connect@thesouledstore.com</p>
                  <p className="underline">
                    Customer care no. +91 22-68493328
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 border rounded-md">
            <button
              onClick={() =>
                setOpenSection(openSection === "desc" ? "" : "desc")
              }
              className="w-full flex justify-between items-center px-4 py-3 font-semibold"
            >
              Product Description
              <ArrowIcon open={openSection === "desc"} />
            </button>

            {openSection === "desc" && (
              <div className="px-4 pb-4 text-sm text-gray-700 leading-6">
                Oversized T-shirt made from premium heavy gauge cotton, designed
                for all-day comfort and a relaxed streetwear fit. Perfect for
                casual styling and everyday wear.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
