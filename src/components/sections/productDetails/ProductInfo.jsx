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

export default function ProductInfo({ data }) {
  const [openSection, setOpenSection] = useState("details");

  if (!data) return null;

  const images = [
    data.normal,
    data.hover,
    data.img3,
    data.img4,
    data.img5,
    data.img6,
  ].filter(Boolean);

  return (
    <div className="max-w-10xl mx-8 px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full"
              alt={data.title}
            />
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-gray-500">{data.subtitle}</p>

          <hr className="my-4" />

          <p className="text-2xl font-bold">₹ {data.price}</p>
          <p className="text-sm text-gray-500 mb-6">
            Price incl. of all taxes
          </p>

          <h3 className="font-semibold mb-2">Shop by Variant / Look</h3>
          <img
            src={data.display || data.normal}
            className="w-20 border rounded-md mb-6"
            alt="variant"
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

          <div className="flex items-center gap-4 mb-6">
            <p>Quantity</p>
            <select className="border px-3 py-2 rounded-md">
              {[...Array(10)].map((_, i) => (
                <option key={i}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-4">

            <div className="flex gap-4 mb-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
                ADD TO CART
              </button>

              <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
                ADD TO WISHLIST
              </button>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <p>Share</p>

              {/* WhatsApp */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.917 11.917 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.757 6.02L0 24l6.26-1.788A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.253-6.2-3.48-8.52zM12 22c-2.05 0-3.947-.615-5.52-1.66l-.392-.232-3.717 1.06 1.045-3.62-.25-.38A9.954 9.954 0 012 12c0-5.523 4.477-10 10-10 2.66 0 5.158 1.036 7.04 2.92C20.964 6.842 22 9.34 22 12c0 5.523-4.477 10-10 10zm5.016-7.496c-.271-.136-1.6-.789-1.847-.879-.247-.09-.427-.136-.607.137-.181.272-.697.879-.854 1.06-.157.181-.314.204-.585.068-.271-.136-1.145-.422-2.182-1.35-.807-.717-1.352-1.605-1.51-1.876-.157-.272-.017-.419.119-.554.122-.121.272-.314.409-.471.136-.157.181-.272.272-.454.091-.181.045-.34-.023-.476-.068-.136-.607-1.462-.831-2.004-.219-.529-.44-.457-.607-.466l-.518-.009c-.181 0-.476.068-.725.34-.247.272-.947.927-.947 2.261s.97 2.618 1.106 2.798c.136.181 1.91 2.918 4.63 4.093.647.279 1.152.445 1.545.568.649.206 1.24.177 1.708.107.521-.076 1.6-.654 1.828-1.287.227-.632.227-1.175.159-1.287-.068-.113-.247-.181-.518-.317z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.324v21.352C0 23.405.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.405 24 22.676V1.324C24 .592 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.556 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.934 4.934 0 01-2.224.084 4.917 4.917 0 004.588 3.417A9.867 9.867 0 010 19.54a13.936 13.936 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.028 0-.213-.004-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M224.3 141a115 115 0 1 0-.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1-.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1-53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

            </div>
          </div>


          <div className="mt-6">
            <h3 className="font-semibold mb-2">Delivery Details</h3>

            <div className="relative w-full max-w-13px mb-4">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="w-full border px-6 py-2 rounded-md pr-20 focus:outline-teal-500"
              />
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-teal-600 font-semibold px-4 py-1 hover:bg-teal-50 rounded-md"
              >
                CHECK
              </button>
            </div>


            <div className="flex items-start gap-2 mb-4 bg-gray-50 border rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-[13px] text-gray-700">
                This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.
              </p>
            </div>

            <div className="mt-2 bg-gradient-to-r from-teal-100 to-teal-400 border rounded-md p-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26l6.91 1-5 4.87L17.18 22 12 18.77 6.82 22l1.18-7.87-5-4.87 6.91-1L12 2z" />
              </svg>
              <p className="text-sm font-medium">
                You'll earn <span className="font-bold">₹{data.price * 0.1}</span> as TSS Points on this purchase
              </p>
            </div>
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
              <div className="px-4 pb-4 text-sm text-gray-700">
                <p>Premium quality cotton</p>
                <p>Comfort fit</p>
                <p>Made in India</p>
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
              <div className="px-4 pb-4 text-sm text-gray-700">
                {data.subtitle} designed for comfort and everyday wear.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
