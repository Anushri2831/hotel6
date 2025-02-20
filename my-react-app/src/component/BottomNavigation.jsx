import React from "react";
import "./BottomNavigation.css";

const BottomNavigation = () => {
  return (
    <nav className="bottom-nav">
      <button className="nav-btn active">🏠</button>
      <button className="nav-btn">❤</button>
      <button className="nav-btn">📅</button>
      <button className="nav-btn">👤</button>
    </nav>
  );
};

export default BottomNavigation;