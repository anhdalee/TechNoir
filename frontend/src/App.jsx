import React, { useState } from "react";
import Header from "./components/Header/Header";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ShopDetails from "./pages/ShopDetails/ShopDetails";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div>
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/shopDetails" element={<ShopDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
