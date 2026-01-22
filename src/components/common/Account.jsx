import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Account = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* VERTICAL CARD */}
      <div className="bg-white w-full max-w-md border border-black">
        
        {/* TITLE */}
        <h2 className="text-center text-lg font-semibold py-6 text-gray-800">
          Login with The Souled Store
        </h2>

        {/* TABS */}
        <div className="flex border-t border-b border-black">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-3 text-sm font-semibold border-r border-black
              ${activeTab === "login" ? "bg-teal-700 text-white" : "bg-white"}
            `}
          >
            LOGIN
          </button>

          <button
            onClick={() => setActiveTab("register")}
            className={`w-1/2 py-3 text-sm font-semibold
              ${activeTab === "register" ? "bg-teal-700 text-white" : "bg-white"}
            `}
          >
            REGISTER
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-8 py-8 space-y-6">
          
          {/* SOCIAL */}
          <button className="w-full flex items-center justify-center gap-3 border border-black py-3 text-sm font-medium">
            <span className="text-blue-600 font-bold text-lg"><FaFacebook /></span>
            Facebook
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-black py-3 text-sm font-medium">
            <span className="text-red-500 font-bold text-lg"><FcGoogle /></span>
            Google
          </button>

          {/* OR */}
          <div className="text-center text-sm text-gray-600 font-medium">
            - OR -
          </div>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full border border-black px-4 py-3 text-sm focus:outline-none"
          />

          {/* PROCEED */}
          <button className="w-full bg-red-500 text-white py-3 font-semibold text-sm">
            PROCEED
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-700">
            New User?{" "}
            <span className="text-red-500 underline cursor-pointer">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
