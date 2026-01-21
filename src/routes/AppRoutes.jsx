import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Sneakers from "../pages/Sneakers";
import Contact from "../components/common/Contact";


function App() {
    return (

        <Routes>
            <Route path="/" element={<Navigate to="/men" />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/sneakers" element={<Sneakers />} />

            <Route path="contact" element={<Contact />} />

        </Routes>



    );
}

export default App;