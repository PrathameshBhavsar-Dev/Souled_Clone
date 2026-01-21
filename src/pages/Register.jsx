import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterSection() {
  const [activeTab, setActiveTab] = useState("register");
  const navigate = useNavigate();
  
  // Set activeTab based on current route
  const currentTab = window.location.pathname === "/login" ? "login" : "register";
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 py-8">
      <div className="w-full max-w-md bg-white border border-gray-300 mx-auto">

        {/* Title */}
        <h2 className="text-center text-base font-bold py-4 px-4">
          Register with The Souled Store 
        </h2>

        {/* Tabs */}
        <div className="flex border border-gray-300 mx-4 sm:mx-6">

          <button  onClick={() => navigate("/login")}    
            className={`w-1/2 py-3 text-xs sm:text-sm font-semibold ${
              currentTab === "login" ? "bg-teal-700 text-white" : "bg-white text-gray-600"}`} > LOGIN </button>    
            

          <button onClick={() => navigate("/register")}   
            className={`w-1/2 py-3 text-xs sm:text-sm font-semibold ${
              currentTab === "register" ? "bg-teal-700 text-white" : "bg-white text-gray-600"}`} > REGISTER </button>
            
          
        </div>

        {/* Tab Content */}
        <div className="relative bg-gray-100 border border-gray-400 mx-4 sm:mx-6 mt-7 mb-10 p-4 sm:p-6">

          {/* Triangle */}
          <div
            className={`absolute top-0 -translate-y-full
                        ${currentTab === "login" ? "left-1/4" : "left-3/4"}
                        -translate-x-1/2`}
          >
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-400" />
            <div className="absolute top-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-b-7 border-l-transparent border-r-transparent border-b-white" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <button className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded">
              <span className="text-blue-600 font-bold">f</span>
              <span className="text-sm font-medium">Facebook</span>
            </button>

            <button className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded">
              <span className="text-red-500 font-bold">G</span>
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          {/* OR */}
          <div className="text-center font-bold text-sm text-gray-600 mb-6">
            - OR -
          </div>

<form className="space-y-4 text-sm">

      {/* First & Last Name */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input required
          type="text"
          placeholder="First Name *"
          className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400"
        />
        <input
          type="text" required
          placeholder="Last Name"
          className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400"
        />
      </div>

      {/* Email */}
      <input
        type="email" required
        placeholder="Email ID *"
        className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400"
      />

      {/* Choose New Password */}
      <div className="relative">
        <input 
          type="password" required
          placeholder="Choose New Password *"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400 pr-10"
        />
       
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <input
          type="password" required
          placeholder="Confirm Password *"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400 pr-10"
        />
     
      </div>

      {/* Birthdate */}
      <input
  type="date"
  className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400 text-black"
  required
  max={new Date().toISOString().split("T")[0]}
  onFocus={(e) => e.target.showPicker?.()}  />

      <p className="text-xs text-gray-500">
        (Avail 10% Birthday discount as a member)
      </p>

      {/* Mobile Number */}
      <div className="flex">
       
        <input
          type="tel" required
          placeholder="+91  |  Mobile Number(For order status update) *"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm outline-none bg-white focus:border-gray-400"
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
        <span className="font-medium">Gender</span>
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input type="radio" name="gender"  />
            Male
          </label>

          <label className="flex items-center gap-1">
            <input type="radio" name="gender" />
            Female
          </label>

          <label className="flex items-center gap-1">
            <input type="radio" name="gender" />
            Other
          </label>
        </div>
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-teal-700 text-white py-3 rounded-md font-semibold hover:bg-teal-800 transition"
      >
        REGISTER
      </button>

    </form>

          {/* Footer */}
          <div className="text-center text-sm mt-4 text-gray-600">
            Already a Customer?{" "}
            <span onClick={() => navigate("/login")} className="text-red-500 cursor-pointer underline">
              Login
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
