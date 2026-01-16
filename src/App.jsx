import React from "react";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer"
import AppRoutes from "./routes/AppRoutes"
import Categories from "./components/common/Categories";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Categories />
      <Footer />
    </>
  );
}

export default App;