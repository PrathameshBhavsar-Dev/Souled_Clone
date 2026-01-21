import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Sneakers from "../pages/Sneakers";

import Contact from "../components/common/Contact";
import Track from "../components/common/Track";
import Refund from "../components/common/Refund";
import SideBar from "../components/common/SideBar";
import CartDefault from "../components/public/CartDefault";
import About from "../components/common/About";



function App() {
    return (
       
        <Routes>
            <Route path="/" element={<Navigate to="/men" />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/sneakers" element={<Sneakers />} />
             <Route path="cartdefault" element={<CartDefault/>}/>
              <Route path="/sidebar" element={<SideBar/>}/>
             
             {/* Routes for footer, do not change */}
             <Route path="contact" element={<Contact/>}/>
              <Route path="track" element={<Track/>}/>
               <Route path="refund" element={<Refund/>}/>
               <Route path="about" element={<About/>}/>
              
               
            
             
        </Routes>
        
      
        
    );
}

export default App;