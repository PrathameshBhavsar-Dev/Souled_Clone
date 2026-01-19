import React from "react";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer"
import AppRoutes from "./routes/AppRoutes"
import Categories from "./components/common/Categories";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Navigate to="/men" />} />

       
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>

      <Footer/>
     
    </Router>

    
  );
}

export default App;