import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-title">Let's <br /> <span>Explore Hotels</span></h2>
      <button className="search-btn">🔍</button>
    </header>
  );
};

export default Header;