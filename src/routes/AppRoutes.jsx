import { Routes, Route } from "react-router-dom";
import LoginSection from "../pages/Login";
import RegisterSection from "../pages/Register";
import Fav from "../pages/Fav";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSection />} />
      <Route path="/login" element={<LoginSection />} />
      <Route path="/register" element={<RegisterSection />} />
      <Route path="/wishlist" element={<Fav />} />
    </Routes>
  );
};

export default AppRoutes;
