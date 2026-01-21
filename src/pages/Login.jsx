import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginSection() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-8">
      <div className="w-full max-w-md bg-white border border-gray-300 mx-auto">

        {/* Title */}
        <h2 className="text-center text-base font-bold py-4 px-4">
          Login with The Souled Store
        </h2>

        {/* Tabs */}
        <div className="flex border border-gray-300 mx-4 sm:mx-6">
          <button onClick={() => navigate("/login")}
            className={`w-1/2 py-3 text-xs sm:text-sm font-semibold ${
              activeTab === "login" ? "bg-teal-700 text-white" : "bg-white text-gray-600" }`}>LOGIN </button>

          <button onClick={() => navigate("/register")} 
            className={`w-1/2 py-3 text-xs sm:text-sm font-semibold ${
              activeTab === "register" ? "bg-teal-700 text-white": "bg-white text-gray-600"}`}>REGISTER </button>
          
        </div>

        {/* Tab Content */}
        <div className="relative bg-gray-100 border border-gray-400 mx-4 sm:mx-6 mt-7 mb-10 p-4 sm:p-6">

          {/* 🔺 TRIANGLE (border + white fill) */}
          <div
            className={`absolute top-0 -translate-y-full
                        ${activeTab === "login" ? "left-1/4" : "left-3/4"}
                        -translate-x-1/2`}
          >
            {/* Outer (border) triangle */}
            <div
              className="w-0 h-0
                         border-l-8 border-r-8 border-b-8
                         border-l-transparent border-r-transparent
                         border-b-gray-500"
            />

            {/* Inner (white) triangle */}
            <div
              className="absolute top-px left-1/2 -translate-x-1/2
                         w-0 h-0
                         border-l-7 border-r-7 border-b-7
                         border-l-transparent border-r-transparent
                         border-b-white"
            />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <div className="w-full sm:w-1/2">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded">
                <span className="text-blue-600 font-bold">f</span>
                <span className="text-sm font-medium text-gray-700">
                  Facebook
                </span>
              </button>
            </div>

            <div className="w-full sm:w-1/2">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded">
                <span className="text-red-500 font-bold">G</span>
                <span className="text-sm font-medium text-gray-700">
                  Google
                </span>
              </button>
            </div>
          </div>

          {/* OR Section */}
          <div className="text-center font-bold text-sm text-gray-600 mb-6">
            - OR -
          </div>

          {/* Form Section */}
          <div className="mb-6">
            <form>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-sm outline-none bg-white focus:border-gray-400"
              />

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded text-sm font-semibold hover:bg-red-600 transition"
              >
                PROCEED
              </button>
            </form>
          </div>

          {/* New User Section */}
          <div className="text-center text-sm text-gray-600">
            New User ?{" "}
            <span onClick={() => navigate("/register")} className="text-red-500 cursor-pointer underline">
              Create Account
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
