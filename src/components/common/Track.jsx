import React from "react";
import { GoAlert } from "react-icons/go";

const Track = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10">
      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm px-4 py-3 flex items-start gap-2">
        <span className="text-lg"><GoAlert /></span>
        <p>
          Hey! Please note that The Souled Store team will never ask you to disclose any financial information or for payment regarding any contest. For COD orders we do not collect money before the order delivery. Do not share any such sensitive details. Stay secure and stay safe.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar */}
        <div className="w-full lg:max-w-xs">
          {/* User Card */}
          <div className="bg-gray-100 p-4 mb-6">
            <h3 className="font-semibold capitalize">user name</h3>
            <p className="text-sm text-gray-600">user gmail</p>
            <button className="text-red-500 text-sm mt-2">
              Get Membership Now
            </button>
          </div>

          {/* Menu */}
          <div className="border divide-y text-sm">
            <div className="px-4 py-3 text-teal-600 font-medium cursor-pointer">
              Orders{" "}
              <span className="text-gray-400 ml-2">
                (Track your order here)
              </span>
            </div>
            <div className="px-4 py-3 cursor-pointer">Gift Vouchers</div>
            <div className="px-4 py-3 cursor-pointer">
              TSS Points{" "}
              <span className="text-teal-600">
                (Active TSS Points: 0.00)
              </span>
            </div>
            <div className="px-4 py-3 cursor-pointer">
              TSS Money{" "}
              <span className="text-teal-600">(₹ 0.00)</span>
            </div>
            <div className="px-4 py-3 cursor-pointer">FAQs</div>
            <div className="px-4 py-3 cursor-pointer">Profile</div>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full border border-red-500 text-red-500 py-2 text-sm font-semibold hover:bg-red-50">
              DELETE MY ACCOUNT
            </button>
            <button className="w-full border border-red-500 text-red-500 py-2 text-sm font-semibold hover:bg-red-50">
              LOGOUT
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-gray-400 font-semibold mb-6">MY ORDERS</h2>
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-gray-600">No Orders found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
