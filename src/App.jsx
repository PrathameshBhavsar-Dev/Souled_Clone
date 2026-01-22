import React from "react";
import { useState } from "react";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer"
import AppRoutes from "./routes/AppRoutes"
import SideBar from "./components/common/SideBar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <SideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <AppRoutes />
      

      <Footer />
    </>
  );
};

export default App;