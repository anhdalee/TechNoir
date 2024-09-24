import React, { useState } from "react";
import Header from "./components/Header/Header";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div>
        <Header setShowLogin={setShowLogin} />
      </div>
    </>
  );
};

export default App;
