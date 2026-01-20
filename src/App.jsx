import React from "react";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer"
import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;