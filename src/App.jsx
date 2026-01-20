
import React from "react";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer";
import AppRoutes from "./routes/AppRoutes";
import Categories from "./components/common/Categories";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideCategories = location.pathname.startsWith("/product/");

  return (
    <>
      <Navbar />

      <AppRoutes />

      {!hideCategories && <Categories />}

      <Footer />
    </>
  );
};

export default App;
