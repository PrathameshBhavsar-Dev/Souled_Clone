import { Routes, Route } from "react-router-dom";
import LoginSection from "../pages/Login";
import RegisterSection from "../pages/Register";
import WishlistDefault from "../components/public/WishlistDefault";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Sneakers from "../pages/Sneakers";
// import Track from "../components/common/Track";
import Contact from "../components/common/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginSection />} />
      <Route path="/register" element={<RegisterSection />} />
      <Route path="/" element={<Navigate to="/men" />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/wishlist" element={<WishlistDefault />} />
      {/* <Route path="track" element={<Track/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default AppRoutes;
