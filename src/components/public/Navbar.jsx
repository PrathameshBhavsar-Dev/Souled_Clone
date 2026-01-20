import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaMicrophone,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const menuItems = ["MEN", "WOMEN", "SNEAKERS"];

  // FIXED: Proper active category detection
  const activeCategory =
    location.pathname.split("/")[1]?.toUpperCase() || "MEN";

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* LEFT SECTION */}
          <div className="flex items-center gap-7 pl-3">
            <FaBars className="text-xl cursor-pointer text-gray-600 opacity-70" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 font-semibold text-gray-800">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer font-bold pb-1 relative
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:h-0.5 after:bg-red-500 after:w-full
                    after:scale-x-0 after:origin-left after:transition-transform
                    hover:after:scale-x-100
                    ${
                      activeCategory === item
                        ? "after:scale-x-100 text-red-600"
                        : ""
                    }`}
                >
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand logo */}
          <div>
            <img src="logo.png" className="h-12 pl-6" alt="logo" />
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 md:gap-7 pr-3">
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center border border-black rounded-full px-4 py-2 gap-3">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none text-sm w-44"
              />
              <FaMicrophone className="text-gray-500 cursor-pointer" />
              <FaSearch className="text-gray-500 cursor-pointer" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              
              {/* USER ICON */}
              <div className="relative group hidden md:block">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 hover:border-red-500 transition-all">
                  <FaUser className="text-gray-700 text-lg" />
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="flex flex-col text-sm">
                    {[
                      "Orders",
                      "Gift Vouchers",
                      "TSS Money",
                      "TSS Points",
                      "Profile",
                      "FAQs",
                      "Contact Us",
                      "Logout",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-red-500 cursor-pointer"
                      >
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Heart */}
              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 hover:border-red-500 transition-all">
                <FaHeart className="text-gray-700 text-lg hover:text-red-500" />
              </div>

              {/* Cart */}
              <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 hover:border-red-500 transition-all">
                <FaShoppingCart className="text-gray-700 text-lg hover:text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE CATEGORY BAR ================= */}
      <div className="md:hidden w-full bg-white border-b">
        <ul className="flex justify-around text-sm font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`py-3 ${
                activeCategory === item
                  ? "underline decoration-4 decoration-blue-400"
                  : ""
              }`}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
