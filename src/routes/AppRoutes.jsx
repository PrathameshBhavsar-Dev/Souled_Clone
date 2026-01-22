import { Routes, Route } from "react-router-dom";
// import LoginSection from "../pages/Login";
// import RegisterSection from "../pages/Register";


import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Sneakers from "../pages/Sneakers";
import Track from "../components/common/Track";
import Contact from "../components/common/Contact";
import CartDefault from "../components/public/CartDefault";
import Refund from "../components/common/Refund";
import About from "../components/common/About";
import ScrollToTop from "../components/ScrollToTop";
import WishlistDefault from "../components/public/WishlistDefault";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Navigation from "../components/common/Navigation";
import Faq from "../components/common/Faq";
import Account from "../components/common/Account";
import Investor from "../components/common/Investor";
import Careers from "../components/common/Careers";
import Gift from "../components/common/Gift";


function App() {
  return (
    <div>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/men" />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="cartdefault" element={<CartDefault />} />
        <Route path="wishlistdefault" element={<WishlistDefault />} />
        <Route path="/product/:category/:id" element={<ProductDetailsPage />} />
                <Route path="/category/:slug" element={<Navigation/>} />
        


        {/* routes to footer , do not change */}
        <Route path="track" element={<Track />} />
        <Route path="contact" element={<Contact />} />
        <Route path="refund" element={<Refund />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq/>} />
                <Route path="account" element={<Account/>} />
                <Route path="investor" element={<Investor/>} />
                <Route path="careers" element={<Careers/>} />
                 <Route path="gift" element={<Gift/>} />


      </Routes>
    </div>
  );
}

export default App;


