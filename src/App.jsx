import React from "react";      
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/public/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Sneakers from "./pages/Sneakers";
import Footer from "./components/public/Footer"
import Categories from "./components/common/Categories";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Navigate to="/men" />} />

       
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
        <Categories/>

      <Footer/>
     
    </Router>

    
  );
}

export default App;